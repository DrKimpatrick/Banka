import isAdminStaffOrClient from '../Utils.js';

const ProfilePicture = {
    render : () => {
        let view =  /*html*/`
            <div class='profileImageWrapper'>
                <img src="https://www.dropbox.com/s/vbc0rkbz8qq5wyv/patrick.jpg?raw=1" />
                <i class="fas fa-envelope-open-text"> ${isAdminStaffOrClient().email}</i>
                <span>${isAdminStaffOrClient().status}</span>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default ProfilePicture;
  