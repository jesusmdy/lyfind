import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return defineConfig({
      plugins: [vue()],

      server: {
          port: process.env.VITE_PORT,
      },
  })
}
