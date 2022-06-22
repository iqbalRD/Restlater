import transaction from '../../data/transactionAPI'
import user from '../../data/userAPI'
import { createDashboardTransactionTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'
import { searchData } from '../search-data'

const Transactions = async () => {
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }

  const renderTransaction = await transaction.getTransaction()
  $('#transaction-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardTransactionTableTemplate())
  searchData()

  renderTransaction.forEach(async (deal, index) => {
    if (deal === null) {
      return undefined
    }
    const userResult = await user.getUserById(deal.uid)
    $('#transactionListTable').append(`
            <tr id='${index}'>
                <td>${index}</td>
                <td>${userResult.displayName}</td>
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
