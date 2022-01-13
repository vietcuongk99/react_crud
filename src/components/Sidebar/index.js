
// import { Row, Col, Button } from 'react-bootstrap';
import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from "react-router-dom";
import MenuComp from '../Menu';
function Sidebar() {
    const menu = [
      {
        key: 1,
        title: 'Dashboard',
        child: [
          {
            key: 2,
            title: 'Home',
            url: '/',
            icon: 'home'
          },
          {
            key: 3,
            title: 'User',
            url: 'user',
            icon: 'user'
          },
          {
            key: 4,
            title: 'Setting',
            url: '/setting',
            icon: 'cog'
          }
        ]
      }
    ]
    return (
        <div className='sidebar'>
          {/* <hr className='sidebar__divide'/> 
          <div className='sidebar__item'>
            <Link to='/'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon='home' /><span className='ml-3'>Home</span>
              </div>
            </Link>
          </div>
          <hr className='sidebar__divide'/> 
          <div className='sidebar__item'>
            <Link to='/user'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon='user' /><span className='ml-3'>User</span>
              </div>
            </Link>
          </div>
          <div className='sidebar__item'>
            <Link to='/setting'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon='cog' /><span className='ml-3'>Setting</span>
              </div>
            </Link>
          </div> */}
          <MenuComp menu={menu} />
        </div>
    )
}

export default Sidebar;