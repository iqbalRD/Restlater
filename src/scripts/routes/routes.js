import about from '../views/pages/about'
import blok from '../views/pages/blok'
import home from '../views/pages/home'
import {
  payment
} from '../views/pages/payment'
import profile from '../views/pages/profile'
import dashboard from '../views/pages/dashboard'
import login from '../views/pages/login'
import register from '../views/pages/register'

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/payment': payment,
  '/profile/:id': profile,
  '/about': about,
  '/dashboard': dashboard,
  '/login': login,
  '/register': register
}

export default routes