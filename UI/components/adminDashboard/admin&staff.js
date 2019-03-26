
const CreateAdminStaff = {
    render : () => {
        let view =  /*html*/`
            <div class='accountFormWrapper'>
                <span>Create staff/admin account</span>
                <form id='accountForm'>
                    <div class='formGroup'>
                        <label for='email'>Email</label>
                        <input type="text" id='email' name="email" />
                        <span id='firstName' class='hideError'></span>
                    </div>
                    <div class='formGroup'>
                        <label for='status'>Status</label>
                        <select id='status'>
                            <option>--select--</option>
                            <option>Admin</option>
                            <option>Staff</option>
                        </select>
                    </div>
                    <div class='formGroup'>
                        <label for='password'>Password</label>
                        <input type="password" id='password' name="password" />
                        <span id='loginEmailError' class='hideError'></span>
                    </div>
                    <div class='formGroup'>
                        <label for='confirmPassword'>Confirm password</label>
                        <input type="password" id='confirmPassword' name="password" />
                        <span id='loginEmailError' class='hideError'></span>
                    </div>
                    <a><input type="submit" class="submitButton" value='Create Account'/></a>
                </form>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default CreateAdminStaff;
  