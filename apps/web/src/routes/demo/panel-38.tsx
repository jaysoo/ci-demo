import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream371 } from '../../components/generated/widget-371';
import { Panel372 } from '../../components/generated/widget-372';
import { Board373 } from '../../components/generated/widget-373';
import { Orbit374 } from '../../components/generated/widget-374';
import { Stream375 } from '../../components/generated/widget-375';
import { Panel376 } from '../../components/generated/widget-376';
import { Board377 } from '../../components/generated/widget-377';
import { Orbit378 } from '../../components/generated/widget-378';
import { Stream379 } from '../../components/generated/widget-379';
import { Panel380 } from '../../components/generated/widget-380';

const SAMPLE = `export const panel = 38;`;

export const Route = createFileRoute('/demo/panel-38')({
  loader: async () => ({ code: await highlight(SAMPLE, 38) }),
  component: Demo38,
});

function Demo38() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 38</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream371 />
        <Panel372 />
        <Board373 />
        <Orbit374 />
        <Stream375 />
        <Panel376 />
        <Board377 />
        <Orbit378 />
        <Stream379 />
        <Panel380 />
      </div>
    </main>
  );
}
