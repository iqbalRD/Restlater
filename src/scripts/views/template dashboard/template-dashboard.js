const createLayoutDashboard = () => `
    <div id='dashboard-container'>
        <section class="space"></section>
        <section class="sidebar">
        <div class="sidebar-menu">
            <ul>
            <li>
                <div class="active">
                <span class="las la-igloo"></span>
                <span>Dashboard</span>
                </div>
            </li>

            <li class='menu' id='dashboard-user'>
                <div><span class="las la-users"></span><span>Users</span></div>
            </li>

            <li class="dropdown1 menu">
                <div>
                <span class="las la-book"></span>
                Graves
                <span id="sub1" class="las la-caret-down"></span>
                </div>
            </li>
            <ul class="submenu">
            <li id='dashboard-blok-a'><div>Blok A</div></li>
            <li id='dashboard-blok-b'><div>Blok B</div></li>
            <li id='dashboard-blok-c'><div>Blok C</div></li>
            <li id='dashboard-blok-d'><div>Blok D</div></li>
            <li id='dashboard-blok-e'><div>Blok E</d></li>
            </ul>

            <li class='menu' id='dashboard-transaction'>
            <div>
                <span class="las la-shopping-bag">
                </span>
                Transactions
            </div>
            </li>
            </ul>
        </div>
        </section>

        <section id="dashboard-main">
        <div class="search">
            <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="search" placeholder="Search here">
            </div>
        </div>

        <div class="filter">
            <span>Filter</span><i id="sub2" class="las la-caret-down"></i>
        </div>

        <div id="data-container"><div id="list_table" class="list_table"></div></div>
        </section>

    </div>
`

const createDashboardUserTableTemplate = () => `
<table id="userListTable" class='table-data'>
    <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Action</th>
    </tr>
</table>
`

const createDashboardTransactionTableTemplate = () => `
<table id="transactionListTable" class='table-data'>
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
    <table id="graveListTable" class='table-data'>
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
