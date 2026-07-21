import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream251 } from '../../components/generated/widget-251';
import { Panel252 } from '../../components/generated/widget-252';
import { Board253 } from '../../components/generated/widget-253';
import { Orbit254 } from '../../components/generated/widget-254';
import { Stream255 } from '../../components/generated/widget-255';
import { Panel256 } from '../../components/generated/widget-256';
import { Board257 } from '../../components/generated/widget-257';
import { Orbit258 } from '../../components/generated/widget-258';
import { Stream259 } from '../../components/generated/widget-259';
import { Panel260 } from '../../components/generated/widget-260';

const SAMPLE = `export const panel = 26;`;

export const Route = createFileRoute('/demo/panel-26')({
  loader: async () => ({ code: await highlight(SAMPLE, 26) }),
  component: Demo26,
});

function Demo26() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 26</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream251 />
        <Panel252 />
        <Board253 />
        <Orbit254 />
        <Stream255 />
        <Panel256 />
        <Board257 />
        <Orbit258 />
        <Stream259 />
        <Panel260 />
      </div>
    </main>
  );
}
