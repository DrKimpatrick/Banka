
const AccountHistory = {
    render : () => {
        let view =  /*html*/`
        <div class='accountHistoryWrapper'>
            <div class='accountProfile'>
                <img src="https://www.dropbox.com/s/vbc0rkbz8qq5wyv/patrick.jpg?raw=1"/>
                <div class='profileNames'>
                    <span><b>Email:</b>dr.kimpatrick@gmail.com</span>
                    <span><b>Account NO:</b> #37746646646</span>
                </div>
            </div>
            <span class='accountHeader'>Account history</span>
            <table id="customerTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Branch</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>26th-march-2019</td>
                        <td>Namungoona</td>
                        <td>20,000</td>
                        <td></td>
                        <td>20,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>30th-march-2019</td>
                        <td>Kamwookya</td>
                        <td></td>
                        <td>10,000</td>
                        <td>10,000</td>
                    </tr>
                    
                </tbody>     
        </table>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountHistory;
  