import AdminBlackTheme from '../components/adminDashboard/AdminBlackTheme.js';
import NavBar from '../components/clientDashboard/navbar.js';
import ModalComponent from '../components/modal/modalComponent.js';

let AdminDashboard = {
    render : async (data) => {
        let view =  /*html*/`
            <div class='dashWrapper'>
                <div class='dashBackTheme'>${AdminBlackTheme.render()}</div>
                <div class='dashLightTheme'>
                    ${ModalComponent.render('deactivateModal', 'Deactivate user account', 'Deactivate user account')}
                    ${ModalComponent.render('deleteModal', 'Delete account', 'Delete user account')}
                    ${NavBar.render()}
                    <div class='contentArea'>
                        ${data}
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default AdminDashboard;
