
export let BlackTheme = {
    render : () => {
        let view =  /*html*/`
            <div class='bankLogoWrapper'>
                <i class="fas fa-university fa-2x"></i>
                <h2>Crest Bank</h2>
            </div>

            <div class='profileImageWrapper'>
                <img src='../../images/patrick.jpg'/>
                <span>dr.kimpatrick</span>
                <i class="fas fa-envelope-open-text"> dr.kimpatrick@gmail.com</i>
            </div>

            <div class='navigation'>
                <a href='#/dashboard' class='navWrapper' id='profile'>
                    <i class="far fa-user-circle fa-2x"></i>
                    <span>Profile</span>
                </a>
                <a href='#/account' class='navWrapper' id='profile'>
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
  
  export default BlackTheme;
  