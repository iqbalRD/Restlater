
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'

async function renderPage () {
  const url = UrlParser.parseActiveUrlWithCombiner()
  const page = routes[url]
  $('main').html(await page.render())
  await page.afterRender()
}

export default renderPage
