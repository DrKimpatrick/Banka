
const AccountsList = {
    render : () => {
        let view =  /*html*/`
        <div class='accountListWrapper'>
            <span class='accountListHeader'>User accounts</span>
            <table id="customerTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Register Date</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Phone Number</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    
                </tbody>     
        </table>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountsList;
  