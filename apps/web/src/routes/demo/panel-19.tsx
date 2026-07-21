import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board181 } from '../../components/generated/widget-181';
import { Orbit182 } from '../../components/generated/widget-182';
import { Stream183 } from '../../components/generated/widget-183';
import { Panel184 } from '../../components/generated/widget-184';
import { Board185 } from '../../components/generated/widget-185';
import { Orbit186 } from '../../components/generated/widget-186';
import { Stream187 } from '../../components/generated/widget-187';
import { Panel188 } from '../../components/generated/widget-188';
import { Board189 } from '../../components/generated/widget-189';
import { Orbit190 } from '../../components/generated/widget-190';

const SAMPLE = `export const panel = 19;`;

export const Route = createFileRoute('/demo/panel-19')({
  loader: async () => ({ code: await highlight(SAMPLE, 19) }),
  component: Demo19,
});

function Demo19() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 19</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board181 />
        <Orbit182 />
        <Stream183 />
        <Panel184 />
        <Board185 />
        <Orbit186 />
        <Stream187 />
        <Panel188 />
        <Board189 />
        <Orbit190 />
      </div>
    </main>
  );
}
