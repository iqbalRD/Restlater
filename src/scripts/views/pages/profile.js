import transaction from '../../data/transaction-test'
import user from '../../data/userAPI'
import UrlParser from '../../routes/url-parser'
import insertsComma from '../../utils/insert-comma'
import editProfilePopup from '../../utils/popup/edit-profile-popup'

const profile = {
  render () {
    return `
      <section id='profile-container'>
        <h1>USER PROFILE</h1>
        <div id='profile-lack'></div>
        <div id='user-profile'>
          <img src='./images/user.svg' alt='user profile' height='200px'>
          <div id='user-profile-content'></div>
        </div>
        <div id='user-transaction'></div>
        <button id='logout'>Logout</button>
      </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const id = url.id
    const userProfile = await getUserData(id)
    renderProfile(userProfile)
    checkData()
    renderTransaction(userProfile.uid, transaction)
  }
}

const renderProfile = (profile) => {
  $('#user-profile-content').append(`
    <h2>USER ID: <span>${profile.uid}</span></h2>
    <h3>${profile.displayName}</h3>
    <h4>${profile.email}</h4>
    <h5>${profile.phone ? profile.phone : '-'}</h5>
    <h5>${profile.address ? profile.address : '-'}</h5>
    <button id="payment-profile-edit" class='profile-edit-button'>Edit Profile</button>
  `)

  sessionStorage.setItem('user', JSON.stringify(profile))

  $('#payment-profile-edit').on('click', () => {
    editProfilePopup.popupRender()
  })
}

const renderTransaction = (id, transaction) => {
  const userTransaction = transaction.filter(item => item.uid === id)
  userTransaction.forEach(item => {
    $('#user-transaction').append(`
    <div class='payment-reservation-content profile-transaction'>
      <h3>Reservation</h3>
      <p>${item.date}</p>
      <h4>BLOK ${item.graveSlots[0].split('')[0]}</h4>
      <h5>${insertsComma(item.graveSlots)}</h5>
      <h6>${item.price}</h6>
      <div></div>
    </div>
    `)
  })
}

const getUserData = async (id) => {
  if (sessionStorage.getItem('user') !== null) {
    return JSON.parse(sessionStorage.getItem('user'))
  }
  return await user.getUserById(id)
}

const checkData = () => {
  if ($('#user-profile-content > h5:nth-child(4)').text() === '-' || $('#user-profile-content > h5:nth-child(5)').text() === '-') {
    $('#profile-lack').append(`
      Please fill in your phone number and address to complete your profile in "Edit Profile" button.
    `)
  }
}
export default profile
