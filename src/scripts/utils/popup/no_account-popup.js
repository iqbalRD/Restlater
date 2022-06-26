import hidePopup from './hide-popup'
import popupInit from './popup-init'

const noAccountPopup = {
  render () {
    return `
    <div class="confirmation-popup popup">
      <div class="confirmation-popup-content popup-content">
        <h2 id='login-required'>LOGIN REQUIRED</h2>
        <img src="./images/data.svg" alt="data symbol" width='100px'>
        <p>To reserve a grave, you have to login with an account first, and if you don't have an account you can go to the Login page</p>
        <button id="login-button">LOGIN</button>
      </div>
    </div>
  `
  },

  popupRender () {
    popupInit(noAccountPopup.render())
    $('#login-button').click(() => {
      hidePopup()
      window.location.hash = '#/login'
    })

    $('.popup').on('click', (e) => {
      const target = $(e.target)
      if (target.is('.popup')) {
        hidePopup()
      }
    })

    $(window).on('popstate', function () {
      hidePopup()
    })
  }
}

export default noAccountPopup
