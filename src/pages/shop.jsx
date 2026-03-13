import "../assets/css/shop.css";
import ProductItems from '../components/back/Data';
import Image from '../assets/images/featured_image_shop.jpg'
import Image2 from '../assets/images/cream_bottom_wave_01.png'
import { IoSearch } from "react-icons/io5";

const products =({handleAddProduct}) => {
    return(
        <>
        <div className="shopbg">
                <img className="shop-1" src={Image} alt="1" />
                <div className="cover-text">
                    <p className="shop-cover-text">Order And Enjoy</p>
                    <p className="shop-cover-text2">Start your order and enjoy the tastiest burgers</p> 
                </div>
                <img className="shop-2" src={Image2} alt="2" /> 
                <div className="shop-container">
                    <div className="shop-overalltext">
                        <p className="shop-text">Showing 1-9 of results</p>
                        <form className="shop-form">
                            <select>
                                <option>Default sorting</option>
                                <option>Sort by Popularity</option>
                                <option>Sort by Avergae rating</option>
                                <option>Sort by latest</option>
                                <option>Sort by price: low to high </option>
                                <option>Sort by price: High to low </option>
                            </select>
                        </form>
                        <form>
                        <input type="text" className="s" placeholder="Looking For..." />
                        <button type="submit" className="shop-button"><IoSearch /></button>
                        </form>
                    </div>
                </div>       
                <div className="shop-product">
                    {ProductItems.map((productItem) =>(
                        <div className="box">
                            <img className="imgbox" src={productItem.Img} alt="1"></img>
                            <div className="details">
                                <h4 className="details-1">{productItem.name}</h4>
                                <h2 className="details-2">{productItem.Title}</h2>
                                <p className="details-3">{productItem.price}.00$</p>
                                <button className='addtocart' onClick={() => handleAddProduct(productItem)}>Add To Cart</button>                
                            </div>  
                        </div>
                    ))}
                </div>   
        </div>
        </>   
 )  
};

export default products;