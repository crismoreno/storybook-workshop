// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // esbuildOptions: {
    //   plugins: [
    //     NodeGlobalsPolyfillPlugin({
    //       process: true,
    //     }),
    //   ],
    // },
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => `index.js`,
    },
  },
});
