import { signinUI } from '../../utils/auth'

const login = {
  async render () {
    return `
      <div id="signin">
      <div class='signup-notice'>
        <p>
          If you want to Sign-Up, please input an unregistered email.
        </p>
      </div>
      <div id="firebaseui-auth-container"></div>
      </div>
        `
  },

  async afterRender () {
    signinUI()
  }
}

export default login
