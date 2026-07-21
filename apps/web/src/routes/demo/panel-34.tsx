import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream331 } from '../../components/generated/widget-331';
import { Panel332 } from '../../components/generated/widget-332';
import { Board333 } from '../../components/generated/widget-333';
import { Orbit334 } from '../../components/generated/widget-334';
import { Stream335 } from '../../components/generated/widget-335';
import { Panel336 } from '../../components/generated/widget-336';
import { Board337 } from '../../components/generated/widget-337';
import { Orbit338 } from '../../components/generated/widget-338';
import { Stream339 } from '../../components/generated/widget-339';
import { Panel340 } from '../../components/generated/widget-340';

const SAMPLE = `export const panel = 34;`;

export const Route = createFileRoute('/demo/panel-34')({
  loader: async () => ({ code: await highlight(SAMPLE, 34) }),
  component: Demo34,
});

function Demo34() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 34</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream331 />
        <Panel332 />
        <Board333 />
        <Orbit334 />
        <Stream335 />
        <Panel336 />
        <Board337 />
        <Orbit338 />
        <Stream339 />
        <Panel340 />
      </div>
    </main>
  );
}
