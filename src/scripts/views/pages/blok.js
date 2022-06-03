import grave from '../../data/grave-test'
import UrlParser from '../../routes/url-parser'
import getInitial from '../../utils/get-blok-initial'
import { getPaymentDetail } from './payment'

const blok = {
  render () {
    return `
      <section id='blok-container'>
      </section>
    `
  },

  afterRender () {
    const selected = []
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const id = url.id

    const initial = getInitial(id)
    document.title = `Restlater | Blok ${initial} Slots`
    $('#blok-container').append(`
      <div id='blok-header'>
       <h1>BLOK ${initial} SLOTS</h1>
       <div id='slot-indication'>
        <span class='available'>AVAILABLE</span>
        <span class='selected'>SELECTED</span>
        <span class='reserved'>RESERVED</span>
       </div>
      </div>
      <div id='slot-content'>
      </div>
      <div id='slot-confirm'>
      </div>
    `)

    renderSlots(grave[id], selected, initial)
    slotsConfirmation(grave.blokA[0].price, selected, initial)
  }
}

const renderSlots = (slots, selected, initial) => {
  slots.forEach(slot => {
    let status = 'available'
    let cursor = 'style="cursor: pointer;"'
    if (!slot.available) {
      status = 'reserved'
      cursor = ''
    }
    $('#slot-content').append(`
      <div class='slot ${status}' id='${slot.id}' ${cursor}>
        ${slot.id}
      </div>
    `)
  })

  $('.slot').click(function () {
    if ($(this).hasClass('available')) {
      const id = $(this).attr('id')

      if (selected.includes(id)) {
        selected.splice(selected.indexOf(id), 1)
      } else {
        selected.push(id)
      }

      $(this).toggleClass('selected')
      slotsConfirmation(grave.blokA[0].price, selected, initial)
    }
  })
}

const slotsConfirmation = (price, selected, initial) => {
  const total = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'idr' }).format(
    selected.length * price
  )

  $('#slot-confirm').html(`
    <h2>TOTAL PRICE</h2>
    <h3>${total}</h3>
    <button id='confirm-button'>RESERVE NOW</button>
  `)

  $('#confirm-button').prop('disabled', selected.length === 0)

  if (selected.length) {
    console.log(selected)
    $('#confirm-button').css('background-color', '#FFB830')
    $('#confirm-button').css('cursor', 'pointer')
  }

  $('#confirm-button').click(function () {
    getPaymentDetail(selected, total, initial)
    $('#confirm-button').css('filter', 'brightness(120%)')
  })
}

export default blok
