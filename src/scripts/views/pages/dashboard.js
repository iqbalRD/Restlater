const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    return `
  <main>
    <div class="sidebar">
      <div class="sidebar-menu">
        <ul>
          <li><a href="#" class="active"><span class="las la-igloo"></span><span>Dashboard</span></a>
          </li>

          <li><a href="#"><span class="las la-users"></span><span>Users</span></a>
          </li>

          <li class="dropdown1"><a href=""><span class="las la-book"></span>Graves<span id="sub1"
                class="las la-caret-down"></span></a>
            <ul class="submenu">
              <li><a href="#">Blok A</a></li>
              <li><a href="#">Blok B</a></li>
              <li><a href="#">Blok C</a></li>
              <li><a href="#">Blok D</a></li>
              <li><a href="#">Blok E</a></li>
            </ul>
          </li>

          <li class="dropdown1"><a href=""><span class="las la-shopping-bag"></span>Transactions<span id="sub1"
                class="las la-caret-down"></span></a>
            <ul class="submenu">
              <li><a href="#">List Transaction</a></li>
              <li><a href="#">Invoice</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <section class="search">
      <div class="search-wrapper">
        <span class="las la-search"></span>
        <input type="search" placeholder="Search here">
      </div>
    </section>

    <div class="filter">
      <span>Filter</span><i id="sub2" class="las la-caret-down"></i>
    </div>

    <form action="" class="form">
    </form>
    
  </main>
          `
  },

  afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    $('body').append(`
    <footer class="footer">
    @Copyright 2022, Restlater Corporation
    </footer>
    `)
  }
}

export default dashboard
