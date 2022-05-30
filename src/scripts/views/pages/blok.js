import grave from '../../data/grave-test'
import UrlParser from '../../routes/url-parser'
import getInitial from '../../utils/get-blok-initial'
import { getVariables } from './payment'

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

    renderSlots(grave[id], selected)
    slotsConfirmation(grave.blokA[0].price, selected)
  }
}

const renderSlots = (slots, selected) => {
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
      slotsConfirmation(grave.blokA[0].price, selected)
    }
  })
}

const slotsConfirmation = (price, selected) => {
  const total = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'idr' }).format(
    selected.length * price
  )

  $('#slot-confirm').html(`
    <h2>TOTAL HARGA</h2>
    <h3>${total}</h3>
    <button id='confirm-button'>RESERVE NOW</button>
  `)

  if (selected.length) {
    console.log(selected)
    $('#confirm-button').css('background-color', '#FFB830')
    $('#cconfirm-button').css('cursor', 'pointer')
  }

  $('#confirm-button').click(function () {
    getVariables(selected, price)
  })
}

export default blok
