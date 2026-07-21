import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream271 } from '../../components/generated/widget-271';
import { Panel272 } from '../../components/generated/widget-272';
import { Board273 } from '../../components/generated/widget-273';
import { Orbit274 } from '../../components/generated/widget-274';
import { Stream275 } from '../../components/generated/widget-275';
import { Panel276 } from '../../components/generated/widget-276';
import { Board277 } from '../../components/generated/widget-277';
import { Orbit278 } from '../../components/generated/widget-278';
import { Stream279 } from '../../components/generated/widget-279';
import { Panel280 } from '../../components/generated/widget-280';

const SAMPLE = `export const panel = 28;`;

export const Route = createFileRoute('/demo/panel-28')({
  loader: async () => ({ code: await highlight(SAMPLE, 28) }),
  component: Demo28,
});

function Demo28() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 28</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream271 />
        <Panel272 />
        <Board273 />
        <Orbit274 />
        <Stream275 />
        <Panel276 />
        <Board277 />
        <Orbit278 />
        <Stream279 />
        <Panel280 />
      </div>
    </main>
  );
}
