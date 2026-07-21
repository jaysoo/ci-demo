import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board521 } from '../../components/generated/widget-521';
import { Orbit522 } from '../../components/generated/widget-522';
import { Stream523 } from '../../components/generated/widget-523';
import { Panel524 } from '../../components/generated/widget-524';
import { Board525 } from '../../components/generated/widget-525';
import { Orbit526 } from '../../components/generated/widget-526';
import { Stream527 } from '../../components/generated/widget-527';
import { Panel528 } from '../../components/generated/widget-528';
import { Board529 } from '../../components/generated/widget-529';
import { Orbit530 } from '../../components/generated/widget-530';

const SAMPLE = `export const panel = 53;`;

export const Route = createFileRoute('/demo/panel-53')({
  loader: async () => ({ code: await highlight(SAMPLE, 53) }),
  component: Demo53,
});

function Demo53() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 53</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board521 />
        <Orbit522 />
        <Stream523 />
        <Panel524 />
        <Board525 />
        <Orbit526 />
        <Stream527 />
        <Panel528 />
        <Board529 />
        <Orbit530 />
      </div>
    </main>
  );
}
