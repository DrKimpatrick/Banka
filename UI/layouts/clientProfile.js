import AccountHistory from '../components/clientDashboard/accountHistory.js';
export let ClientProfile = {
    render : () => {
        let view =  /*html*/`
        <div class='profileWrapper'>
            ${AccountHistory.render()}
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
export default ClientProfile;
