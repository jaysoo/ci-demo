import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream131 } from '../../components/generated/widget-131';
import { Panel132 } from '../../components/generated/widget-132';
import { Board133 } from '../../components/generated/widget-133';
import { Orbit134 } from '../../components/generated/widget-134';
import { Stream135 } from '../../components/generated/widget-135';
import { Panel136 } from '../../components/generated/widget-136';
import { Board137 } from '../../components/generated/widget-137';
import { Orbit138 } from '../../components/generated/widget-138';
import { Stream139 } from '../../components/generated/widget-139';
import { Panel140 } from '../../components/generated/widget-140';

const SAMPLE = `export const panel = 14;`;

export const Route = createFileRoute('/demo/panel-14')({
  loader: async () => ({ code: await highlight(SAMPLE, 14) }),
  component: Demo14,
});

function Demo14() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 14</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream131 />
        <Panel132 />
        <Board133 />
        <Orbit134 />
        <Stream135 />
        <Panel136 />
        <Board137 />
        <Orbit138 />
        <Stream139 />
        <Panel140 />
      </div>
    </main>
  );
}
