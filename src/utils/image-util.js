export const getImageUrl = (path) => {
    if (!path) return ''
    // 移除开头的 assets/images/
    // const cleanPath = path.replace('assets/images/', '')
    // 使用 Vite 的 import.meta.url
    return new URL(`../${path}`, import.meta.url).href
}
