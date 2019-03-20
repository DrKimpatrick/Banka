
let Login = {
    render : () => {
        let view =  /*html*/`
        <div class="topWrapper">
        <div class="triangle-left"></div>
        <div class="circle"></div>
        <div class="container">
          <div class="blackTheme">
            <span class="bankIcon">
              <i class="fas fa-university fa-4x"></i>
            </span>
            <h2>Crest Bank</h2>
            <p>With you in every step</p>
          </div>
          <div class="lightTheme">
            <h3>Login to Crest</h3>
            <form>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" class="signupButton" value="LOGIN" />
            </form>
            <p>Don't have an account? <a href="#">SIGN UP</a></p>
          </div>
        </div>
      </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Login;