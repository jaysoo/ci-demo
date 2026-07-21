import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board261 } from '../../components/generated/widget-261';
import { Orbit262 } from '../../components/generated/widget-262';
import { Stream263 } from '../../components/generated/widget-263';
import { Panel264 } from '../../components/generated/widget-264';
import { Board265 } from '../../components/generated/widget-265';
import { Orbit266 } from '../../components/generated/widget-266';
import { Stream267 } from '../../components/generated/widget-267';
import { Panel268 } from '../../components/generated/widget-268';
import { Board269 } from '../../components/generated/widget-269';
import { Orbit270 } from '../../components/generated/widget-270';

const SAMPLE = `export const panel = 27;`;

export const Route = createFileRoute('/demo/panel-27')({
  loader: async () => ({ code: await highlight(SAMPLE, 27) }),
  component: Demo27,
});

function Demo27() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 27</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board261 />
        <Orbit262 />
        <Stream263 />
        <Panel264 />
        <Board265 />
        <Orbit266 />
        <Stream267 />
        <Panel268 />
        <Board269 />
        <Orbit270 />
      </div>
    </main>
  );
}
