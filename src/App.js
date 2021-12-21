import './App.scss';
import './assets/style.scss'
import Sidebar from './components/Sidebar/index';
import Home from './pages/Home/index';
import User from './pages/User/index';
import Setting from './pages/Setting/index';
import './fontawesome.js'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState(3)

  useEffect(() => {
    console.log('Mounted or updated!')
  })

  useEffect(() => {
    console.log('State của App thay đổi')
    return () => {
        console.log('destroy component')
    }
  }, [users])

  useEffect(() => {
    return () => {
        console.log('Unmounted')
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <div className='d-flex'>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home title='Dashboard' users={users}/>} />
            <Route exact path="/user" element={<User title='User' setUsers={setUsers} users={users}/> } />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
