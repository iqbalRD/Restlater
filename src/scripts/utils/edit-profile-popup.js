const editProfile = `
<div class="edit-profile-popup">
  <div class="edit-profile-popup-content">
    <h2>EDIT PROFILE</h2>
    <form class="edit-profile-popup-content-form">
      <div class="edit-profile-popup-content-form-item">
        <label for="edit-profile-name">Full Name</label>
        <input type="text" id="edit-profile-name" placeholder="Full Name">
      </div>
      <div class="edit-profile-popup-content-form-item">
        <label for="edit-profile-phone">Phone</label>
        <input type="text" id="edit-profile-phone" placeholder="Phone">
      </div>
      <div class="edit-profile-popup-content-form-item">
        <label for="edit-profile-address">Address</label>
        <input type="text" id="edit-profile-address" placeholder="Address">
      </div>
    </form>
    <button id="edit-profile-save">SAVE</button>
    <button id="edit-profile-cancel">CANCEL</button>
  </div>
</div>
`

export default editProfile
