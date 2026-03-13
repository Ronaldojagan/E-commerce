import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import Products from '../pages/shop';
import Cart from '../pages/cart';

const AppRoutes = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home handleAddProduct={handleAddProduct} />} />
        <Route path="shop" element={<Products handleAddProduct={handleAddProduct} />} />
        <Route path='about'element={<About />} />
        <Route path="cart" element={<Cart cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;