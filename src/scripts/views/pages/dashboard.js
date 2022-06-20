import Graves from '../../utils/dashboard-init/dashboard-graves-init'
import Transactions from '../../utils/dashboard-init/dashboard-transactions-init'
import Users from '../../utils/dashboard-init/dashboard-users-init'
import { createLayoutDashboard } from '../template dashboard/template-dashboard'

const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    return createLayoutDashboard()
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
    
    $('body').append(`
    <footer class="footer">
    @Copyright 2022, Restlater Corporation
    </footer>
    `)

    // pindah isian dashboard
    $('#user-dashboard').on('click', event => {
      event.preventDefault()
      Users()
      $('a').classList.remove('.active')
    })

    $('#transaction-dashboard').on('click', event => {
      event.preventDefault()
      Transactions()
      $('a').classList.remove('.active')
    })

    $('#grave-dashboard').on('click', event => {
      event.preventDefault()
      Graves()
    })
  }
}

export default dashboard
