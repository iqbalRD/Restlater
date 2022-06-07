import about from '../views/pages/about'
import blok from '../views/pages/blok'
import home from '../views/pages/home'
import {
  payment
} from '../views/pages/payment'
import profile from '../views/pages/profile'
import dashboard from '../views/pages/dashboard'
<<<<<<< HEAD
=======
import login from '../views/pages/login'
import register from '../views/pages/register'
>>>>>>> f1469a99104143dd023337aa99ad922ae504dd45

const routes = {
  '/': home, // default page
  '/blok/:id': blok,
  '/payment': payment,
  '/profile/:id': profile,
  '/about': about,
<<<<<<< HEAD
  '/dashboard': dashboard
=======
  '/dashboard': dashboard,
  '/login': login,
  '/register': register
>>>>>>> f1469a99104143dd023337aa99ad922ae504dd45
}

export default routes