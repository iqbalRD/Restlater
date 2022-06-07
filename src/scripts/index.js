import 'regenerator-runtime'
import App from './views/app'
import '../styles/style.css'
import './utils/hamburger-init'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'
import { initFirebaseAuth } from './utils/auth'

const app = new App({
  logout: document.querySelector('#logout')
})

initFirebaseAuth()

$(function () {
  $(window).on('hashchange', function () {
    ;(async () => {
      await app.renderPage()
    })()
  })
  ;(async () => {
    await app.renderPage()
  })()

  swRegister()
})
