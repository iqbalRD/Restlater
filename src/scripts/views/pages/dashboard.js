const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    $('body').addClass('nav-main')
    $('#dashboard').hide()
    return `
    <div id='dashboard-container'>
      <section class="sidebar">
        <div class="sidebar-menu">
          <ul>
            <li>
              <div class="active">
                <span class="las la-igloo"></span>
                <span>Dashboard</span>
              </div>
            </li>

            <li class='menu'>
              <div><span class="las la-users"></span><span>Users</span></div>
            </li>

            <li class="dropdown1 menu">
              <div>
                <span class="las la-book"></span>
                Graves
                <span id="sub1" class="las la-caret-down"></span>
              </div>
            </li>
            <ul class="submenu">
            <li><div>Blok A</div></li>
            <li><div>Blok B</div></li>
            <li><div>Blok C</div></li>
            <li><div>Blok D</div></li>
            <li><div>Blok E</d></li>
            </ul>

            <li class='menu'>
            <div>
              <span class="las la-shopping-bag">
              </span>
              Transactions
            </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="dashboard-main">
        <div class="search">
          <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="search" placeholder="Search here">
          </div>
        </div>

        <div class="filter">
          <span>Filter</span><i id="sub2" class="las la-caret-down"></i>
        </div>

        <div id="data-container"></div>
      </section>

    </div>
          `
  },

  afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    $('.dropdown1').click(() => {
      if ($('.submenu').css('display') === 'none') {
        $('.submenu').slideDown('slow')
        return
      }
      $('.submenu').slideUp()
    }
    )
  }
}

export default dashboard
