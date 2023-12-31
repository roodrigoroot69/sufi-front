
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
    })
  }

self.addEventListener('install', e => {
    console.log(e)
})

self.addEventListener('activate', e => {
    console.log(e)
})