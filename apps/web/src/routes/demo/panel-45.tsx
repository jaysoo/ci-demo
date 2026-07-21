import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board441 } from '../../components/generated/widget-441';
import { Orbit442 } from '../../components/generated/widget-442';
import { Stream443 } from '../../components/generated/widget-443';
import { Panel444 } from '../../components/generated/widget-444';
import { Board445 } from '../../components/generated/widget-445';
import { Orbit446 } from '../../components/generated/widget-446';
import { Stream447 } from '../../components/generated/widget-447';
import { Panel448 } from '../../components/generated/widget-448';
import { Board449 } from '../../components/generated/widget-449';
import { Orbit450 } from '../../components/generated/widget-450';

const SAMPLE = `export const panel = 45;`;

export const Route = createFileRoute('/demo/panel-45')({
  loader: async () => ({ code: await highlight(SAMPLE, 45) }),
  component: Demo45,
});

function Demo45() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 45</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board441 />
        <Orbit442 />
        <Stream443 />
        <Panel444 />
        <Board445 />
        <Orbit446 />
        <Stream447 />
        <Panel448 />
        <Board449 />
        <Orbit450 />
      </div>
    </main>
  );
}
