// import logo from './logo.svg';
import './App.css';
// import User from './User'
// import {useState} from 'react'
import Sidebar from './components/Sidebar/index';

function App() {

  // const [age, setAge] = useState(22)

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Tuổi: {age}</span>
        <User name="cuong viet" age={age} update={newAge => setAge(newAge)} />
      </header> */}
      <Sidebar />
    </div>
  );
}

export default App;
