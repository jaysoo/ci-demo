import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream031 } from '../../components/generated/widget-031';
import { Panel032 } from '../../components/generated/widget-032';
import { Board033 } from '../../components/generated/widget-033';
import { Orbit034 } from '../../components/generated/widget-034';
import { Stream035 } from '../../components/generated/widget-035';
import { Panel036 } from '../../components/generated/widget-036';
import { Board037 } from '../../components/generated/widget-037';
import { Orbit038 } from '../../components/generated/widget-038';
import { Stream039 } from '../../components/generated/widget-039';
import { Panel040 } from '../../components/generated/widget-040';

const SAMPLE = `export const panel = 4;`;

export const Route = createFileRoute('/demo/panel-04')({
  loader: async () => ({ code: await highlight(SAMPLE, 4) }),
  component: Demo04,
});

function Demo04() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 04</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream031 />
        <Panel032 />
        <Board033 />
        <Orbit034 />
        <Stream035 />
        <Panel036 />
        <Board037 />
        <Orbit038 />
        <Stream039 />
        <Panel040 />
      </div>
    </main>
  );
}
