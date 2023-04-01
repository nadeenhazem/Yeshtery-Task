import React from 'react';
import '../stylling/Middel-similar/Middel-similar.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { SimilarData } from './Data';
function SimilarProduct(props) {
    return (
        <section>
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-11 " style={{ marginTop: '-1%' }} >
                        <div className="row similar-main-div">
                            <div className="col-md-12 col-lg-12 d-md-block" >
                                <h3>Similar Products </h3>
                                <p> You May Like these Products also</p>
                            </div>
                            {
                                SimilarData.map((Data)=>(
                                    <div className="col-md-3 col-lg-3  d-md-block" key={Data.id}>
                                    <div className='card similar-card'>
                                        <img src={Data.img} className='similar-img' alt='card-img' />
                                        <h6>{Data.name}</h6>
    
    
    
                                        <p style={{ display: 'inline-block' }}>
                                            <span className='similar-price'>{Data.price} <span>LE</span></span>
                                            <img src={Data.brand} className='brand' alt='brand' />
                                            <br />
                                            {Data.oldPrice!==null?<>
                                                <span className='main-price'>{Data.oldPrice}</span>
                                            <span className='offer'>{Data.discount}</span>
                                            </>:null}
                                            
    
                                        </p>
                                        <p style={{ margin: 'auto' }}> {
                                            [...Array(4)].map((elementInArray, index) => (
                                                <AiFillStar className='similar-stars-icon-fill' key={index} />
                                            ))}
                                            <AiOutlineStar className='similar-stars-icon-outline' />
                                            <span style={{ color: 'black' }}>4.2 of 5</span>
                                        </p>
                                        <div className='ship-info'>
                                            
                                            <span className='similar-from'>From:{Data.From} </span>
                                            {Data.To!==null&&<span >To: {Data.To}</span>}
                                            {Data.in!==null&&<span className='similar-in'>in: {Data.in}</span>}
                                            </div>
                                    </div>
                                </div>
                                ))
                            }
                           
                            <div className="col-md-3 col-lg-3 d-md-block" ></div>
                            <div className="col-md-3 col-lg-3 d-md-block" ></div>
                            <div className="col-md-3 col-lg-3 d-md-block" ></div>

                        </div></div></div></div>
        </section>
    );
}

export default SimilarProduct;