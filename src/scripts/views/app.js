import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import { LogoutInitiator } from '../utils/auth'

class App {
  constructor () {
    this._logout = logout

    this._initialAppShell()
  }

  _initialAppShell () {
    LogoutInitiator.init({
      logout: this._logout
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    $('main').html(await page.render())
    await page.afterRender()
  }
}

export default App
