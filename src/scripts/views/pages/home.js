import grave from '../../data/grave-test'
import getInitial from '../../utils/get-blok-initial'

const home = {
  render () {
    document.title = 'Restlater | Reserve your own future'
    return `
    <section id='hero'>
      <img src="./images/logo-large.png" alt="Restlater Logo" height='470px' width='420px'>
      <div id='right-hero'>
        <h1>
          Prepare yourself and your family for the things that will surely come to human life
        </h1>
        <a href="javascript:;" onclick="document.location.hash='blok';">
          RESERVE NOW
        </a>
      </div>
    </section>
    <section id='reason'>
      <div class='section-title'>
        <h2>Why would somebody use this?</h2>
      </div>
      <div id='reason-content'>
        <div class='reason-item'>
          <img src="./images/time.svg" alt="Time saver logo" height='100px' width='100px'>
          <h3>TIME SAVER</h3>
          <p>Save your or your families time for having a slot</p>
        </div>
        <div class='reason-item'>
          <img src="./images/search.svg" alt="Easy search logo" height='100px' width='100px'>
          <h3>EASY SEARCH</h3>
          <p>Searching for a slot has never been this easy</p>
        </div>
        <div class='reason-item'>
          <img src="./images/capacity.svg" alt="Time saver logo" height='100px' width='100px'>
          <h3>SAFE PLAN</h3>
          <p>Never fear the depletion of slots on the public services</p>
        </div>
        <div class='reason-item'>
          <img src="./images/safe.svg" alt="Time saver logo" height='100px' width='100px'>
          <h3>RELAX</h3>
          <p>Feel safe & sound when the time finally comes</p>
        </div>
      </div>
    </section>
    <section id='blok'>
      <div class='section-title'>
        <h2>Reserve Your Future Home Now</h2>
      </div>
      <div id='blok-content'>
      </div>
    </section>
    <section id='contact'>
      <div class='triangle'></div>
      <div class='contact-content'>
        <h3>
          If it's urgent you can contact us in <br>+621-231-241-512
        </h3>
        <h4>
          If not, you can email us everything you want to know in <span>123@gmail.com</span>
        </h4>
      </div>
    </section>
    <footer>
    @Copyright 2022, Restlater Corporation
    </footer>
    `
  },

  afterRender () {
    Object.keys(grave).forEach(key => {
      const initial = getInitial(key)
      const all = grave[key].length
      const unavailable = getUnavailable(grave[key])
      $('#blok-content').append(`
        <div class='blok-item' id='${key}' tabindex='0'>
          <h3>BLOK ${initial}</h3>
          <h4>${unavailable}/${all}</h4>
          <p>AVAILABLE SLOTS</p>
          <div class='progress'>
            <div class='progress-bar' style='width: ${unavailable / all * 100}%'></div>
          </div>
        </div>
      `)
    })

    $('.blok-item').click((e) => {
      const id = e.currentTarget.id
      document.location.hash = `#/blok/${id}`
    })

    $('.blok-item').on('keydown', (e) => {
      if (e.keyCode === 13) {
        const id = e.currentTarget.id
        document.location.hash = `#/blok/${id}`
      }
    })
  }
}

const getUnavailable = (slots) => {
  return slots.filter(item => item.available === false).length
}

export default home
