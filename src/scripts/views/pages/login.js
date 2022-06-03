const login = {
    async render () {
      return `
      <div class="container">
      <div class="row">
          <div class="col-md-6 offset-md-3">
              <div class="signup-form">
                  <form action="" class="mt-5 border p-4 bg-light shadow">
                      <h4 class="mb-5 text-secondary">LOGIN</h4>
                      <div class="row">
  
                          <div class="mb-3 col-md-12">
                               <label>Email<span class="text-danger">*</span></label>
                              <input type="email" name="email" class="form-control" placeholder="Email">
                          </div>
  
                          <div class="mb-3 col-md-12">
                               <label>Password<span class="text-danger">*</span></label>
                               <input type="password" name="password" class="form-control" placeholder="Password">
                          </div>
  
                          <div class="col-md-12">
                             <button class="btn btn-primary float-end">LOGIN</button>
                          </div>
                      </div>
                  </form>
                  <p class="text-center mt-3 text-secondary" id="form-register">If you not have an account,<a href="javascript":;" onclick="document.location.hash='register';"">Register Now</a></p>
              </div>
          </div>
      </div>
  </div>
                `
    },
  
    async afterRender () {
      // Fungsi ini akan dipanggil setelah render()
      $('#form-register').click((e) => {
        document.location.hash = '/register'
      })
    }
  }
  
  export default login
  