import React from 'react';
import Redwave from '../../assets/images/red_top_wave_01.png'
import Image from '../../assets/images/hero_footer.jpg'
import Image3 from '../../assets/images/footer_logo.png'
import Image4 from '../../assets/images/inner_instagram_01.jpg'
import Image5 from '../../assets/images/inner_instagram_02.jpg'
import Image6 from '../../assets/images/inner_instagram_03.jpg'
import Image7 from '../../assets/images/inner_instagram_04.jpg'
import Image8 from '../../assets/images/inner_instagram_05.jpg'
import Image9 from '../../assets/images/inner_instagram_06.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot,FaClock,} from "react-icons/fa6";
import { BiSolidShoppingBagAlt } from "react-icons/bi";


const Footer = () => {
  return (
   <div className='foot'> 

          <img src={Redwave} alt='1' className='redtop'></img>
          <img src={Image} alt='1' className="footer" />  
          <img className='footerimg1'src={Image3} alt='2'/>
          <h1 className='footertext1'>Stay informed about special offers</h1>
          <p className='footertext2'>Subscribe to the newsletter</p>
          <center> <form>
                <input className='form1'
                  type="email"
                  name="newsletter_email"
                  id="newsletter_email"
                  placeholder="Enter Your Email"
                />
                <input className='formbutton' type="button"  value="Subscribe" />
              </form> </center>
        <div className='footercontent'>  
          <ul>
            <p className='listtxt1'>LET'S GET TOGETHER </p>
            <li><FaLocationDot />&nbsp; 60 East 65th Street, NY</li>
            <li><FaClock /> &nbsp;Mon - Sat: 11AM - 11PM<br></br>
            Sun: 11AM - 08PM</li>
            <li> <BiSolidShoppingBagAlt /> &nbsp;Mon - Sat: 01PM - 10PM</li>
            <li><FaPhoneVolume /> &nbsp; 1-800-700-600</li>
          </ul>
         
          <ul>
            <p className='listtxt1'>ABOUT US </p>
            <li> our story</li>
            <li> Our Team</li>
            <li> Our Food</li>
            <li> Health Measures</li>
            <li> Job Opportunities</li>
          </ul>
          
          <ul>
            <p className='listtxt1'>QUICK MENU </p>
            <li>Beef Burgers</li>
            <li>Chicken Burgers</li>
            <li>Plant-Based Burgers</li>
            <li>Sides</li>
            <li>Drinks</li>
          </ul>
          <ul>
          <p className='listtxt1'>INSTAGRAM </p>
            <div className='innerinstagram'>
              <img className='log'src={Image4} alt='1'></img>
              <img className='log'src={Image5} alt='1'></img>
              <img className='log'src={Image6} alt='1'></img>
            </div>
            <div className='innerinstagram'>
              <img className='log'src={Image7} alt='1'></img>
              <img className='log'src={Image8} alt='1'></img>
              <img className='log'src={Image9} alt='1'></img>
            </div>
            
          </ul>
        

        </div> 
        <div className="socialmedia">
                      <button className='socialmediaicon1'><span ><FaFacebook size={30}  /></span></button>
                      <button className='socialmediaicon2'><span ><FaTwitter  size={30}  /></span></button>
                      <button className='socialmediaicon3'><span> <FaInstagram size={30} /> </span></button>
         </div>
         
     
    </div>
    
  );
};

export default Footer;