import 'regenerator-runtime'
import '../styles/style.css'
import './utils/hamburger-init'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'
import './globals/firebase-init'
import './data/graveAPI'
import './data/userAPI'
import { initFirebaseAuth } from './utils/auth'
import renderPage from './views/app'

$(function () {
  $(window).on('hashchange', function () {
    ;(async () => {
      await renderPage()
      initFirebaseAuth()
    })()
  })

  ;(async () => {
    await renderPage()
    initFirebaseAuth()
  })()

  swRegister()
})
