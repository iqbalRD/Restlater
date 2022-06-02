const popupInit = (confirmationPopup) => {
  $('body').append(confirmationPopup)
  $('.popup').fadeIn(500, () => {
    $('.popup').css({ display: 'grid' })
    $('.popup-content').fadeIn(300)
    $('.popup-content').addClass('popup-content__active')
  })
}

export default popupInit
