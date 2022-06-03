const register = {
    async render () {
      return `
        <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="signup-form">
                    <form action="" class="mt-5 border p-4 bg-light shadow">
                        <h4 class="mb-5 text-secondary">REGISTER</h4>
                        <div class="row">
                          
                            <div class="mb-3 col-md-12">
                                <label>Username<span class="text-danger">*</span></label>
                                <input type="text" name="username" class="form-control" placeholder="Username">
                            </div>
  
                            <div class="mb-3 col-md-12">
                                <label>Email<span class="text-danger">*</span></label>
                                <input type="email" name="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                                   <input type="password" name="password" class="form-control" placeholder="Password">
                            </div>
  
                            <div class="col-md-12">
                               <button class="btn btn-primary float-end">REGISTER</button>
                            </div>
                        </div>
                    </form>
                    <p class="text-center mt-3 text-secondary" id="form-login">If you have account, Please <a href="javascript":;" onclick="document.location.hash='login';"">Login Now</a></p>
                </div>
            </div>
        </div>
    </div>
                  `
    },
  
    async afterRender () {
      // Fungsi ini akan dipanggil setelah render()
      $('#form-login').click((e) => {
        document.location.hash = '/login'
      })
    }
  }
  
  export default register
  