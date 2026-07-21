import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board581 } from '../../components/generated/widget-581';
import { Orbit582 } from '../../components/generated/widget-582';
import { Stream583 } from '../../components/generated/widget-583';
import { Panel584 } from '../../components/generated/widget-584';
import { Board585 } from '../../components/generated/widget-585';
import { Orbit586 } from '../../components/generated/widget-586';
import { Stream587 } from '../../components/generated/widget-587';
import { Panel588 } from '../../components/generated/widget-588';
import { Board589 } from '../../components/generated/widget-589';
import { Orbit590 } from '../../components/generated/widget-590';

const SAMPLE = `export const panel = 59;`;

export const Route = createFileRoute('/demo/panel-59')({
  loader: async () => ({ code: await highlight(SAMPLE, 59) }),
  component: Demo59,
});

function Demo59() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 59</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board581 />
        <Orbit582 />
        <Stream583 />
        <Panel584 />
        <Board585 />
        <Orbit586 />
        <Stream587 />
        <Panel588 />
        <Board589 />
        <Orbit590 />
      </div>
    </main>
  );
}
