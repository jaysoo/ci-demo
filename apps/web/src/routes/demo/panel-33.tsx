import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board321 } from '../../components/generated/widget-321';
import { Orbit322 } from '../../components/generated/widget-322';
import { Stream323 } from '../../components/generated/widget-323';
import { Panel324 } from '../../components/generated/widget-324';
import { Board325 } from '../../components/generated/widget-325';
import { Orbit326 } from '../../components/generated/widget-326';
import { Stream327 } from '../../components/generated/widget-327';
import { Panel328 } from '../../components/generated/widget-328';
import { Board329 } from '../../components/generated/widget-329';
import { Orbit330 } from '../../components/generated/widget-330';

const SAMPLE = `export const panel = 33;`;

export const Route = createFileRoute('/demo/panel-33')({
  loader: async () => ({ code: await highlight(SAMPLE, 33) }),
  component: Demo33,
});

function Demo33() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 33</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board321 />
        <Orbit322 />
        <Stream323 />
        <Panel324 />
        <Board325 />
        <Orbit326 />
        <Stream327 />
        <Panel328 />
        <Board329 />
        <Orbit330 />
      </div>
    </main>
  );
}
