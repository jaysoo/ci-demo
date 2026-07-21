import { useMemo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { differenceInDays, formatDistanceToNow, parseISO } from 'date-fns';
import { partition, uniqBy } from 'lodash-es';

export interface Record153 {
  id: string;
  owner: string;
  status: 'open' | 'closed' | 'blocked';
  updatedAt: string;
  weight: number;
}

const SEED: Record153[] = Array.from({ length: 24 }, (_, i) => ({
  id: `r-153-${i}`,
  owner: `owner-${i % 5}`,
  status: (['open', 'closed', 'blocked'] as const)[i % 3],
  updatedAt: new Date(2024, 0, 1 + i).toISOString(),
  weight: (i * 153) % 100,
}));

const STEPS = ['Triage', 'Build', 'Review', 'Ship'];

export function Board153() {
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [snack, setSnack] = useState(false);
  const [query, setQuery] = useState('');
  const [weight, setWeight] = useState(40);
  const [dense, setDense] = useState(true);
  const [rating, setRating] = useState<number | null>(3);
  const [selected, setSelected] = useState<string[]>([]);

  const { active, done, staleDays } = useMemo(() => {
    const unique = uniqBy(SEED, (r) => r.id);
    const [openRows, otherRows] = partition(unique, (r) => r.status === 'open');
    return {
      active: openRows,
      done: otherRows,
      staleDays: differenceInDays(new Date(2024, 6, 1), parseISO(SEED[0].updatedAt)),
    };
  }, []);

  const progress = (done.length / SEED.length) * 100;

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
          <Badge badgeContent={active.length} color="primary">
            <Avatar sx={{ width: 28, height: 28 }}>B</Avatar>
          </Badge>
          <Typography variant="h6">Board 153</Typography>
          <Chip size="small" label={`${active.length} active`} />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Toggle detail">
            <Button size="small" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Collapse' : 'Expand'}
            </Button>
          </Tooltip>
          <ButtonGroup size="small">
            <Button onClick={() => setDialog(true)}>Dialog</Button>
            <Button onClick={() => setDrawer(true)}>Drawer</Button>
            <Button onClick={(e) => setMenuAnchor(e.currentTarget)}>Menu</Button>
          </ButtonGroup>
        </Stack>

        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />

        <Tabs value={tab} onChange={(_, v: number) => setTab(v)} sx={{ mb: 2 }}>
          <Tab label="Active" />
          <Tab label="Done" />
          <Tab label="Settings" />
        </Tabs>

        {staleDays > 90 ? (
          <Alert severity="warning" sx={{ mb: 2 }}>
            Oldest record is {formatDistanceToNow(parseISO(SEED[0].updatedAt))} old.
          </Alert>
        ) : null}

        <Stepper activeStep={tab} sx={{ mb: 2 }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            size="small"
            label="Filter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Autocomplete
            size="small"
            sx={{ minWidth: 180 }}
            options={SEED.map((r) => r.owner)}
            value={selected[0] ?? null}
            onChange={(_, v) => setSelected(v ? [v] : [])}
            renderInput={(params) => <TextField {...params} label="Owner" />}
          />
          <Select size="small" value={String(page)} onChange={(e) => setPage(Number(e.target.value))}>
            <MenuItem value="1">Page 1</MenuItem>
            <MenuItem value="2">Page 2</MenuItem>
          </Select>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 2 }}>
          <Slider value={weight} onChange={(_, v) => setWeight(v as number)} sx={{ maxWidth: 200 }} />
          <FormControlLabel
            control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
            label="Dense"
          />
          <FormControlLabel
            control={<Checkbox checked={snack} onChange={(e) => setSnack(e.target.checked)} />}
            label="Notify"
          />
          <Rating value={rating} onChange={(_, v) => setRating(v)} />
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Accordion expanded={expanded} onChange={() => setExpanded((v) => !v)}>
          <AccordionSummary>
            <Typography variant="body2">Records</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size={dense ? 'small' : 'medium'}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {active.slice(0, 8).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell align="right">{row.weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>

        <List dense={dense}>
          {done.slice(0, 4).map((row) => (
            <ListItem key={row.id}>
              <ListItemText primary={row.id} secondary={row.status} />
            </ListItem>
          ))}
        </List>

        <Pagination count={4} page={page} onChange={(_, v) => setPage(v)} size="small" />
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => setSnack(true)}>
          Save
        </Button>
      </CardActions>

      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>Board 153</DialogTitle>
        <DialogContent>
          <Typography variant="body2">{active.length} active records.</Typography>
        </DialogContent>
      </Dialog>

      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <Box sx={{ width: 240, p: 2 }}>
          <Typography variant="subtitle2">Filters</Typography>
        </Box>
      </Drawer>

      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        <MenuItem onClick={() => setMenuAnchor(null)}>Refresh</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>Export</MenuItem>
      </Menu>

      <Snackbar open={snack} autoHideDuration={2000} onClose={() => setSnack(false)} message="Saved" />
    </Card>
  );
}

export default Board153;
