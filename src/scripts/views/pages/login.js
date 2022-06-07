import { signinUI } from '../../utils/auth'

const login = {
  async render() {
    return `
      <div id="signin">
      <div id="firebaseui-auth-container"></div>
      </div>
        `
  },

<<<<<<< HEAD
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
=======
  async afterRender () {
    signinUI()
>>>>>>> f1469a99104143dd023337aa99ad922ae504dd45
  }
}

export default login