import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board041 } from '../../components/generated/widget-041';
import { Orbit042 } from '../../components/generated/widget-042';
import { Stream043 } from '../../components/generated/widget-043';
import { Panel044 } from '../../components/generated/widget-044';
import { Board045 } from '../../components/generated/widget-045';
import { Orbit046 } from '../../components/generated/widget-046';
import { Stream047 } from '../../components/generated/widget-047';
import { Panel048 } from '../../components/generated/widget-048';
import { Board049 } from '../../components/generated/widget-049';
import { Orbit050 } from '../../components/generated/widget-050';

const SAMPLE = `export const panel = 5;`;

export const Route = createFileRoute('/demo/panel-05')({
  loader: async () => ({ code: await highlight(SAMPLE, 5) }),
  component: Demo05,
});

function Demo05() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 05</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board041 />
        <Orbit042 />
        <Stream043 />
        <Panel044 />
        <Board045 />
        <Orbit046 />
        <Stream047 />
        <Panel048 />
        <Board049 />
        <Orbit050 />
      </div>
    </main>
  );
}
