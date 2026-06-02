import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const base = '/bt_topic/2026/TaiwanFuture/'

const getSiteByHostname = () => {
    const hostname = process.env.VITE_SITE_HOSTNAME || process.env.SITE_HOSTNAME || process.env.npm_config_hostname || process.env.HOSTNAME || ''

    return hostname.includes('webtest-jackie')
        ? 'https://webtest-jackie.businesstoday.com.tw/'
        : 'https://www.businesstoday.com.tw/'
}

const createSeoFilesPlugin = ({ base, site }) => {
    let outDir = ''
    let isSsrBuild = false

    const pageUrl = new URL(base, site).href
    const sitemapUrl = new URL('sitemap.xml', pageUrl).href
    const allowPath = new URL(pageUrl).pathname

    return {
        name: 'taiwanfuture-seo-files',
        apply: 'build',
        configResolved(config) {
            outDir = resolve(config.root, config.build.outDir)
            isSsrBuild = Boolean(config.build.ssr)
        },
        closeBundle() {
            if (isSsrBuild) return

            mkdirSync(outDir, { recursive: true })

            writeFileSync(
                resolve(outDir, 'sitemap.xml'),
                `<?xml version="1.0" encoding="UTF-8"?>\n` +
                `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
                `  <url>\n` +
                `    <loc>${pageUrl}</loc>\n` +
                `    <changefreq>weekly</changefreq>\n` +
                `    <priority>1.0</priority>\n` +
                `  </url>\n` +
                `</urlset>\n`
            )

            writeFileSync(
                resolve(outDir, 'robots.txt'),
                `User-agent: *\n` +
                `Allow: ${allowPath}\n` +
                `Sitemap: ${sitemapUrl}\n`
            )
        }
    }
}

const site = getSiteByHostname()

export default defineConfig({
    plugins: [
        vue(),
        createSeoFilesPlugin({ base, site })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base,
    site,
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
