import userAccount from '../../data/user-account'

let paymentDetail = null

const getPaymentDetail = (slots, price) => {
  paymentDetail = { slots, price }
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
    const profile = userAccount[0]
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
    `)
  }
}

export { payment, getPaymentDetail }
