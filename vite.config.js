import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const getSiteByHostname = () => {
    const hostname = process.env.VITE_SITE_HOSTNAME || process.env.SITE_HOSTNAME || process.env.npm_config_hostname || process.env.HOSTNAME || ''

    return hostname.includes('webtest-jackie')
        ? 'https://webtest-jackie.businesstoday.com.tw/'
        : 'https://www.businesstoday.com.tw/'
}

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: '/bt_topic/2026/TaiwanFuture/',
    site: getSiteByHostname(),
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})
