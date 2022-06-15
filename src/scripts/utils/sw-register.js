// import { Workbox } from 'workbox-window'

const swRegister = async () => {
  // if ('serviceWorker' in navigator) {
  //   const wb = new Workbox('/sw.js')
  //   wb.register()
  // }
  // console.log('Service worker not supported in this browser')
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration)
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}
export default swRegister
