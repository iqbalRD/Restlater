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
import dashboardUsers from '../views/pages/dashboardUsers'
import dashboardGraves from '../views/pages/dashboardGraves'
import dashboardTransactions from '../views/pages/dashboardTransactions'

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/about': about,
  '/login': login,
  '/payment': payment,
  '/register': register,
  '/profile/:id': profile,
  '/dashboard': dashboard,
  '/dashboard/users': dashboardUsers,
  '/dashboard/graves': dashboardGraves,
  '/dashboard/transactions': dashboardTransactions
}

export default routes
