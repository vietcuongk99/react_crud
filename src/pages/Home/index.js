// import '../../assets/style.scss'
import Dashboard from './../../components/Dashboard/index';

function Home (props) {
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