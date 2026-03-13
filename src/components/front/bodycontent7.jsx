import React from 'react'
import Image1 from '../../images/floating_burger_02.png'
import Image2 from '../../images/reviews_01.png'
import Image3 from '../../images/reviews_02.png'
import Image4 from '../../images/reviews_03.png'
import Image5 from '../../images/reviews_04.png'

const bodycontent7 = () => {
  return (
    <div className='content7bg'>
        <div className='content7banner'>  
                <p className='content7txt'>Reviews</p>
                <img className='content7img' src={Image1} alt='1'></img>
         </div>
         <div className='content7row1'>
            <img className='review1' src={Image2} alt='1' width='500px' ></img>
            <span className='content7txt1' >"I don't remember a <br/> single mouthful I didn't <br/> enjoy!"</span>
         </div>
         <div className='content7row1'>
            <div className='content7txt2' >"Pretty impressive! Legit <br></br> taste of burgers!!!"</div>
            <img className='review2' src={Image3} width='500px' alt='1' ></img>
        </div>
        <div className='content7row1'>
            <img className='review3' src={Image4} width='500px' alt='1'></img>
            <span className='content7txt3'>"Eatsy burgers are some <br></br>of the most tastiest <br></br> burgers I've had!"</span>
        </div>
            <div className='content7row1'>
            <span className='content7txt4'>"Awesome service and <br></br> even better burgers!"</span>
            <img className='review4' src={Image5} width='500px' alt='1'></img>
        </div> 
    </div>
  )
}
export default bodycontent7
