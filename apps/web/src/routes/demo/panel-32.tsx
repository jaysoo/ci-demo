import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream311 } from '../../components/generated/widget-311';
import { Panel312 } from '../../components/generated/widget-312';
import { Board313 } from '../../components/generated/widget-313';
import { Orbit314 } from '../../components/generated/widget-314';
import { Stream315 } from '../../components/generated/widget-315';
import { Panel316 } from '../../components/generated/widget-316';
import { Board317 } from '../../components/generated/widget-317';
import { Orbit318 } from '../../components/generated/widget-318';
import { Stream319 } from '../../components/generated/widget-319';
import { Panel320 } from '../../components/generated/widget-320';

const SAMPLE = `export const panel = 32;`;

export const Route = createFileRoute('/demo/panel-32')({
  loader: async () => ({ code: await highlight(SAMPLE, 32) }),
  component: Demo32,
});

function Demo32() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 32</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream311 />
        <Panel312 />
        <Board313 />
        <Orbit314 />
        <Stream315 />
        <Panel316 />
        <Board317 />
        <Orbit318 />
        <Stream319 />
        <Panel320 />
      </div>
    </main>
  );
}
