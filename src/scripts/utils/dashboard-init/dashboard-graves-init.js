import grave from '../../data/grave-test'
import { createDashboardGravesTableTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = () => {
  const renderGrave = grave
  $('#grave-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardGravesTableTemplate())

  renderGrave.blokA.forEach(tomb => {
    if (!tomb.available) {
      $('#graveListTable').append(`
                <tr>
                    <td>${tomb.id}</td>
                </tr>
            `)
    }
  })
}

export default Graves
