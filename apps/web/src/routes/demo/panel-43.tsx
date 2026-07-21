import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board421 } from '../../components/generated/widget-421';
import { Orbit422 } from '../../components/generated/widget-422';
import { Stream423 } from '../../components/generated/widget-423';
import { Panel424 } from '../../components/generated/widget-424';
import { Board425 } from '../../components/generated/widget-425';
import { Orbit426 } from '../../components/generated/widget-426';
import { Stream427 } from '../../components/generated/widget-427';
import { Panel428 } from '../../components/generated/widget-428';
import { Board429 } from '../../components/generated/widget-429';
import { Orbit430 } from '../../components/generated/widget-430';

const SAMPLE = `export const panel = 43;`;

export const Route = createFileRoute('/demo/panel-43')({
  loader: async () => ({ code: await highlight(SAMPLE, 43) }),
  component: Demo43,
});

function Demo43() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 43</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board421 />
        <Orbit422 />
        <Stream423 />
        <Panel424 />
        <Board425 />
        <Orbit426 />
        <Stream427 />
        <Panel428 />
        <Board429 />
        <Orbit430 />
      </div>
    </main>
  );
}
