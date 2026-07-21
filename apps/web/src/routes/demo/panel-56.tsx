import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream551 } from '../../components/generated/widget-551';
import { Panel552 } from '../../components/generated/widget-552';
import { Board553 } from '../../components/generated/widget-553';
import { Orbit554 } from '../../components/generated/widget-554';
import { Stream555 } from '../../components/generated/widget-555';
import { Panel556 } from '../../components/generated/widget-556';
import { Board557 } from '../../components/generated/widget-557';
import { Orbit558 } from '../../components/generated/widget-558';
import { Stream559 } from '../../components/generated/widget-559';
import { Panel560 } from '../../components/generated/widget-560';

const SAMPLE = `export const panel = 56;`;

export const Route = createFileRoute('/demo/panel-56')({
  loader: async () => ({ code: await highlight(SAMPLE, 56) }),
  component: Demo56,
});

function Demo56() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 56</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream551 />
        <Panel552 />
        <Board553 />
        <Orbit554 />
        <Stream555 />
        <Panel556 />
        <Board557 />
        <Orbit558 />
        <Stream559 />
        <Panel560 />
      </div>
    </main>
  );
}
