const base = import.meta.env.BASE_URL

export const getImageUrl = (path) => {
    if (!path) return ''
    return `${base}${path}`
}