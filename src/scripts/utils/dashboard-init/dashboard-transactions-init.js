import grave from '../../data/graveAPI'
import transaction from '../../data/transactionAPI'
import user from '../../data/userAPI'
import { createDashboardTransactionTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'
import getDate from '../date-init'
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
                <td id='${deal.uid}'>${userResult.displayName}</td>
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

  $(document).on('click', '.edit-button', (e) => {
    const index = e.target.parentElement.parentElement.id
    const parentChild = e.target.parentElement.parentElement.children

    changeColumnInput(parentChild, index)
  })
}

const changeColumnInput = (parentChild, index) => {
  // Edit the uid or displayName
  // const uid = parentChild[1].id
  // const displayName = parentChild[1].innerText
  // $(parentChild[1]).html(`
  //   <input type='text' value='${uid}' id='edit-uid' class='edit-input'>
  // `)

  const slots = parentChild[2].innerText
  $(parentChild[2]).html(`
    <input type='text' value='${slots}' id='edit-slots' class='edit-input'>
  `)

  const actions = parentChild[5]
  $(actions).html(`
    <button id='${index}-edit' class='submit-button dashboard-button'>Submit</button>
    <button id='${index}-cancel' class='delete-button dashboard-button'>Cancel</button>
  `)

  $(document).on('click', `#${index}-edit`, async (e) => {
    // const editUid = $('#edit-uid').val()
    const editSlots = arrayMaker($('#edit-slots').val())
    const prevSlots = arrayMaker(slots)
    const initial = prevSlots[0].charAt(0)
    const deletedSlots = prevSlots.filter(slot => !editSlots.includes(slot))
    const addedSlots = editSlots.filter(slot => !prevSlots.includes(slot))
    const price = await grave.getPrice()
    const prevTransaction = await transaction.getTransaction()

    transaction.freeSlots(deletedSlots, initial)
    transaction.setslots(addedSlots, initial)

    transaction.setTransaction({
      ...prevTransaction[index],
      slots: addedSlots.join(','),
      date: getDate(),
      total: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'idr' }).format(
        addedSlots.length * price
      )
    }, index)

    Transactions()
  })

  $(document).on('click', `#${index}-cancel`, (e) => {
    cancelEdit(parentChild, slots)
  })
}

const cancelEdit = (parentChild, slots) => {
  // $(parentChild[1]).html(`
  // <td id='${uid}'>${displayName}</td>
  // `)

  $(parentChild[2]).html(`
  ${slots}
  `)
}

const arrayMaker = (slots) => {
  const array = slots.split(',')
  return array
}

export default Transactions
