const AccountNavBar = {
    render : () => {
        let view =  /*html*/`
        <div class='accountNavWrapper'>
            <button id="creditDebitBtn">Credit / Debit</button>
            <button id="deactivateBtn">Deactivate acount</button>
            <button id='deleteButton'>Delete account</button>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountNavBar;
