import userAccount from '../../data/user-account'
import { createDashboardUserTableTemplate } from '../../views/template dashboard/template-dashboard'

const Users = () => {
  const renderUser = userAccount
  $('#user-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardUserTableTemplate())

  renderUser.forEach(user => {
    $('#userListTable').append(`
      <tr>
        <td>${user.userId}</td>
        <td>${user.name}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>`)
  })
}

export default Users
