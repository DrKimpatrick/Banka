import BlackTheme from '../components/clientDashboard/blackTheme.js';
import NavBar from '../components/clientDashboard/navbar.js';
// import NewAccount from '../components/clientDashboard/newAccount.js';
// import ClientProfile from './clientProfile.js';

let ClientDashboard = {
    render : async (content) => {
        let view =  /*html*/`
            <div class='dashWrapper'>
                <div class='dashBackTheme'>${BlackTheme.render()}</div>
                <div class='dashLightTheme'>
                    ${NavBar.render()}
                    <div class='contentArea'>
                        ${content}
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default ClientDashboard;
