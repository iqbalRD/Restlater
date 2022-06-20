import transaction from '../../data/transaction-test'
import { createDashboardTransactionTableTemplate } from '../../views/template dashboard/template-dashboard'

const Transactions = () => {
  const renderTransaction = transaction
  $('#transaction-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardTransactionTableTemplate())

  renderTransaction.forEach(deal => {
    $('#transactionListTable').append(`
            <tr>
                <td>${deal.transactionId}</td>
                <td>${deal.userId}</td>
                <td>${deal.graveSlots}</td>
                <td>${deal.price}</td>
                <td>${deal.date}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        `)
  })
}

export default Transactions
