import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board361 } from '../../components/generated/widget-361';
import { Orbit362 } from '../../components/generated/widget-362';
import { Stream363 } from '../../components/generated/widget-363';
import { Panel364 } from '../../components/generated/widget-364';
import { Board365 } from '../../components/generated/widget-365';
import { Orbit366 } from '../../components/generated/widget-366';
import { Stream367 } from '../../components/generated/widget-367';
import { Panel368 } from '../../components/generated/widget-368';
import { Board369 } from '../../components/generated/widget-369';
import { Orbit370 } from '../../components/generated/widget-370';

const SAMPLE = `export const panel = 37;`;

export const Route = createFileRoute('/demo/panel-37')({
  loader: async () => ({ code: await highlight(SAMPLE, 37) }),
  component: Demo37,
});

function Demo37() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 37</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board361 />
        <Orbit362 />
        <Stream363 />
        <Panel364 />
        <Board365 />
        <Orbit366 />
        <Stream367 />
        <Panel368 />
        <Board369 />
        <Orbit370 />
      </div>
    </main>
  );
}
