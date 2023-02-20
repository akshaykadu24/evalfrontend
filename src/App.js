import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
        <div>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
          <Link to="/post">post</Link>
        </div>
        <Routes>
        <Route path='/post' element={<Post/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
