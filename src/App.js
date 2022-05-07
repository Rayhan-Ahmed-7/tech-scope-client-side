import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import ProductDetails from './components/Home/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import ManageProducts from './components/ManageProducts/ManageProducts';
import PasswordReset from './components/PasswordReset/PasswordReset';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/password-reset' element={<PasswordReset></PasswordReset>}></Route>
      </Routes>
    </div>
  );
}

export default App;
