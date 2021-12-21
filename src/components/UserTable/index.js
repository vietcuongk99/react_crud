
// import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
function UserTable(props) {

    // const [count, setCount] = useState(100)

    // useEffect(() => {
    //     console.log('State count thay đổi')
    //     return () => {
    //         console.log('destroy component')
    //     }
    // }, [count])

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Chris</td>
                    <td>Evan</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable;