import BankLogo from '../dashbordAssets/bankLogo.js';
import ProfilePicture from '../dashbordAssets/profilePic.js';

const AdminBlackTheme = {
    render : () => {
        let view =  /*html*/`
            ${BankLogo.render()}

            ${ProfilePicture.render()}
            
            <div class='navigation'>
                <a href='#/accountList' class='navWrapper' id='profile'>
                    <i class="fas fa-users fa-2x"></i>
                    <span>Account List</span>
                </a>
                <a href='#/createstaffadmin' class='navWrapper' id='profile'>
                    <i class="fas fa-plus fa-2x"></i>
                    <span>Account</span>
                </a>
                <a href='#/' class='navWrapper'>
                    <i class="fas fa-sign-out-alt fa-2x"></i>
                    <span>Logout</span>
                </a>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AdminBlackTheme;
  