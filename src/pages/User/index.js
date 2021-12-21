import UserTable from '../../components/UserTable/index';
function User (props) {
    return (
        <div className='main-content'>
          <div className='header mb-3'>
            <div className='header__title'>
              {props.title}
            </div>
            <div className='header__action'>
              <button className='custom-btn custom-btn-sm custom-btn-primary' onClick={() => props.setUsers(props.users + 1)}>Add</button>
            </div>
          </div>
          <div className='content shadow'>
            <UserTable />
          </div>
        </div>
    )
}

export default User