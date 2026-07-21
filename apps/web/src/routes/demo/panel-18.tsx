import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream171 } from '../../components/generated/widget-171';
import { Panel172 } from '../../components/generated/widget-172';
import { Board173 } from '../../components/generated/widget-173';
import { Orbit174 } from '../../components/generated/widget-174';
import { Stream175 } from '../../components/generated/widget-175';
import { Panel176 } from '../../components/generated/widget-176';
import { Board177 } from '../../components/generated/widget-177';
import { Orbit178 } from '../../components/generated/widget-178';
import { Stream179 } from '../../components/generated/widget-179';
import { Panel180 } from '../../components/generated/widget-180';

const SAMPLE = `export const panel = 18;`;

export const Route = createFileRoute('/demo/panel-18')({
  loader: async () => ({ code: await highlight(SAMPLE, 18) }),
  component: Demo18,
});

function Demo18() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 18</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream171 />
        <Panel172 />
        <Board173 />
        <Orbit174 />
        <Stream175 />
        <Panel176 />
        <Board177 />
        <Orbit178 />
        <Stream179 />
        <Panel180 />
      </div>
    </main>
  );
}
