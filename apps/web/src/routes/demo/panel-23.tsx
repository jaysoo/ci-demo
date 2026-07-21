import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board221 } from '../../components/generated/widget-221';
import { Orbit222 } from '../../components/generated/widget-222';
import { Stream223 } from '../../components/generated/widget-223';
import { Panel224 } from '../../components/generated/widget-224';
import { Board225 } from '../../components/generated/widget-225';
import { Orbit226 } from '../../components/generated/widget-226';
import { Stream227 } from '../../components/generated/widget-227';
import { Panel228 } from '../../components/generated/widget-228';
import { Board229 } from '../../components/generated/widget-229';
import { Orbit230 } from '../../components/generated/widget-230';

const SAMPLE = `export const panel = 23;`;

export const Route = createFileRoute('/demo/panel-23')({
  loader: async () => ({ code: await highlight(SAMPLE, 23) }),
  component: Demo23,
});

function Demo23() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 23</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board221 />
        <Orbit222 />
        <Stream223 />
        <Panel224 />
        <Board225 />
        <Orbit226 />
        <Stream227 />
        <Panel228 />
        <Board229 />
        <Orbit230 />
      </div>
    </main>
  );
}
