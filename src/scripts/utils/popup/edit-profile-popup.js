import user from '../../data/userAPI'
import hidePopup from './hide-popup'
import popupInit from './popup-init'

const editProfilePopup = {
  render () {
    return `
    <div class="edit-profile-popup popup">
      <div class="edit-profile-popup-content popup-content">
        <h2>EDIT PROFILE</h2>
        <form class="edit-profile-popup-content-form">
          <div class="payment-profile-item profile-edit">
            <label for="edit-profile-name">Full Name</label>
            <input type="text" id="edit-profile-name" placeholder="Full Name" autofocus>
          </div>
          <div class="payment-profile-item profile-edit">
            <label for="edit-profile-phone">Phone</label>
            <input type="text" id="edit-profile-phone" placeholder="Phone">
          </div>
          <div class="payment-profile-item profile-edit">
            <label for="edit-profile-address">Address</label>
            <textarea id="edit-profile-address" placeholder="Address" oninput="this.style.height = ''; this.style.height = this.scrollHeight +'px'" rows="1"></textarea>
          </div>
        </form>
        <button id="edit-profile-save">SAVE</button>
        <button id="edit-profile-cancel">CANCEL</button>
      </div>
    </div>
    `
  },

  popupRender () {
    popupInit(editProfilePopup.render())

    setTimeout(() => {
      $('#edit-profile-name').focus()
    }, 600)

    $('.popup').on('click', (e) => {
      const target = $(e.target)
      if (target.is('.popup')) {
        hidePopup()
      }
    })

    const tempUserData = JSON.parse(sessionStorage.getItem('user'))
    $('#edit-profile-name').val(tempUserData.displayName)
    $('#edit-profile-phone').val(tempUserData.phone)
    $('#edit-profile-address').val(tempUserData.address)

    $('#edit-profile-save').click(() => {
      // save to the database

      const userData = {
        displayName: $('#edit-profile-name').val(),
        phone: $('#edit-profile-phone').val(),
        address: $('#edit-profile-address').val()
      }

      sessionStorage.setItem('user', JSON.stringify({
        ...tempUserData,
        ...userData
      }))

      const newUserData = JSON.parse(sessionStorage.getItem('user'))
      user.setUserById(newUserData.uid, newUserData)
      window.location.reload()
      hidePopup()
    })

    $('#edit-profile-cancel').click(() => {
      hidePopup()
    })

    $(window).on('popstate', function () {
      hidePopup()
    })
  }
}

export default editProfilePopup
