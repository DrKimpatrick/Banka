import AdminBlackTheme from '../components/adminDashboard/AdminBlackTheme.js';
import NavBar from '../components/clientDashboard/navbar.js';
import AccountsList from '../components/adminDashboard/accountsList.js';

let AdminDashboard = {
    render : async () => {
        let view =  /*html*/`
            <div class='dashWrapper'>
                <div class='dashBackTheme'>${AdminBlackTheme.render()}</div>
                <div class='dashLightTheme'>
                    ${NavBar.render()}
                    <div class='contentArea'>
                        ${AccountsList.render()}
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default AdminDashboard;
