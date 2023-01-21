import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react-swc';
import macrosPlugin from 'vite-plugin-babel-macros';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), macrosPlugin()],
    resolve: {
      dedupe: ['react', 'react/hooks'],
    },
  });
};
