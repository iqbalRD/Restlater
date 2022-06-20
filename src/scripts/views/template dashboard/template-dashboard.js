const createLayoutDashboard = () => `
    <div class="sidebar">
    <div class="sidebar-menu">
        <ul>
        <li><a href="#/dashboard" id="default-dashboard"><span class="las la-igloo"></span><span>Dashboard</span></a>
        </li>

        <li><a href="#/dashboard" id="user-dashboard"><span class="las la-users"></span><span>Users</span></a>
        </li>

        <li class="dropdown1"><a href="#/dashboard" id="grave-dashboard"><span class="las la-book"></span>Graves<span id="sub1"
                class="las la-caret-down"></span></a>
            <ul class="submenu">
            <li><a href="#">Blok A</a></li>
            <li><a href="#">Blok B</a></li>
            <li><a href="#">Blok C</a></li>
            <li><a href="#">Blok D</a></li>
            <li><a href="#">Blok E</a></li>
            </ul>
        </li>

        <li class="dropdown1"><a href="#/dashboard" id="transaction-dashboard"><span class="las la-shopping-bag"></span>Transactions<span id="sub1"
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

    <div id="list_table" class="list_table"></div>
`

const createDashboardUserTableTemplate = () => `
<table id="userListTable">
    <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Action</th>
    </tr>
</table>
`

const createDashboardTransactionTableTemplate = () => `
<table id="transactionListTable">
<tr>
    <th>Transaction ID</th>
    <th>User ID</th>
    <th>Booked Graves</th>
    <th>Total Price</th>
    <th>Date</th>
    <th>Action</th>
</tr>
</table>
`
const createDashboardGravesTableTemplate = () => `
    <table id="graveListTable">
        <tr>
            <th id="graveA">Graves A</th>
            <th id="graveB">Graves B</th>
            <th id="graveC">Graves C</th>
            <th id="graveD">Graves D</th>
            <th id="graveE">Graves E</th>
        </tr>
    </table>
`

export {
  createLayoutDashboard,
  createDashboardUserTableTemplate,
  createDashboardTransactionTableTemplate,
  createDashboardGravesTableTemplate
}
