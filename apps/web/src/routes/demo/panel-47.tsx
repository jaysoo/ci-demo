import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board461 } from '../../components/generated/widget-461';
import { Orbit462 } from '../../components/generated/widget-462';
import { Stream463 } from '../../components/generated/widget-463';
import { Panel464 } from '../../components/generated/widget-464';
import { Board465 } from '../../components/generated/widget-465';
import { Orbit466 } from '../../components/generated/widget-466';
import { Stream467 } from '../../components/generated/widget-467';
import { Panel468 } from '../../components/generated/widget-468';
import { Board469 } from '../../components/generated/widget-469';
import { Orbit470 } from '../../components/generated/widget-470';

const SAMPLE = `export const panel = 47;`;

export const Route = createFileRoute('/demo/panel-47')({
  loader: async () => ({ code: await highlight(SAMPLE, 47) }),
  component: Demo47,
});

function Demo47() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 47</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board461 />
        <Orbit462 />
        <Stream463 />
        <Panel464 />
        <Board465 />
        <Orbit466 />
        <Stream467 />
        <Panel468 />
        <Board469 />
        <Orbit470 />
      </div>
    </main>
  );
}
