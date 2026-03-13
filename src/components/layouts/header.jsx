import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../layouts/header.css'  
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from '../../assets/images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  } from 'reactstrap';

const Header = ({cartItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="gap"></div>
       <Navbar className="header" expand='md'>
          <div>
            <NavbarBrand><Link to='/'><img className='logo' src={Logo} alt='1'/></Link></NavbarBrand>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="header-links" navbar>
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to ='/about'>About</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to='/shop'>Shop</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to='/cart' >
                          <AiOutlineShoppingCart className='cartlogo' />
                          <span className='cart-length'>
                            {cartItems.length === 0 ? "" : cartItems.length}
                          </span>
                        </Link>
                      </li>
                    </ul>
                    
                  </Nav>
                </Collapse>
             </Navbar>
  </>     
  )
}

export default Header