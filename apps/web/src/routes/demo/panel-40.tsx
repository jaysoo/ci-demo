import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream391 } from '../../components/generated/widget-391';
import { Panel392 } from '../../components/generated/widget-392';
import { Board393 } from '../../components/generated/widget-393';
import { Orbit394 } from '../../components/generated/widget-394';
import { Stream395 } from '../../components/generated/widget-395';
import { Panel396 } from '../../components/generated/widget-396';
import { Board397 } from '../../components/generated/widget-397';
import { Orbit398 } from '../../components/generated/widget-398';
import { Stream399 } from '../../components/generated/widget-399';
import { Panel400 } from '../../components/generated/widget-400';

const SAMPLE = `export const panel = 40;`;

export const Route = createFileRoute('/demo/panel-40')({
  loader: async () => ({ code: await highlight(SAMPLE, 40) }),
  component: Demo40,
});

function Demo40() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 40</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream391 />
        <Panel392 />
        <Board393 />
        <Orbit394 />
        <Stream395 />
        <Panel396 />
        <Board397 />
        <Orbit398 />
        <Stream399 />
        <Panel400 />
      </div>
    </main>
  );
}
