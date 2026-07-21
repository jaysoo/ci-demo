import { useMemo } from 'react';
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend,
  Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart,
  ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis,
} from 'recharts';
import { scaleLinear, scaleSequential, scaleBand, scaleTime } from 'd3-scale';
import { interpolateViridis, interpolateInferno } from 'd3-scale-chromatic';
import { extent, max, mean, bisector, histogram } from 'd3-array';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';
import { chunk, groupBy, orderBy, sumBy } from 'lodash-es';
import { addDays, formatISO, startOfWeek } from 'date-fns';

export interface Panel056Datum {
  label: string;
  value: number;
  secondary: number;
  bucket: string;
  at: string;
}

const BASE = startOfWeek(new Date(2024, 0, 1));

export function makePanel056Data(size = 48): Panel056Datum[] {
  return Array.from({ length: size }, (_, i) => ({
    label: `p${i}`,
    value: Math.sin(i / (56 % 7 || 3)) * 100 + 120,
    secondary: Math.cos(i / 4) * 40 + 60,
    bucket: `b${i % 6}`,
    at: formatISO(addDays(BASE, i)),
  }));
}

const tick = format('.2s');
const day = timeFormat('%b %d');
const byValue = bisector((d: Panel056Datum) => d.value);

export function Panel056({ size = 48 }: { size?: number }) {
  const data = useMemo(() => makePanel056Data(size), [size]);

  const stats = useMemo(() => {
    const grouped = groupBy(data, (d) => d.bucket);
    const ranked = orderBy(
      Object.entries(grouped).map(([bucket, rows]) => ({
        bucket,
        total: sumBy(rows, (r) => r.value),
        avg: mean(rows.map((r) => r.secondary)) ?? 0,
      })),
      ['total'],
      ['desc'],
    );
    const domain = extent(data, (d) => d.value) as [number, number];
    const linear = scaleLinear().domain(domain).range([0, 1]);
    const band = scaleBand<string>().domain(data.map((d) => d.label)).range([0, 100]);
    const time = scaleTime().domain([BASE, addDays(BASE, size)]).range([0, 100]);
    const warm = scaleSequential(interpolateViridis).domain(domain);
    const cool = scaleSequential(interpolateInferno).domain(domain);
    const bins = histogram<Panel056Datum, number>()
      .value((d) => d.value)
      .domain(domain)(data);
    return {
      ranked,
      pages: chunk(ranked, 3),
      peak: max(data, (d) => d.value) ?? 0,
      bins: bins.length,
      mid: byValue.left(data, 100),
      normalized: data.map((d) => linear(d.value)),
      colors: data.map((d, i) => (i % 2 ? warm(d.value) : cool(d.value))),
      bandwidth: band.bandwidth(),
      firstDay: day(time.invert(0)),
    };
  }, [data, size]);

  const pieData = stats.ranked.map((r) => ({ name: r.bucket, value: r.total }));

  return (
    <section className="rounded-2xl border border-black/5 p-4">
      <header className="mb-2 flex items-baseline justify-between">
        <h3 className="text-sm font-semibold">Panel 056</h3>
        <span className="text-xs opacity-60">
          peak {tick(stats.peak)} · {stats.bins} bins · {stats.firstDay}
        </span>
      </header>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis tickFormatter={tick} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="secondary" stroke="#4fb8b2" fill="#4fb8b2" />
            <Bar dataKey="value" fill="#2f6a4a" />
            <Line type="monotone" dataKey="value" stroke="#173a40" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="h-28">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={40}>
                {pieData.map((entry, i) => (
                  <Cell key={entry.name} fill={stats.colors[i] ?? '#4fb8b2'} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="h-28">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={pieData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar dataKey="value" stroke="#4fb8b2" fill="#4fb8b2" fillOpacity={0.4} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-28">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <XAxis dataKey="value" type="number" />
              <YAxis dataKey="secondary" type="number" />
              <ZAxis range={[20, 80]} />
              <Scatter data={data} fill="#2f6a4a" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Panel056;
