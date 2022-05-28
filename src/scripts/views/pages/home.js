const home = {
  render () {
    return `
    <section id='hero'>
      <img src="./images/logo-large.png" alt="Restlater Logo" height='400px'>
      <div id='right-hero'>
        <h1>
          Prepare yourself and your family for the things that will surely come to human life
        </h1>
        <a href='#blok'>
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
          <img src="./images/time.svg" alt="Time saver logo" height='100px'>
          <h3>TIME SAVER</h3>
          <p>Save your or your families time for having a slot</p>
        </div>
        <div class='reason-item'>
          <img src="./images/search.svg" alt="Easy search logo" height='100px'>
          <h3>EASY SEARCH</h3>
          <p>Searching for a slot has never been this easy</p>
        </div>
        <div class='reason-item'>
          <img src="./images/capacity.svg" alt="Time saver logo" height='100px'>
          <h3>SAFE PLAN</h3>
          <p>Never fear the depletion of slots on the public services</p>
        </div>
        <div class='reason-item'>
          <img src="./images/safe.svg" alt="Time saver logo" height='100px'>
          <h3>RELAX</h3>
          <p>Feel safe & sound when the time finally comes</p>
        </div>
      </div>
    </section>
    `
  }
}

export default home
