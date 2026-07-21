import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream191 } from '../../components/generated/widget-191';
import { Panel192 } from '../../components/generated/widget-192';
import { Board193 } from '../../components/generated/widget-193';
import { Orbit194 } from '../../components/generated/widget-194';
import { Stream195 } from '../../components/generated/widget-195';
import { Panel196 } from '../../components/generated/widget-196';
import { Board197 } from '../../components/generated/widget-197';
import { Orbit198 } from '../../components/generated/widget-198';
import { Stream199 } from '../../components/generated/widget-199';
import { Panel200 } from '../../components/generated/widget-200';

const SAMPLE = `export const panel = 20;`;

export const Route = createFileRoute('/demo/panel-20')({
  loader: async () => ({ code: await highlight(SAMPLE, 20) }),
  component: Demo20,
});

function Demo20() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 20</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream191 />
        <Panel192 />
        <Board193 />
        <Orbit194 />
        <Stream195 />
        <Panel196 />
        <Board197 />
        <Orbit198 />
        <Stream199 />
        <Panel200 />
      </div>
    </main>
  );
}
