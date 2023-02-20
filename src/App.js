import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <div>
          <Link to="/login">login</Link>
        </div>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
