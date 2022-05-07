import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import ProductDetails from './components/Home/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MyProducts from './components/MyProducts/MyProducts';
import NotFound from './components/NotFound/NotFound';
import PasswordReset from './components/PasswordReset/PasswordReset';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Shared/Footer/Footer';

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
        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/myproducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/password-reset' element={<PasswordReset></PasswordReset>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
