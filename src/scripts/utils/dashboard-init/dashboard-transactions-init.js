import transaction from '../../data/transactionAPI'
import { createDashboardTransactionTableTemplate } from '../../views/template dashboard/template-dashboard'

const Transactions = async () => {
  const renderTransaction = await transaction.getTransaction()
  $('#transaction-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardTransactionTableTemplate())

  renderTransaction.forEach((deal, index) => {
    if (deal === null) {
      return undefined
    }
    $('#transactionListTable').append(`
            <tr>
                <td>${index}</td>
                <td>${deal.uid}</td>
                <td>${deal.slots}</td>
                <td>${deal.total}</td>
                <td>${deal.date}</td>
                <td>
                    <button class='edit-button dashboard-button'>Edit</button>
                    <button class='delete-button dashboard-button'>Delete</button>
                </td>
            </tr>
        `)
  })
}

export default Transactions
