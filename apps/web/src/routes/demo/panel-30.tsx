import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream291 } from '../../components/generated/widget-291';
import { Panel292 } from '../../components/generated/widget-292';
import { Board293 } from '../../components/generated/widget-293';
import { Orbit294 } from '../../components/generated/widget-294';
import { Stream295 } from '../../components/generated/widget-295';
import { Panel296 } from '../../components/generated/widget-296';
import { Board297 } from '../../components/generated/widget-297';
import { Orbit298 } from '../../components/generated/widget-298';
import { Stream299 } from '../../components/generated/widget-299';
import { Panel300 } from '../../components/generated/widget-300';

const SAMPLE = `export const panel = 30;`;

export const Route = createFileRoute('/demo/panel-30')({
  loader: async () => ({ code: await highlight(SAMPLE, 30) }),
  component: Demo30,
});

function Demo30() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 30</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream291 />
        <Panel292 />
        <Board293 />
        <Orbit294 />
        <Stream295 />
        <Panel296 />
        <Board297 />
        <Orbit298 />
        <Stream299 />
        <Panel300 />
      </div>
    </main>
  );
}
