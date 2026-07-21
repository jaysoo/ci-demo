import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream471 } from '../../components/generated/widget-471';
import { Panel472 } from '../../components/generated/widget-472';
import { Board473 } from '../../components/generated/widget-473';
import { Orbit474 } from '../../components/generated/widget-474';
import { Stream475 } from '../../components/generated/widget-475';
import { Panel476 } from '../../components/generated/widget-476';
import { Board477 } from '../../components/generated/widget-477';
import { Orbit478 } from '../../components/generated/widget-478';
import { Stream479 } from '../../components/generated/widget-479';
import { Panel480 } from '../../components/generated/widget-480';

const SAMPLE = `export const panel = 48;`;

export const Route = createFileRoute('/demo/panel-48')({
  loader: async () => ({ code: await highlight(SAMPLE, 48) }),
  component: Demo48,
});

function Demo48() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 48</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream471 />
        <Panel472 />
        <Board473 />
        <Orbit474 />
        <Stream475 />
        <Panel476 />
        <Board477 />
        <Orbit478 />
        <Stream479 />
        <Panel480 />
      </div>
    </main>
  );
}
