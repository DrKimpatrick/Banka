import Auth from './layouts/auth.js';
import Login from './components/auth/login.js';
import SignUp from './components/auth/signup.js';
import Utils from './utils.js';
import Error404 from './components/404.js';
import ClientDashboard from './layouts/clientDashboard.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : 'login'
    ,'/signup'       : 'signup'
    ,'/dashboard'    : ClientDashboard
};

const router = async () => {
    let container = document.getElementById('root');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404

    if (page === 'login' || page === 'signup'){
        if (page === 'login'){
            container.innerHTML = await Auth.render(Login.render())
            await Auth.after_render()
            document.getElementById('lightTheme').classList.remove('lightThemeSignup');
            document.getElementById('lightTheme').classList.add('lightThemeLogin');
        }else{
            container.innerHTML = await Auth.render(SignUp.render())
            await Auth.after_render()

            document.getElementById('lightTheme').classList.remove('lightThemeLogin');
            document.getElementById('lightTheme').classList.add('lightThemeSignup');
        }
    }else {
        container.innerHTML = await page.render();
        await page.after_render();
    }
    

}
// listen onLoad
window.addEventListener('load', router);
// Listen on hash change:
window.addEventListener('hashchange', router);

