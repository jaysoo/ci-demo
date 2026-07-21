import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream231 } from '../../components/generated/widget-231';
import { Panel232 } from '../../components/generated/widget-232';
import { Board233 } from '../../components/generated/widget-233';
import { Orbit234 } from '../../components/generated/widget-234';
import { Stream235 } from '../../components/generated/widget-235';
import { Panel236 } from '../../components/generated/widget-236';
import { Board237 } from '../../components/generated/widget-237';
import { Orbit238 } from '../../components/generated/widget-238';
import { Stream239 } from '../../components/generated/widget-239';
import { Panel240 } from '../../components/generated/widget-240';

const SAMPLE = `export const panel = 24;`;

export const Route = createFileRoute('/demo/panel-24')({
  loader: async () => ({ code: await highlight(SAMPLE, 24) }),
  component: Demo24,
});

function Demo24() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 24</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream231 />
        <Panel232 />
        <Board233 />
        <Orbit234 />
        <Stream235 />
        <Panel236 />
        <Board237 />
        <Orbit238 />
        <Stream239 />
        <Panel240 />
      </div>
    </main>
  );
}
