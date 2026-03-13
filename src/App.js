import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/header';
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init()

const App = () => {
  
  const [cartItems,setCartItems] = useState([]);
  
  const handleAddProduct = (product) =>{
    const ProductExist= cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      alert("This product is already in this cart")
      setCartItems(
        cartItems.map((item) =>
          
           item.id === product.id
         ? {...ProductExist,quantity: ProductExist.quantity + 1}
          : item
          
        )
      );
      }else{
        setCartItems([...cartItems, {...product,quantity: 1}]);
      }
    
  };
  const handleRemoveProduct =(product) =>{
    const ProductExist=cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
      cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1} : item)
      )
    }
  }
  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return (
    <>
  <div>
    <Router basename="/E-commerce">
      <Header cartItems={cartItems} />
      <AppRoutes
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </Router>
  </div>
    </>
  );

}

export default App;
