import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
      fix: true,
    }),
  ],
});

