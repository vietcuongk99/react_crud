import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function UserItem (props) {
	return (
		<tr>
      <td>{props.user.id}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.userName}</td>
			<td>
				<button className='custom-btn custom-btn-sm custom-btn-primary' onClick={() => props.edit(props.user)}>
          <FontAwesomeIcon icon={faPen} />
        </button>
				<button className='custom-btn custom-btn-sm custom-outline-btn-primary' onClick={() => props.delete(props.user)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
			</td>
    </tr>
	)
}

export default UserItem