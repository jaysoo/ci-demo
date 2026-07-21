import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream411 } from '../../components/generated/widget-411';
import { Panel412 } from '../../components/generated/widget-412';
import { Board413 } from '../../components/generated/widget-413';
import { Orbit414 } from '../../components/generated/widget-414';
import { Stream415 } from '../../components/generated/widget-415';
import { Panel416 } from '../../components/generated/widget-416';
import { Board417 } from '../../components/generated/widget-417';
import { Orbit418 } from '../../components/generated/widget-418';
import { Stream419 } from '../../components/generated/widget-419';
import { Panel420 } from '../../components/generated/widget-420';

const SAMPLE = `export const panel = 42;`;

export const Route = createFileRoute('/demo/panel-42')({
  loader: async () => ({ code: await highlight(SAMPLE, 42) }),
  component: Demo42,
});

function Demo42() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 42</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream411 />
        <Panel412 />
        <Board413 />
        <Orbit414 />
        <Stream415 />
        <Panel416 />
        <Board417 />
        <Orbit418 />
        <Stream419 />
        <Panel420 />
      </div>
    </main>
  );
}
