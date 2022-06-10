import 'regenerator-runtime'
import renderPage from './views/app'
import '../styles/style.css'
import './utils/hamburger-init'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'

$(function () {
  $(window).on('hashchange', function () {
    ;(async () => {
      await renderPage()
    })()
  })
  ;(async () => {
    await renderPage()
  })()
  swRegister()
})
