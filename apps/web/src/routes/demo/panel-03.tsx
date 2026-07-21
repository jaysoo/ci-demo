import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board021 } from '../../components/generated/widget-021';
import { Orbit022 } from '../../components/generated/widget-022';
import { Stream023 } from '../../components/generated/widget-023';
import { Panel024 } from '../../components/generated/widget-024';
import { Board025 } from '../../components/generated/widget-025';
import { Orbit026 } from '../../components/generated/widget-026';
import { Stream027 } from '../../components/generated/widget-027';
import { Panel028 } from '../../components/generated/widget-028';
import { Board029 } from '../../components/generated/widget-029';
import { Orbit030 } from '../../components/generated/widget-030';

const SAMPLE = `export const panel = 3;`;

export const Route = createFileRoute('/demo/panel-03')({
  loader: async () => ({ code: await highlight(SAMPLE, 3) }),
  component: Demo03,
});

function Demo03() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 03</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board021 />
        <Orbit022 />
        <Stream023 />
        <Panel024 />
        <Board025 />
        <Orbit026 />
        <Stream027 />
        <Panel028 />
        <Board029 />
        <Orbit030 />
      </div>
    </main>
  );
}
