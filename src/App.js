import './App.scss';
import './assets/style.scss'
import Sidebar from './components/Sidebar/index';
import Home from './pages/Home/index';
import User from './pages/User/index';
import Setting from './pages/Setting/index';
import './fontawesome.js'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from "react-redux";

function App() {

  const [users] = useState(3)
  const counter = useSelector((state) => state.counter)
  const number = useSelector((state) => state.number)

  return (
    <Router>
      <div className="App">
        <div><span>{number}</span>
        </div>
        <div className='d-flex'>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home title='Dashboard' users={counter}/>} />
            <Route exact path="/user" element={<User title='User' users={users}/> } />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
