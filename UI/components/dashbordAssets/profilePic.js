
const ProfilePicture = {
    render : () => {
        let view =  /*html*/`
            <div class='profileImageWrapper'>
                <img src='../../images/patrick.jpg'/>
                <i class="fas fa-envelope-open-text"> dr.kimpatrick@gmail.com</i>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default ProfilePicture;
  