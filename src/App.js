import React from 'react';
import Product from "./Pages/Products";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Success from "./Pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList/:category" element={<ProductList />}/>
        <Route path="/Product/:id" element={<Product />}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login />} Navigate to="/Login" />
        <Route path="/register" Navigate to="/register" element={<Register />}/>
        <Route path="/Success" element={<Success />}/>
      </Routes>
    </Router>
  );
};

export default App;
