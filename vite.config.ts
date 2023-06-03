import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(async ({ mode }) => {
  const env = await loadEnv(mode, process.cwd())

  return {
    server: {
      proxy: {
        '/dataStore': {
          target: env.VITE_TARGET_URL,
          changeOrigin: true,
          headers: {
            Authorization: `Basic ${btoa(
              `${env.VITE_USERNAME}:${env.VITE_PASSWORD}`
            )}`,
          },
        },
      },
    },
    plugins: [react()],
  }
})
