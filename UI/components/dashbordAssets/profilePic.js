import isAdminStaffOrClient from '../Utils.js';

const ProfilePicture = {
    render : () => {
        let view =  /*html*/`
            <div class='profileImageWrapper'>
                <img src='../../images/patrick.jpg'/>
                <i class="fas fa-envelope-open-text"> ${isAdminStaffOrClient().email}</i>
                <span>${isAdminStaffOrClient().status}</span>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default ProfilePicture;
  