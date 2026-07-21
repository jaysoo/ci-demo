import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board341 } from '../../components/generated/widget-341';
import { Orbit342 } from '../../components/generated/widget-342';
import { Stream343 } from '../../components/generated/widget-343';
import { Panel344 } from '../../components/generated/widget-344';
import { Board345 } from '../../components/generated/widget-345';
import { Orbit346 } from '../../components/generated/widget-346';
import { Stream347 } from '../../components/generated/widget-347';
import { Panel348 } from '../../components/generated/widget-348';
import { Board349 } from '../../components/generated/widget-349';
import { Orbit350 } from '../../components/generated/widget-350';

const SAMPLE = `export const panel = 35;`;

export const Route = createFileRoute('/demo/panel-35')({
  loader: async () => ({ code: await highlight(SAMPLE, 35) }),
  component: Demo35,
});

function Demo35() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 35</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board341 />
        <Orbit342 />
        <Stream343 />
        <Panel344 />
        <Board345 />
        <Orbit346 />
        <Stream347 />
        <Panel348 />
        <Board349 />
        <Orbit350 />
      </div>
    </main>
  );
}
