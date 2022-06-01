import hidePopup from './hide-popup'
import popupInit from './popup-init'

const confirmationPopup = {
  render () {
    return `
    <div class="confirmation-popup popup">
      <div class="confirmation-popup-content popup-content">
        <h2>THANK YOU</h2>
        <img src="./images/check.svg" alt="checkmark symbol" width='100px'>
        <p>Your payment has been confirmed. Thanks for using our service, we hope it will be useful for your or your loved ones future</p>
        <button id="home-button">Back Home</button>
        <button id="profile-button">My Profile</button>
      </div>
    </div>
  `
  },

  popupRender () {
    popupInit(confirmationPopup.render())
    $('#home-button').click(() => {
      hidePopup()
      window.location.hash = '/'
    })

    $('#profile-button').click(() => {
      hidePopup()
      window.location.hash = '/profile'
    })

    $(window).on('popstate', function () {
      hidePopup()
    })
  }
}

export default confirmationPopup
