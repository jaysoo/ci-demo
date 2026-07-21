import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
  ssr: {
    // Bundle deps into the server build instead of externalizing them, so the
    // SSR pass walks the same large module graph the client does. This exists
    // to give CI a realistically expensive build - drop it for a fast build.
    noExternal: true,
  },
  plugins: [
    tailwindcss(),
    // tanstackStart bundles the TanStack Router plugin (route generation + HMR)
    tanstackStart({
      target: 'server',
    }),
    // React Refresh runtime - required by TanStack Start dev mode
    viteReact(),
  ],
});
