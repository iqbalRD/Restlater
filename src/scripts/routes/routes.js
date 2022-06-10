import about from '../views/pages/about'
import blok from '../views/pages/blok'
import home from '../views/pages/home'
import {
  payment
} from '../views/pages/payment'
import profile from '../views/pages/profile'
import dashboard from '../views/pages/dashboard'

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/payment': payment,
  '/profile/:id': profile,
  '/about': about,
  '/dashboard': dashboard
}

export default routes
