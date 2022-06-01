import blok from '../views/pages/blok'
import home from '../views/pages/home'
import { payment } from '../views/pages/payment'
import profile from '../views/pages/profile'

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/payment': payment,
  '/profile/:id': profile
}

export default routes
