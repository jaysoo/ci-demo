import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board281 } from '../../components/generated/widget-281';
import { Orbit282 } from '../../components/generated/widget-282';
import { Stream283 } from '../../components/generated/widget-283';
import { Panel284 } from '../../components/generated/widget-284';
import { Board285 } from '../../components/generated/widget-285';
import { Orbit286 } from '../../components/generated/widget-286';
import { Stream287 } from '../../components/generated/widget-287';
import { Panel288 } from '../../components/generated/widget-288';
import { Board289 } from '../../components/generated/widget-289';
import { Orbit290 } from '../../components/generated/widget-290';

const SAMPLE = `export const panel = 29;`;

export const Route = createFileRoute('/demo/panel-29')({
  loader: async () => ({ code: await highlight(SAMPLE, 29) }),
  component: Demo29,
});

function Demo29() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 29</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board281 />
        <Orbit282 />
        <Stream283 />
        <Panel284 />
        <Board285 />
        <Orbit286 />
        <Stream287 />
        <Panel288 />
        <Board289 />
        <Orbit290 />
      </div>
    </main>
  );
}
