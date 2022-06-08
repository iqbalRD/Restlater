import transaction from '../../data/transaction-test'
import userAccount from '../../data/user-account'
import insertsComma from '../../utils/insert-comma'
import editProfilePopup from '../../utils/popup/edit-profile-popup'

const profile = {
  render () {
    return `
      <section id='profile-container'>
        <h1>USER PROFILE</h1>
        <div id='user-profile'>
          <img src='./images/user.svg' alt='user profile' height='200px'>
          <div id='user-profile-content'></div>
        </div>
        <div id='user-transaction'></div>
        <button id='logout'>Logout</button>
      </section>
    `
  },

  afterRender () {
    const userProfile = userAccount[0]
    renderProfile(userProfile)
    renderTransaction(userProfile.userId, transaction)
  }
}

const renderProfile = (profile) => {
  $('#user-profile-content').append(`
    <h2>USER ID: ${profile.userId}</h2>
    <h3>${profile.name}</h3>
    <h4>${profile.email}</h4>
    <h5>${profile.phone}</h5>
    <h5>${profile.address}</h5>
    <button id="payment-profile-edit" class='profile-edit-button'>Edit Profile</button>
  `)

  $('#payment-profile-edit').on('click', () => {
    editProfilePopup.popupRender()
  })
}

const renderTransaction = (id, transaction) => {
  const userTransaction = transaction.filter(item => item.userId === id)
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

export default profile
