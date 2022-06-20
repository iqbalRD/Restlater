import home from '../views/pages/home'
import blok from '../views/pages/blok'
import about from '../views/pages/about'
import login from '../views/pages/login'
import {
  payment
} from '../views/pages/payment'
import profile from '../views/pages/profile'
import dashboard from '../views/pages/dashboard'
import Users from '../utils/dashboard-init/dashboard-users-init'

const routes = {
  '/': home, // default page
  '/about': about,
  '/login': login,
  '/blok/:id': blok,
  '/payment': payment,
  '/profile/:id': profile,
  '/dashboard': dashboard,
  '/users': Users
}

export default routes
