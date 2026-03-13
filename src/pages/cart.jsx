import React from 'react'
import '../assets/css/cart.css'
import Image from '../assets/images/featured_image_shop.jpg'
import Image2 from '../assets/images/red_bottom_wave_01.png'
import { Link } from 'react-router-dom'
import { Container,Col,Row} from 'reactstrap';
const cart = ({cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance
}) => {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0);
  return (
    <div>
        <div className="cart-items">
        <img className="shop-1" src={Image} alt="1" />
                <div className="cover-text">
                    <p className="shop-cover-text">Your Shoping Cart</p>
                    <p className="shop-cover-text2">Start your order and enjoy the tastiest burgers</p> 
                </div>
                <img className="shop-2" src={Image2} alt="2" /> 
            
            
            {cartItems.length === 0 && (
                <div className='cart-items-empty'> <h3> No items are added</h3><br></br>
                 <Link to='/Shop'><button href="/shop" className="returnbtn">Return To Shop</button></Link></div>
            )}
            
               
           
            <div className='cartbg'>
                    <div className="productlist">
                                <p className='l1'>product</p>
                                <p className='l2'>price</p>
                                <p className='l3'>Quantity</p>
                            
                    </div>
                <Container className='cont'>
                    <Row>
                       
                            {cartItems.map((item)=>(
                            <div key={item.id} className='cart-item-list'>
                                <Col  lg="2.5">      
                                     <img className='cart-items-image'src={item.Img}  alt={item.name} /> 
                                </Col> 
                                <Col lg="1">         
                                    <div className="cart-item-name">
                                        {item.name}
                                    </div>
                                 </Col>    
                                 <Col xs="4"  lg="3">      
                                    <div className='cart-adding'>
                                            <button className='cart-items-remove' onClick={() =>
                                            handleRemoveProduct(item)}>-</button>
                                            <button className='cart-items-add' onClick={() =>
                                                handleAddProduct(item)}>+</button>
                                    </div>
                                 </Col>

                                 <Col xs="2"  lg="3">       
                                    <div className="cart-item-price">
                                            ${item.price}
                                    </div>
                                  </Col>  
                                  <Col  lg="2">    
                                    <div className="item-quantity">
                                            {item.quantity}
                                     </div>
                                   </Col> 
                            </div> 
                        ) )}
                    </Row>
               </Container> 
                
                     <div className="clear-cart">{cartItems.length >=1 && (
                        <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
                     )}
                    </div>
                    <div className="cart-item-total-price-name">{cartItems.length >=1 && (
                        <span className='cart-item-total-price'> Total Price = $<span className='totalprice'>{totalPrice}</span></span> 
                    )}
                    </div> 
                
            </div> 
        </div>
    </div>

  )
}

export default cart