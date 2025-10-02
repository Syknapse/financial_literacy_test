export const saveJSON = (key: string, data: any) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    // ignore
  }
}

export const loadJSON = (key: string) => {
  if (typeof window === 'undefined') return null
  try {
    const s = localStorage.getItem(key)
    return s ? JSON.parse(s) : null
  } catch (e) {
    return null
  }
}

export const clearKey = (key: string) => {
  if (typeof window === 'undefined') return
  try { localStorage.removeItem(key) } catch {}
}
