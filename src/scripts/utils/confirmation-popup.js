const popup = `
  <div class="confirmation-popup">
    <div class="confirmation-popup-content">
      <h2>THANK YOU</h2>
      <img src="./images/check.svg" alt="checkmark symbol" width='100px'>
      <p>Your payment has been confirmed. Thanks for using our service, we hope it will be useful for your or your loved ones future</p>
      <button id="home-button">Back Home</button>
      <button id="profile-button">My Profile</button>
    </div>
  </div>
`

const popupInit = () => {
  $('body').append(popup)
  $('.confirmation-popup').fadeIn(500, () => {
    $('.confirmation-popup').css({ display: 'grid' })
    $('.confirmation-popup-content').fadeIn(300)
    $('.confirmation-popup-content').addClass('confirmation-popup-content__active')
  })

  $('#home-button').click(() => {
    $('.confirmation-popup').hide()
    window.location.hash = '/'
  })

  $('#profile-button').click(() => {
    $('.confirmation-popup').hide()
    window.location.hash = '/profile'
  })
}

export default popupInit
