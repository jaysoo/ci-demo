import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board121 } from '../../components/generated/widget-121';
import { Orbit122 } from '../../components/generated/widget-122';
import { Stream123 } from '../../components/generated/widget-123';
import { Panel124 } from '../../components/generated/widget-124';
import { Board125 } from '../../components/generated/widget-125';
import { Orbit126 } from '../../components/generated/widget-126';
import { Stream127 } from '../../components/generated/widget-127';
import { Panel128 } from '../../components/generated/widget-128';
import { Board129 } from '../../components/generated/widget-129';
import { Orbit130 } from '../../components/generated/widget-130';

const SAMPLE = `export const panel = 13;`;

export const Route = createFileRoute('/demo/panel-13')({
  loader: async () => ({ code: await highlight(SAMPLE, 13) }),
  component: Demo13,
});

function Demo13() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 13</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board121 />
        <Orbit122 />
        <Stream123 />
        <Panel124 />
        <Board125 />
        <Orbit126 />
        <Stream127 />
        <Panel128 />
        <Board129 />
        <Orbit130 />
      </div>
    </main>
  );
}
