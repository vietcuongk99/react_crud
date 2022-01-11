import UserTable from '../../components/UserTable/index';
import userService from '../../services/user';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import CustomModal from './../../components/Modal/index';
function User (props) {
  
    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [currentUser, setCurrentUser] = useState({firstName: '', lastName: '', userName: ''})
 
    const createUser = (user) => {
      userService.addUser(user).then(res => {
        console.log(res)
        if (res.status === 200 || res.status === 201) {
          getUser()
          setShowModal(false)
        }
      })
    }

    const updateUser = (id, user) => {
      console.log(id)
      userService.editUser(id, user).then(res => {
        console.log(res)
        if (res.status === 200 || res.status === 201) {
          getUser()
          setShowModal(false)
        }
      })
    }

    const addUser = () => {
      setSubmitStatus('create')
      setCurrentUser({firstName: '', lastName: '', userName: ''})
      setShowModal(true)
    }

    const submitUser = (user) => {
      switch (submitStatus) {
        case 'create':
          createUser(user)
          break
        case 'update':
          updateUser(currentUser.id, user)
          break
        default:
      }
    }

    const getUser = () => {
      userService.getUser().then(res => {
        setUsers(res.data)
      })
    }

    useEffect(() => {
      console.log('Mounting')
      getUser()
    }, [])

    return (
        <div className='main-content'>
          <div className='header mb-3'>
            <div className='header__title'>
              {props.title}
            </div>
            <div className='header__action'>
              <button className='custom-btn custom-btn-sm custom-btn-primary' onClick={addUser}>
               <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className='custom-btn custom-btn-sm custom-btn-primary' onClick={getUser}>
               <FontAwesomeIcon icon={faSyncAlt} />
              </button>
            </div>
          </div>
          <div className='content shadow'>
            <UserTable users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} setSubmitStatus={setSubmitStatus} toggleModal={setShowModal}/>
          </div>
          <CustomModal
            user={currentUser}
            show={showModal}
            toggle={setShowModal}
            setCurrentUser={setCurrentUser}
            submit={submitUser} />
        </div>
    )
}

export default User