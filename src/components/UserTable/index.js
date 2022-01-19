import { Table } from 'react-bootstrap';
import UserItem from './UserItem';
import userService from './../../services/user';
import { useDispatch } from "react-redux";
import { decrement } from "../../actions/counter";
function UserTable(props) {

  const dispatch = useDispatch();

  const editUser = (user) => {
    let {id, firstName, lastName, userName} = {...user}
    props.setCurrentUser({id, firstName, lastName, userName})
    props.setSubmitStatus('update')
    props.toggleModal(true)
  }

  const deleteUser = (user) => {
    userService.deleteUser(user.id).then(() => {
      userService.getUser().then(res => {
        props.setUsers(res.data)
        dispatch(decrement(1))
      })
    })
  }
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {props.users.map(user =>
                    (<UserItem key={user.id} user={user} delete={deleteUser} edit={editUser} />)
                  )}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable;