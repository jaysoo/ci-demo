import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream511 } from '../../components/generated/widget-511';
import { Panel512 } from '../../components/generated/widget-512';
import { Board513 } from '../../components/generated/widget-513';
import { Orbit514 } from '../../components/generated/widget-514';
import { Stream515 } from '../../components/generated/widget-515';
import { Panel516 } from '../../components/generated/widget-516';
import { Board517 } from '../../components/generated/widget-517';
import { Orbit518 } from '../../components/generated/widget-518';
import { Stream519 } from '../../components/generated/widget-519';
import { Panel520 } from '../../components/generated/widget-520';

const SAMPLE = `export const panel = 52;`;

export const Route = createFileRoute('/demo/panel-52')({
  loader: async () => ({ code: await highlight(SAMPLE, 52) }),
  component: Demo52,
});

function Demo52() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 52</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream511 />
        <Panel512 />
        <Board513 />
        <Orbit514 />
        <Stream515 />
        <Panel516 />
        <Board517 />
        <Orbit518 />
        <Stream519 />
        <Panel520 />
      </div>
    </main>
  );
}
