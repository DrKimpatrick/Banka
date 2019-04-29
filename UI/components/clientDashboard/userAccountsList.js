
const UserAccountsList = {
    render : () => {
        const view =  /*html*/`
        <div class='accountListWrapper'>
            <span class='accountListHeader'>User accounts</span>
            <table id="customerTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Register Date</th>
                        <th>Account Number</th>
                        <th>Account Type</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Savings</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Current</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Savings</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Current</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Loan</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Savings</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Current</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Loan</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Savings</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Current</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Savings</td>
                        <td><a><button onclick="window.location.href='#/useraccountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    
                </tbody>     
        </table>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default UserAccountsList;
  