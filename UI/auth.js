// import Login from './login.js';
// import SignUp from './signup.js';
// import Utils from './utils.js';
import Utils from './utils.js';
import Error404 from './404.js';

let SignUp = {
    render : () => {
        let view =  /*html*/`
        <div class="lightTheme">
        <h3>Signup to Crest</h3>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <input type="submit" class="signupButton" value="SIGN UP" />
        </form>
        <p>Have an account? <a href="/#/login">LOGIN</a></p>
      </div>
        `
        return view
    },
    after_render: async () => {}      
}

let Login = {
    render : () => {
        let view =  /*html*/`
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
        `
        return view
    },
    after_render: async () => {}
        
}

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : SignUp
    ,'/login'       : Login
};

const router = async () => {
    // let container = document.getElementById('root');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404

    // container.innerHTML = await page.render();
    // await page.after_render();
    console.log('page.render()')
    return page.render()

}


let Auth = {
    render : async () => {
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
                    
                    ${window.addEventListener('hashchange', router),
                    window.addEventListener('load', router,
                     router.render())
                    }
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Auth;
// ${await Login.render()}