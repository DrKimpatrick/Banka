
export let NewAccount = {
    render : () => {
        let view =  /*html*/`
            <div class='accountFormWrapper'>
                <span>Create a bank account</span>
                <form id='accountForm'>
                    <div class='formGroup'>
                        <label for='firstName'>First Name</label>
                        <input type="text" id='firstName' name="firstName" />
                        <span id='firstName' class='hideError' ></span>
                    </div>
                    <div class='formGroup'>
                        <label for='lastName'>Last Name</label>
                        <input type="text" id='lastName' name="lastName" />
                        <span id='loginEmailError' class='hideError'></span>
                    </div>
                    <div class='formGroup'>
                        <label for='phoneNumber'>Phone Number</label>
                        <input type="text" id='phoneNumber' name="phoneNumber" />
                        <span id='phoneNumber' class='hideError' ></span>
                    </div>
                    <div class='formGroup'>
                        <label for='email'>Email</label>
                        <input type="text" id='email' name="email" />
                        <span id='email' class='hideError' ></span>
                    </div>
                    
                    <a><input type="submit" class="submitButton" value='Create Account'/></a>
                </form>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default NewAccount;
  