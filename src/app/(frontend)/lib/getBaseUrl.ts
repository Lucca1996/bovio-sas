export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // En el navegador
    return window.location.origin
  }

  if (process.env.NEXT_PUBLIC_SERVER_URL) {
    // En producción
    return process.env.NEXT_PUBLIC_SERVER_URL
  }

  // En desarrollo local
  return 'http://localhost:3000'
}
