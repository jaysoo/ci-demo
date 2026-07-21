import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream211 } from '../../components/generated/widget-211';
import { Panel212 } from '../../components/generated/widget-212';
import { Board213 } from '../../components/generated/widget-213';
import { Orbit214 } from '../../components/generated/widget-214';
import { Stream215 } from '../../components/generated/widget-215';
import { Panel216 } from '../../components/generated/widget-216';
import { Board217 } from '../../components/generated/widget-217';
import { Orbit218 } from '../../components/generated/widget-218';
import { Stream219 } from '../../components/generated/widget-219';
import { Panel220 } from '../../components/generated/widget-220';

const SAMPLE = `export const panel = 22;`;

export const Route = createFileRoute('/demo/panel-22')({
  loader: async () => ({ code: await highlight(SAMPLE, 22) }),
  component: Demo22,
});

function Demo22() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 22</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream211 />
        <Panel212 />
        <Board213 />
        <Orbit214 />
        <Stream215 />
        <Panel216 />
        <Board217 />
        <Orbit218 />
        <Stream219 />
        <Panel220 />
      </div>
    </main>
  );
}
