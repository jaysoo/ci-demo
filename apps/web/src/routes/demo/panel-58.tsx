import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream571 } from '../../components/generated/widget-571';
import { Panel572 } from '../../components/generated/widget-572';
import { Board573 } from '../../components/generated/widget-573';
import { Orbit574 } from '../../components/generated/widget-574';
import { Stream575 } from '../../components/generated/widget-575';
import { Panel576 } from '../../components/generated/widget-576';
import { Board577 } from '../../components/generated/widget-577';
import { Orbit578 } from '../../components/generated/widget-578';
import { Stream579 } from '../../components/generated/widget-579';
import { Panel580 } from '../../components/generated/widget-580';

const SAMPLE = `export const panel = 58;`;

export const Route = createFileRoute('/demo/panel-58')({
  loader: async () => ({ code: await highlight(SAMPLE, 58) }),
  component: Demo58,
});

function Demo58() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 58</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream571 />
        <Panel572 />
        <Board573 />
        <Orbit574 />
        <Stream575 />
        <Panel576 />
        <Board577 />
        <Orbit578 />
        <Stream579 />
        <Panel580 />
      </div>
    </main>
  );
}
