import blok from '../views/pages/blok'
import home from '../views/pages/home'
import { payment } from '../views/pages/payment'

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/payment': payment
}

export default routes
