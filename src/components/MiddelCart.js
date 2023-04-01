import React, { Suspense, useState } from 'react';
import '../stylling/Middel-similar/Middel-similar.css';
import ImagesCart from './ImagesCart';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { DataofItem} from './Data';
import { AddToCart} from '../services/DataProcess';
function MiddelCart(props) {
    const [Size, setSize] = useState('Large');
    const [color, setcolor] = useState('red');
    const [colorImg, setcolorImg] = useState('https://i.ibb.co/4WSws5Q/itemimg3.jpg');
    let [num, setNum] = useState(1);
    const CartNum =localStorage.getItem("Counter");
    let incNum = () => {
        if (num < 20) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    const AddCart = ( name, price, size, Quantity, color,colorImg) => {
        localStorage.setItem("Counter", (parseInt(CartNum) +1));
        const PostData={
            name,
            price,
            size,
            Quantity,
            color,
            colorImg
        }
        AddToCart(PostData)
        setInterval(() => {
            window.location.reload() ;
          }, 1000);
       
    }
    const LazyComponent = React.lazy(()=>import('./SimilarProduct'))

    return (
        <>
        <section >
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-11 " style={{ marginTop: '-1%' }} >
                        <div className="row ">
                            <ImagesCart />
                            <div className="col-md-6 col-lg-5  d-md-block images" >

                                <img src={DataofItem.brand} className='brand-img' alt='brand-img' />
                                <h5>{DataofItem.name}</h5>
                                <p className='Category'>{DataofItem.category}</p>
                                <div className='stars-container'>
                                    <span>
                                        {
                                            DataofItem.rate > 20 && <>
                                                {
                                                    [...Array(4)].map((elementInArray, index) => (
                                                        <AiFillStar className='stars-icon-fill' key={index} />
                                                    ))}
                                                <AiOutlineStar className='stars-icon-outline' />
                                            </>
                                        }</span>
                                    <h6> 4.9 of 5 </h6>
                                    <span> {DataofItem.rate} Rates</span>
                                </div>
                                <p className='Price'>{DataofItem.price}<span>  LE</span> </p>
                                <hr />
                                <div>
                                    <h5>Size:{Size}</h5>
                                    {DataofItem.size.map((oneSize) =>
                                        <p key={oneSize} className={oneSize === Size ? 'sizeChoosed' : 'Size'} onClick={() => setSize(oneSize)}>{oneSize}</p>)

                                    }
                                </div>
                                <hr />
                                <div>
                                    <h5>Color : {color} </h5>
                                    {
                                        DataofItem.color.map((onecolor) =>

                                            <img src={onecolor.img} key={onecolor.name} className={onecolor.name === color ? 'colorChoosed' : 'Color'}
                                                onClick={() => {
                                                    setcolor(onecolor.name);
                                                    setcolorImg(onecolor.img)
                                                }} alt='color-img' />

                                        )



                                    }</div>
                                <hr />

                                <div>
                                    <h5>Quantity</h5>
                                    <InputGroup className="mb-3" style={{ position: 'relative' }}>
                                        <InputGroup.Text id='Q-decrese'
                                            onClick={decNum}>-</InputGroup.Text>
                                        <Form.Control type='number'
                                            value={num}
                                            onChange={handleChange}
                                            id='Q-input' />
                                        <InputGroup.Text id='Q-increse'
                                            onClick={incNum}>+</InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <p >
                                    <button className='AddCart-btn' onClick={() =>
                                        AddCart(DataofItem.name, DataofItem.price, Size, num, color, colorImg)}>Add To Cart</button>
                                    <button className='Pickup-btn'> Pickup From Store</button>

                                </p>

                            </div>




                        </div>

                    </div>
                </div>
            </div>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent/>
        </Suspense>
        </>
    );
}

export default MiddelCart;