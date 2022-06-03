import { Workbox } from 'workbox-window'

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js')
    wb.register()
  }
  console.log('Service worker not supported in this browser')
}
export default swRegister
