import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Home from './components/Home'
import LoginPage from './components/LoginPage';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import Owner from './components/Owner';
import Productregister from './components/Productregister';
import ProductPage from './components/ProdutPage';
import Userdetail from './components/Userdetail'

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <ToastContainer position="top-center"/>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path='/addContact' element={<LoginPage />} />
      <Route exact path='/login' element={<Userdetail />} />
      <Route exact path='/loginowner' element={<Owner />} />
      <Route exact path='/loginAdmin' element={<LoginAdmin />} />
      <Route exact path='/login/proucts/log' element={<Productregister />} />
      <Route exact path='/productpage' element={<ProductPage />} />
      <Route exact path='/home' element={<Home />} />

    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
