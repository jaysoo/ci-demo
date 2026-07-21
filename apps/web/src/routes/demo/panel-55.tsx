import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board541 } from '../../components/generated/widget-541';
import { Orbit542 } from '../../components/generated/widget-542';
import { Stream543 } from '../../components/generated/widget-543';
import { Panel544 } from '../../components/generated/widget-544';
import { Board545 } from '../../components/generated/widget-545';
import { Orbit546 } from '../../components/generated/widget-546';
import { Stream547 } from '../../components/generated/widget-547';
import { Panel548 } from '../../components/generated/widget-548';
import { Board549 } from '../../components/generated/widget-549';
import { Orbit550 } from '../../components/generated/widget-550';

const SAMPLE = `export const panel = 55;`;

export const Route = createFileRoute('/demo/panel-55')({
  loader: async () => ({ code: await highlight(SAMPLE, 55) }),
  component: Demo55,
});

function Demo55() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 55</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board541 />
        <Orbit542 />
        <Stream543 />
        <Panel544 />
        <Board545 />
        <Orbit546 />
        <Stream547 />
        <Panel548 />
        <Board549 />
        <Orbit550 />
      </div>
    </main>
  );
}
