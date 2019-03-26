const AccountNavBar = {
    render : () => {
        let view =  /*html*/`
        <div class='accountNavWrapper'>
            <span>Deactivate acount</span>
            <span>Activate account</span>
            <span>Delete account</span>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountNavBar;
