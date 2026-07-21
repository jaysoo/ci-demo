import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board561 } from '../../components/generated/widget-561';
import { Orbit562 } from '../../components/generated/widget-562';
import { Stream563 } from '../../components/generated/widget-563';
import { Panel564 } from '../../components/generated/widget-564';
import { Board565 } from '../../components/generated/widget-565';
import { Orbit566 } from '../../components/generated/widget-566';
import { Stream567 } from '../../components/generated/widget-567';
import { Panel568 } from '../../components/generated/widget-568';
import { Board569 } from '../../components/generated/widget-569';
import { Orbit570 } from '../../components/generated/widget-570';

const SAMPLE = `export const panel = 57;`;

export const Route = createFileRoute('/demo/panel-57')({
  loader: async () => ({ code: await highlight(SAMPLE, 57) }),
  component: Demo57,
});

function Demo57() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 57</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board561 />
        <Orbit562 />
        <Stream563 />
        <Panel564 />
        <Board565 />
        <Orbit566 />
        <Stream567 />
        <Panel568 />
        <Board569 />
        <Orbit570 />
      </div>
    </main>
  );
}
