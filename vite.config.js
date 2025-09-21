import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'tz-logger',
            fileName: (fmt) => `index.${fmt}.js`,
            formats: ['es', 'cjs']
        }
    }
});