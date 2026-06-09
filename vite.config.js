import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { mkdirSync, writeFileSync, cpSync, createReadStream, existsSync } from 'node:fs'
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
// Dev 模式：攔截 BASE_URL 下的圖片請求，直接從 src/assets/images 提供
const serveImagesPlugin = ({ base }) => ({
  name: 'serve-images-dev',
  apply: 'serve',
  configureServer(server) {
    const prefix = `${base}assets/images/`
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split('?')[0] ?? ''
      if (!url.startsWith(prefix)) return next()
      const relativePath = url.slice(prefix.length)
      const filePath = resolve(__dirname, 'src/assets/images', relativePath)
      if (!existsSync(filePath)) return next()
      const ext = filePath.split('.').pop()?.toLowerCase()
      const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', webp: 'image/webp', gif: 'image/gif' }
      res.setHeader('Content-Type', mime[ext] ?? 'application/octet-stream')
      createReadStream(filePath).pipe(res)
    })
  }
})

// Build 模式：將 src/assets/images 複製到 dist/assets/images
const copyImagesPlugin = () => ({
  name: 'copy-images',
  apply: 'build',
  closeBundle() {
    cpSync(
      resolve(__dirname, 'src/assets/images'),
      resolve(__dirname, 'dist/assets/images'),
      { recursive: true }
    )
    console.log('[copy-images] src/assets/images → dist/assets/images')
  }
})
const site = getSiteByHostname()

export default defineConfig({
    ssgOptions: {
    onPageRendered: (route, html) => {
      return html.replace('<html lang="en">', '<html lang="zh-TW">')
    }
  },
    plugins: [
        vue(),
        createSeoFilesPlugin({ base, site }),
        serveImagesPlugin({ base }),
        copyImagesPlugin()
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
