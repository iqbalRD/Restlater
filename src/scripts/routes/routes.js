import home from '../views/pages/home'
import blok from '../views/pages/blok'
import about from '../views/pages/about'
import login from '../views/pages/login'
import {
  payment
} from '../views/pages/payment'
import profile from '../views/pages/profile'
import register from '../views/pages/register'
import dashboard from '../views/pages/dashboard'

const routes = {
  '/': home, // default page
  '/about': about,
  '/login': login,
  '/blok/:id': blok,
  '/payment': payment,
  '/register': register,
  '/profile/:id': profile,
  '/dashboard': dashboard
}

export default routes
