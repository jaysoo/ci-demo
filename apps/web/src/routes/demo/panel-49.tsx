import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board481 } from '../../components/generated/widget-481';
import { Orbit482 } from '../../components/generated/widget-482';
import { Stream483 } from '../../components/generated/widget-483';
import { Panel484 } from '../../components/generated/widget-484';
import { Board485 } from '../../components/generated/widget-485';
import { Orbit486 } from '../../components/generated/widget-486';
import { Stream487 } from '../../components/generated/widget-487';
import { Panel488 } from '../../components/generated/widget-488';
import { Board489 } from '../../components/generated/widget-489';
import { Orbit490 } from '../../components/generated/widget-490';

const SAMPLE = `export const panel = 49;`;

export const Route = createFileRoute('/demo/panel-49')({
  loader: async () => ({ code: await highlight(SAMPLE, 49) }),
  component: Demo49,
});

function Demo49() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 49</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board481 />
        <Orbit482 />
        <Stream483 />
        <Panel484 />
        <Board485 />
        <Orbit486 />
        <Stream487 />
        <Panel488 />
        <Board489 />
        <Orbit490 />
      </div>
    </main>
  );
}
