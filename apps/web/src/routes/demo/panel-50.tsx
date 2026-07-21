import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream491 } from '../../components/generated/widget-491';
import { Panel492 } from '../../components/generated/widget-492';
import { Board493 } from '../../components/generated/widget-493';
import { Orbit494 } from '../../components/generated/widget-494';
import { Stream495 } from '../../components/generated/widget-495';
import { Panel496 } from '../../components/generated/widget-496';
import { Board497 } from '../../components/generated/widget-497';
import { Orbit498 } from '../../components/generated/widget-498';
import { Stream499 } from '../../components/generated/widget-499';
import { Panel500 } from '../../components/generated/widget-500';

const SAMPLE = `export const panel = 50;`;

export const Route = createFileRoute('/demo/panel-50')({
  loader: async () => ({ code: await highlight(SAMPLE, 50) }),
  component: Demo50,
});

function Demo50() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 50</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream491 />
        <Panel492 />
        <Board493 />
        <Orbit494 />
        <Stream495 />
        <Panel496 />
        <Board497 />
        <Orbit498 />
        <Stream499 />
        <Panel500 />
      </div>
    </main>
  );
}
