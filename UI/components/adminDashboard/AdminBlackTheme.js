import BankLogo from '../dashbordAssets/bankLogo.js';
import ProfilePicture from '../dashbordAssets/profilePic.js';

const AdminBlackTheme = {
    render : () => {
        let view =  /*html*/`
            ${BankLogo.render()}

            ${ProfilePicture.render()}

            <div class='navigation'>
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
  