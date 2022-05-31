import userAccount from '../../data/user-account'
import popupInit from '../../utils/confirmation-popup'
import getDate from '../../utils/date-init'

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
    renderProfile(userAccount[0])
    renderReservation(paymentDetail.initial, paymentDetail.slots)
    paymentConfirm(paymentDetail.price)
  }
}

const renderProfile = (profile) => {
  $('#payment-profile').append(`
      <h3>Profile</h3>
      <div class='payment-profile-content'>
        <div class='payment-profile-item'>
          <h4>Full Name</h4>
          <p>${profile.name}</p>
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
}

const renderReservation = (initial, slots) => {
  $('#payment-reservation').append(`
    <div class='payment-reservation-content'>
      <h3>Reservation</h3>
      <p>${getDate()}</p>
      <h4>BLOK ${initial}</h4>
      <h5>${insertsComma(slots)}</h5>
      <div></div>
    </div>
    `)
}

const paymentConfirm = (total) => {
  $('#payment-confirm').append(`
    <div class='payment-confirm-content'>
      <h2>TOTAL PRICE</h2>
      <h3>${total}</h3>
      <button id='confirm-button'>CONFIRM PAYMENT</button>
    </div>
  `)
  $('#confirm-button').css({ cursor: 'pointer', 'background-color': '#FFB830' })
  $('#confirm-button').prop('disabled', false)

  $('#confirm-button').click(() => {
    popupInit()
  })
}

const insertsComma = (array) => {
  const split = array.join(', ')
  return split
}

export { payment, getPaymentDetail }
