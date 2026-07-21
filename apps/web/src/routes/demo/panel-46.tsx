import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream451 } from '../../components/generated/widget-451';
import { Panel452 } from '../../components/generated/widget-452';
import { Board453 } from '../../components/generated/widget-453';
import { Orbit454 } from '../../components/generated/widget-454';
import { Stream455 } from '../../components/generated/widget-455';
import { Panel456 } from '../../components/generated/widget-456';
import { Board457 } from '../../components/generated/widget-457';
import { Orbit458 } from '../../components/generated/widget-458';
import { Stream459 } from '../../components/generated/widget-459';
import { Panel460 } from '../../components/generated/widget-460';

const SAMPLE = `export const panel = 46;`;

export const Route = createFileRoute('/demo/panel-46')({
  loader: async () => ({ code: await highlight(SAMPLE, 46) }),
  component: Demo46,
});

function Demo46() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 46</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream451 />
        <Panel452 />
        <Board453 />
        <Orbit454 />
        <Stream455 />
        <Panel456 />
        <Board457 />
        <Orbit458 />
        <Stream459 />
        <Panel460 />
      </div>
    </main>
  );
}
