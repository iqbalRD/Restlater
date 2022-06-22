import user from '../../data/userAPI'
import { createDashboardUserTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'
import { searchData } from '../search-data'

const Users = async () => {
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }
  const renderUser = await user.getAllUsers()
  $('#user-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardUserTableTemplate())
  searchData()

  Object.keys(renderUser).forEach(user => {
    console.log(renderUser[user])
    $('#userListTable').append(`
    <tr>
      <td>${renderUser[user].uid}</td>
      <td>${renderUser[user].displayName}</td>
      <td>
        <button class='edit-button dashboard-button'>Edit</button>
        <button class='delete-button dashboard-button'>Delete</button>
      </td>
    </tr>`)
  })
}

export default Users
