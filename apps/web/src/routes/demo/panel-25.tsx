import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board241 } from '../../components/generated/widget-241';
import { Orbit242 } from '../../components/generated/widget-242';
import { Stream243 } from '../../components/generated/widget-243';
import { Panel244 } from '../../components/generated/widget-244';
import { Board245 } from '../../components/generated/widget-245';
import { Orbit246 } from '../../components/generated/widget-246';
import { Stream247 } from '../../components/generated/widget-247';
import { Panel248 } from '../../components/generated/widget-248';
import { Board249 } from '../../components/generated/widget-249';
import { Orbit250 } from '../../components/generated/widget-250';

const SAMPLE = `export const panel = 25;`;

export const Route = createFileRoute('/demo/panel-25')({
  loader: async () => ({ code: await highlight(SAMPLE, 25) }),
  component: Demo25,
});

function Demo25() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 25</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board241 />
        <Orbit242 />
        <Stream243 />
        <Panel244 />
        <Board245 />
        <Orbit246 />
        <Stream247 />
        <Panel248 />
        <Board249 />
        <Orbit250 />
      </div>
    </main>
  );
}
