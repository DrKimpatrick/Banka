import Auth from './auth.js';

const app = async () => {
    let container = document.getElementById('root');
    container.innerHTML = await Auth.render()
    await Auth.after_render()
}
// Listen on hash change:
// window.addEventListener('hashchange', router);

window.addEventListener('load', app);
