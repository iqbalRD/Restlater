import Graves from '../../utils/dashboard-init/dashboard-graves-init'
import Transactions from '../../utils/dashboard-init/dashboard-transactions-init'
import Users from '../../utils/dashboard-init/dashboard-users-init'
import { createLayoutDashboard } from '../template dashboard/template-dashboard'

const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    $('body').addClass('nav-main')
    $('#dashboard').hide()
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

    // pindah isian dashboard
    $('#dashboard-user').on('click', event => {
      event.preventDefault()
      Users()
      $('a').classList.remove('.active')
    })

    $('#dashboard-transaction').on('click', event => {
      event.preventDefault()
      Transactions()
      $('a').classList.remove('.active')
    })

    $('.dropdown1').on('click', event => {
      event.preventDefault()
      Graves()
    })
  }
}

export default dashboard
