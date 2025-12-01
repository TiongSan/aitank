import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // 判斷是不是 production（deploy 到 GitHub Pages 時就是 production）
  const isProd = mode === 'production';

  return {
    // ⚠️ 這行是關鍵：repo 名稱是什麼就填什麼
    // 如果你的 repo 不是叫 aitank，這裡要跟著改
    base: isProd ? '/ aitank/' : '/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
