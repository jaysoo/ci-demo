import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream531 } from '../../components/generated/widget-531';
import { Panel532 } from '../../components/generated/widget-532';
import { Board533 } from '../../components/generated/widget-533';
import { Orbit534 } from '../../components/generated/widget-534';
import { Stream535 } from '../../components/generated/widget-535';
import { Panel536 } from '../../components/generated/widget-536';
import { Board537 } from '../../components/generated/widget-537';
import { Orbit538 } from '../../components/generated/widget-538';
import { Stream539 } from '../../components/generated/widget-539';
import { Panel540 } from '../../components/generated/widget-540';

const SAMPLE = `export const panel = 54;`;

export const Route = createFileRoute('/demo/panel-54')({
  loader: async () => ({ code: await highlight(SAMPLE, 54) }),
  component: Demo54,
});

function Demo54() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 54</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream531 />
        <Panel532 />
        <Board533 />
        <Orbit534 />
        <Stream535 />
        <Panel536 />
        <Board537 />
        <Orbit538 />
        <Stream539 />
        <Panel540 />
      </div>
    </main>
  );
}
