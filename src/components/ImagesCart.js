import React, { useState } from 'react';
import '../stylling/Middel-similar/Middel-similar.css';
import img1 from '../images/itemimg1.jpg';
import img2 from '../images/itemimg2.jpg';
import img3 from '../images/itemimg3.jpg';
import img4 from '../images/itemimg4.jpg';
import img5 from '../images/itemimg5.jpg';
import img6 from '../images/itemimg6.jpg';
import img7 from '../images/itemimg7.jpg';
import img8 from '../images/itemimg8.jpg';
import img9 from '../images/itemimg9.jpg';
import img10 from '../images/itemimg10.jpg';
import img11 from '../images/itemimg11.jpg';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
function ImagesCart(props) {
    const GroupOfImg = [img1, img2, img3, img4, img5,img6,img7,img8,img2,img4,img6,img9,img7,img10,img1,img11];
    const [imgDisplay, setImgDisplay] = useState(img1);
    const [startimg, setStartimg] = useState(0);
    const [endimg, setEndimg] = useState(4);
    const Displayimg = (oneimg) => {
        setImgDisplay(oneimg)
    }
    const changeimg = (parameter) => {
        setStartimg(startimg => startimg + parameter)
        setEndimg(endimg => endimg + parameter)
        setImgDisplay(GroupOfImg[startimg + parameter])    
    }
    const returnimg=()=>{
        setStartimg(0)
        setEndimg(4) 
        setImgDisplay(GroupOfImg[startimg]) 
    }
    const Backimg = () => {
        startimg !== 0 && changeimg(-1)
        
       

    }
    const Nextimg = () => {
        endimg !== GroupOfImg.length ?

            changeimg(+1):returnimg()
           

    }
    return (
        <div className="col-md-6 col-lg-6  d-md-block data-image" >
            <img src={imgDisplay}
                alt="t-shirt" className="img-fluid main-img" />
            <IoIosArrowBack className='Arrow-icons' onClick={Backimg} />
            {
                
                GroupOfImg.slice(startimg, endimg).map((oneitem) =>
                    <img src={oneitem} key={oneitem}
                        alt="t-shirt" className="img-fluid carousel-img" onClick={() => Displayimg(oneitem)} />
                )

            }
            <IoIosArrowForward className='Arrow-icons' onClick={Nextimg} />
        </div>
    );
}

export default ImagesCart;