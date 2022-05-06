import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Inventory from './components/Home/Inventory/Inventory';
import Login from './components/Login/Login';
import PasswordReset from './components/PasswordReset/PasswordReset';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/password-reset' element={<PasswordReset></PasswordReset>}></Route>
      </Routes>
    </div>
  );
}

export default App;
