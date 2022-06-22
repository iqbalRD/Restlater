export const searchData = () => {
  $('#search-input').on('keyup', function () {
    const value = $(this).val().toLowerCase()
    $('#list_table tr').filter(function () {
      if ($(this).parent().is('tbody')) {
        return undefined
      }
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      return undefined
    }
    )
  }
  )
}
