const about = {
  render () {
    document.title = 'Restlater | About Us'
    return `
      <section id='about-container'>
        <div id='about-content'>
          <h1>ABOUT US</h1>
          <img src='./images/us.svg' alt='about us (CPSG-56)' height='400px'>
          <p>We try to bring efficiency to life through the World Wide Web. Today's graduates have the opportunity to make the web a shared network for our lives, and to serve the great common good. Not with big business; no, with techies, with the young people of our times. We have the opportunity to do things better, create more value, collaborate, to take responsibility. And not through exclusion or domination. Not through force, but through cooperation. There is a spirit of global open-mindedness that we share. And we have the ability to define the internet. Let's shape it into a common space for sharing value, creativity, and knowledge. Let's turn the Internet into a value network, not a service network. A revolution of positive values, built on fairness, sustainability, and solidarity, with no borders and no barriers. A network that provides the means for sharing, and the wisdom to move things forward.</p>
        </div>
      </section>
      <footer>
      @Copyright 2022, Restlater Corporation
      </footer>
    `
  },

  afterRender () {
  }
}

export default about
