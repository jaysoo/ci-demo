import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board101 } from '../../components/generated/widget-101';
import { Orbit102 } from '../../components/generated/widget-102';
import { Stream103 } from '../../components/generated/widget-103';
import { Panel104 } from '../../components/generated/widget-104';
import { Board105 } from '../../components/generated/widget-105';
import { Orbit106 } from '../../components/generated/widget-106';
import { Stream107 } from '../../components/generated/widget-107';
import { Panel108 } from '../../components/generated/widget-108';
import { Board109 } from '../../components/generated/widget-109';
import { Orbit110 } from '../../components/generated/widget-110';

const SAMPLE = `export const panel = 11;`;

export const Route = createFileRoute('/demo/panel-11')({
  loader: async () => ({ code: await highlight(SAMPLE, 11) }),
  component: Demo11,
});

function Demo11() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 11</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board101 />
        <Orbit102 />
        <Stream103 />
        <Panel104 />
        <Board105 />
        <Orbit106 />
        <Stream107 />
        <Panel108 />
        <Board109 />
        <Orbit110 />
      </div>
    </main>
  );
}
