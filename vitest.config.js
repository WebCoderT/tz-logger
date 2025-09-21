import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,      // 全局 expect / describe / it，不用每个文件再 import
        // environment: 'happy-dom', // 默认 node，涉 DOM 才需要
        coverage: {
            provider: 'v8',   // npx vitest run --coverage 生成覆盖率报告
            reporter: ['text', 'html'],
        },
    },
});