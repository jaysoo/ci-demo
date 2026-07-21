import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board201 } from '../../components/generated/widget-201';
import { Orbit202 } from '../../components/generated/widget-202';
import { Stream203 } from '../../components/generated/widget-203';
import { Panel204 } from '../../components/generated/widget-204';
import { Board205 } from '../../components/generated/widget-205';
import { Orbit206 } from '../../components/generated/widget-206';
import { Stream207 } from '../../components/generated/widget-207';
import { Panel208 } from '../../components/generated/widget-208';
import { Board209 } from '../../components/generated/widget-209';
import { Orbit210 } from '../../components/generated/widget-210';

const SAMPLE = `export const panel = 21;`;

export const Route = createFileRoute('/demo/panel-21')({
  loader: async () => ({ code: await highlight(SAMPLE, 21) }),
  component: Demo21,
});

function Demo21() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 21</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board201 />
        <Orbit202 />
        <Stream203 />
        <Panel204 />
        <Board205 />
        <Orbit206 />
        <Stream207 />
        <Panel208 />
        <Board209 />
        <Orbit210 />
      </div>
    </main>
  );
}
