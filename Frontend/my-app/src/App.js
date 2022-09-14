import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Product from "./Pages/ProductSlider/product";
import Sofachairs from './Pages/Category/Sofachairs'
import Lighting from "./Pages/Category/Lighting";
import Garden from "./Pages/Category/Garden";
import Dinning from "./Pages/Category/Dinning";
import Decor from "./Pages/Category/Decor";
import Cart from "./Pages/Cart/Cart"
import UserProfile from "./Pages/UserProfile";
import SpectatorNavbar from './Pages/Navbar/SpectatorNavbar';
import UserNavbar from './Pages/Navbar/UserNavbar';
import AdminNavbar from './Pages/Navbar/AdminNavbar';
import CardProfile from './Pages/Navbar/Profile';
import Footer from '../src/Pages/Navbar/Footer';
import AboutInfo from './Pages/About';
import SalesTable from './Pages/Sales/Sales';
import Stock from './Pages/Stocks/Stock';
import UserDashBoard from "./Pages/Dashboard/UserDashBoard";
import NoMatch from "./Pages/NoMatch";
import WishList from "./Pages/WishList/WishListItem";
import SingleProduct from './Pages/ProductSlider/SingleProduct';
import NewArrivals from './Pages/Category/NewArrivals';
import Dashboard from './Pages/admin/Dashboard';
import Analytics from './Pages/admin/Analytics';
import Settings from './Pages/admin/Settings';
import Contact from './Pages/Contact/Contact';
import Email from './Pages/Stocks/Email';
import EditProduct from "./Pages/admin/CRUD-Product/edit";
import CreateProduct from "./Pages/admin/CRUD-Product/create";
import ProductDetails from './Pages/admin/CRUD-Product/productDetails';
import UserDetails from './Pages/admin/CRUD-User/Userdetails';
import CreateUser from './Pages/admin/CRUD-User/createUser';
import EditUser from './Pages/admin/CRUD-User/Edituser';
import CsvReader from './Pages/admin/Bulk/bulk';
import Admin from './Pages/admin/Admin';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
     

  return (
    <div>
      <BrowserRouter>
        <UserNavbar />     

        <Routes>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path='/' element={<UserDashBoard />} /> 
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/Sofachairs" element={<Sofachairs></Sofachairs>}></Route>
          <Route path="/Lighting" element={<Lighting></Lighting>}></Route>
          <Route path="/Garden" element={<Garden></Garden>}></Route>
          <Route path="/Dinning" element={<Dinning></Dinning>}></Route>
          <Route path="/Decor" element={<Decor></Decor>}></Route>
          <Route path="/new-arrivals" element={<NewArrivals/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/profile" element={<CardProfile />} />
          <Route path="/about" element={<AboutInfo />} />

          <Route path='/admin' element={<Admin/>}/>
          <Route path="/sales" element={<SalesTable />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/email-send" element={<Email />} />
          <Route path="/SingleProduct/:_id" element={<SingleProduct/>}/>
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/settings' element={<Settings />} />

          <Route path='/product-detail' element={<ProductDetails />} />
          <Route path='create' element={<CreateProduct></CreateProduct>}></Route>
          <Route path="edit/:_id" element={<EditProduct></EditProduct>}></Route>

          <Route path='userdetails' element={<UserDetails />}/>
          <Route path='createuser' element={<CreateUser/>}/>
          <Route path='edituser/:_id' element={<EditUser/>}/>
          <Route path='bulk' element={<CsvReader></CsvReader>} />
          
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
