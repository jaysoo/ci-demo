import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board161 } from '../../components/generated/widget-161';
import { Orbit162 } from '../../components/generated/widget-162';
import { Stream163 } from '../../components/generated/widget-163';
import { Panel164 } from '../../components/generated/widget-164';
import { Board165 } from '../../components/generated/widget-165';
import { Orbit166 } from '../../components/generated/widget-166';
import { Stream167 } from '../../components/generated/widget-167';
import { Panel168 } from '../../components/generated/widget-168';
import { Board169 } from '../../components/generated/widget-169';
import { Orbit170 } from '../../components/generated/widget-170';

const SAMPLE = `export const panel = 17;`;

export const Route = createFileRoute('/demo/panel-17')({
  loader: async () => ({ code: await highlight(SAMPLE, 17) }),
  component: Demo17,
});

function Demo17() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 17</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board161 />
        <Orbit162 />
        <Stream163 />
        <Panel164 />
        <Board165 />
        <Orbit166 />
        <Stream167 />
        <Panel168 />
        <Board169 />
        <Orbit170 />
      </div>
    </main>
  );
}
