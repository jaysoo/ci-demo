import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board141 } from '../../components/generated/widget-141';
import { Orbit142 } from '../../components/generated/widget-142';
import { Stream143 } from '../../components/generated/widget-143';
import { Panel144 } from '../../components/generated/widget-144';
import { Board145 } from '../../components/generated/widget-145';
import { Orbit146 } from '../../components/generated/widget-146';
import { Stream147 } from '../../components/generated/widget-147';
import { Panel148 } from '../../components/generated/widget-148';
import { Board149 } from '../../components/generated/widget-149';
import { Orbit150 } from '../../components/generated/widget-150';

const SAMPLE = `export const panel = 15;`;

export const Route = createFileRoute('/demo/panel-15')({
  loader: async () => ({ code: await highlight(SAMPLE, 15) }),
  component: Demo15,
});

function Demo15() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 15</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board141 />
        <Orbit142 />
        <Stream143 />
        <Panel144 />
        <Board145 />
        <Orbit146 />
        <Stream147 />
        <Panel148 />
        <Board149 />
        <Orbit150 />
      </div>
    </main>
  );
}
