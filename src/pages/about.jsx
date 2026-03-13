import '../assets/css/about.css'
import Bgimage from '../assets/images/hero_about_us.jpg'
import Wave from '../assets/images/red_bottom_wave_01.png'
import Icon1 from '../assets/images/PngItem_1746259.png'
import Icon2 from '../assets/images/package.jpg'
import Icon3 from '../assets/images/deleveryicon.jpg'
import Wave2 from '../assets/images/red_top_wave_01.png'
import Lady from '../assets/images/inner_image_02.jpg'
import Patty from '../assets/images/inner_image_03.jpg'
import Burger from '../assets/images/inner_image_04.jpg'
import Stayhome from '../assets/images/stay_home.png'
import { Container, Row, Col } from 'reactstrap';
const about = () => {
  return (
    <div>
        <div className='main'>
            <div className="bannering">
                <img className='bg-image' src={Bgimage} alt='1'></img>
            </div>
            <div className="banner-text">
                <p className='banner-text-1'>Crazy good burgers</p>
                <p className='banner-text-2'>We strive to elevate the burger experience</p>
            </div>
            <div className="background-wave">
                <img className='wave-image' src={Wave} alt='1'/>
            </div>


            <div className="banner-content">
                <p className='banner-content'>Flipping Since ‘94</p>    

                <div className="banner-content-card">
                    <div className="card-1">
                        <img className='icon-1' src={Icon1} alt='1' />
                        <p className='card-1-text'>Unique Taste</p>
                        <p className='card-1-p'>A burger is more than just a, it is a wish fulfilled.</p>
                    </div>
                    <div className="card-1">
                        <img className='icon-1' src={Icon2} alt='1' />
                        <p className='card-1-text'>Certified Farm</p>
                        <p className='card-1-p'>The last time you had a burger was too long ago.</p>
                    </div>
                    <div className="card-1">
                        <img className='icon-1' src={Icon3} alt='1' />
                        <p className='card-1-text'>Home Delivery</p>
                        <p className='card-1-p'>Why are you still reading this - go get a burger!</p>
                    </div>

                </div>

            </div>
           

            <div className="banner-content-2">
            <div className="bottom-wave">
                <img className='red-wave' src={Wave2} alt='2' />
            </div>
                <p className='banner-content-2-text'>About Us</p>

            <div className='banner-content-cover'>
                <Container className='Container'>
                        <Row>
                            <Col xs="12" sm="6" md="4" lg="4">
                            <div>
                                <img className='banner-content-cover-img'  src={Lady} alt='3' />
                            </div>
                            </Col>
                            <Col xs="12" sm="6" md="8" lg="8">
                                <p className='banner-content-cover-text'> Our <br></br> Philosophy </p>
                                
                                <Row className='banner-content-cover-inner-conetnt'>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                       <p className='inner-text1'>A relaxed burger joint, utilising local ingredients to make delicious burgers, sides, and more</p>
                                    </Col>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                        <p className='inner-text2'>We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread.
                                        <br></br><br></br>From smashed patties at Shake Shack to Glamburgers at Honky Tonk, there’s a little something for everyone. Some burgers are humble, and some are ostentatious, and you just have to try them all to figure out what you want. Feel free to contact us.</p>
                                    </Col>
                                </Row>
                            </Col>     
                        </Row> 


                        <Row>
                            <Col xs="12" sm="6" md="4" lg="4">
                            <div>
                                <img className='banner-content-cover-img'  src={Patty} alt='3' />
                            </div>
                            </Col>
                            <Col xs="12" sm="6" md="8" lg="8">
                                <p className='banner-content-cover-text'> Local ingredients </p>
                                
                                <Row className='banner-content-cover-inner-conetnt'>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                       <p className='inner-text1'>We strive to elevate the burger experience to its top shelf – because you and your burger deserve better eating style</p>
                                    </Col>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                        <p className='inner-text2'>Whether you’re a ketchup and mustard loyalist or you prefer house sauce to no sauce, you can agree that every cheeseburger has it’s own special flair. Top tip: house sauce begs to be ordered on the side for fry-dipping purposes.
                                        <br></br><br></br>
                                        The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef. Any burger lover worth their salt knows the best patty is comprised of ground chuck and brisket.</p>
                                    </Col>
                                </Row>
                            </Col>     
                        </Row>

                         <Row>
                            <Col xs="12" sm="6" md="4" lg="4">
                            <div>
                                <img className='banner-content-cover-img'  src={Burger} alt='3' />
                            </div>
                            </Col>
                            <Col xs="12" sm="6" md="8" lg="8">
                                <div className='stay'><img className='stayhome' src={Stayhome} alt='2' /></div>
                                <p className='banner-content-cover-text'> Local ingredients </p>
                                
                                <Row className='banner-content-cover-inner-conetnt'>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                       <p className='inner-text1'>We strive to elevate the burger experience to its top shelf – because you and your burger deserve better eating style</p>
                                    </Col>
                                    <Col xs="12" sm="6" md="4" lg="4">
                                        <p className='inner-text2'>Whether you’re a ketchup and mustard loyalist or you prefer house sauce to no sauce, you can agree that every cheeseburger has it’s own special flair. Top tip: house sauce begs to be ordered on the side for fry-dipping purposes.
                                        <br></br><br></br>
                                        The cheese melts on the burger and in your mouth, perfectly complementing the medium-rare beef. Any burger lover worth their salt knows the best patty is comprised of ground chuck and brisket.</p>
                                    </Col>
                                </Row>
                            </Col>     
                        </Row>    
                </Container>        
            </div>
             
             </div>
            
        </div>
       

    </div>
  )
}
export default about                 
                        
                



             


 






           