import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
