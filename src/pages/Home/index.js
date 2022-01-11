// import '../../assets/style.scss'
import Dashboard from './../../components/Dashboard/index';
import { useEffect } from 'react';
function Home (props) {
  useEffect(() => {
    console.log('Mounting')  
  })
  
  useEffect(() => {
    return () => {
      console.log('Unmounting')
      }
    }, [])
  
    return (
      <div className='main-content'>
        <div className='header mb-3'>
          <div className='header__title'>
            {props.title}
          </div>
        </div>
        <Dashboard totalUser={props.users}/>
      </div>
    )
}

export default Home;