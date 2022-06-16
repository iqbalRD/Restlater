import confirmationPopup from '../../utils/popup/confirmation-popup'
import getDate from '../../utils/date-init'
import editProfilePopup from '../../utils/popup/edit-profile-popup'
import insertsComma from '../../utils/insert-comma'
import transaction from '../../data/transactionAPI'

const getPaymentDetail = (slots, price, initial) => {
  const paymentDetail = { slots, price, initial }
  sessionStorage.setItem('detail', JSON.stringify(paymentDetail))
  window.location.hash = '#/payment'
}

const payment = {
  render () {
    document.title = 'Restlater | Payment'
    return `
      <section id='payment-container'>
        <h1>PAYMENT CONFIRMATION</h1>
        <div id='payment-profile'></div>
        <div id='payment-reservation'></div>
        <div id='payment-confirm'></div>
      </section>
    `
  },

  async afterRender () {
    const paymentDetail = JSON.parse(sessionStorage.getItem('detail'))
    const date = getDate()
    const user = JSON.parse(sessionStorage.getItem('user'))

    renderProfile(user)
    renderReservation(paymentDetail.initial, paymentDetail.slots, date)
    paymentConfirm(paymentDetail.price, paymentDetail.slots, date, user.uid, paymentDetail.initial)
  }
}

const renderProfile = (profile) => {
  $('#payment-profile').append(`
      <h3>Profile</h3>
      <div class='payment-profile-content'>
        <div class='payment-profile-item'>
          <h4>Full Name</h4>
          <p>${profile.displayName}</p>
        </div>
        <div class='payment-profile-item'>
          <h4>Email</h4>
          <p>${profile.email}</p>
        </div>
        <div class='payment-profile-item'>
          <h4>Phone</h4>
          <p>${profile.phone}</p>
        </div>
        <div class='payment-profile-item'>
          <h4>Address</h4>
          <p>${profile.address}</p>
        </div>
      </div>
      <button id='payment-profile-edit'>Edit Profile</button>
    `)

  $('#payment-profile-edit').on('click', () => {
    editProfilePopup.popupRender()
  })
}

const renderReservation = (initial, slots, date) => {
  $('#payment-reservation').append(`
    <div class='payment-reservation-content'>
      <h3>Reservation</h3>
      <p>${date}</p>
      <h4>BLOK ${initial}</h4>
      <h5>${insertsComma(slots)}</h5>
      <div></div>
    </div>
    `)
}

const paymentConfirm = (total, slots, date, uid, initial) => {
  $('#payment-confirm').append(`
    <div class='payment-confirm-content'>
      <h2>TOTAL PRICE</h2>
      <h3>${total}</h3>
      <button id='confirm-button'>CONFIRM PAYMENT</button>
    </div>
  `)
  $('#confirm-button').css({ cursor: 'pointer', 'background-color': '#FFB830' })
  $('#confirm-button').prop('disabled', false)

  $('#confirm-button').click(async () => {
    const transactionDetail = await transaction.getTransaction()
    const transactionIndex = transactionDetail.length
    const transactionData = {
      uid,
      date,
      slots,
      total
    }
    transaction.setTransaction(transactionData, transactionIndex)
    transaction.setslots(slots, initial)

    confirmationPopup.popupRender()
  })
}

export { payment, getPaymentDetail }
