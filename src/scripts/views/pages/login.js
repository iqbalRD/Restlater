import {
  signinUI
} from '../../utils/auth'

const login = {
  async render() {
    return `
      <div id="signin">
      <div id="firebaseui-auth-container"></div>
      </div>
        `
  },

  async afterRender() {
    signinUI()
  }
}

export default login