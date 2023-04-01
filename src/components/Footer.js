import React from 'react';
import facebook from '../images/face.png';
import linked from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import instgram from '../images/intg.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsSend} from'react-icons/bs';
import cash from '../images/cash.png';
import visa from '../images/visa.png';
import master from '../images/master.png'
function Footer(props) {
    return (
       
            <section style={{ backgroundColor: '#434242' }}>
                <div className="container py-6 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-9" style={{ color:'whitesmoke' }}>
                            <div className="row " style={{marginTop:'4%'}}>
                                <div className="col-md-6 col-lg-4  d-md-block" >
                                    <h1 className='logo-footer'>
                                        Yeshtery
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>

                                </div>
                                <div className="col-md-2 col-lg-2  d-md-block " >
                                <div className="hr-vl"></div>
                                </div>
                                <div className="col-md-6 col-lg-6  d-md-block " >
                                    <h6>Subscribe to our  newsletter</h6>
                                    <div className="row ">
                                        <div className="col-md-12 col-lg-12" >
                                            <InputGroup  style={{position:'relative'}}>
                                                <Form.Control
                                                    placeholder="Enter Your Mail"
                                                    id='subscribe'
                                                />
                                                <InputGroup.Text id="subscribe-btn">Subscribe <BsSend/>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                        <div className="col-md-6 col-lg-6  d-md-block " >
                                            
                                            <p>About us</p>
                                            <p>Contact us</p>
                                            <p>Track Order</p>
                                            <p>Terms & Conditions</p>
                                            <p>Privacy Ploicy</p>
                                            <p>Sell With Us</p>
                                            <p>Shipping And Returns</p>
                                        </div>
                                        <div className="col-md-2 col-lg-2  d-md-block "style={{ marginTop: '15%' }} >
                                <div className="hr-vl2"></div>
                                </div>

                                        <div className="col-md-4 col-lg-4  d-md-block " style={{ marginTop: '15%' }}>

                                            <p>
                                                <img src={facebook} className='footer-img' alt='img-footer' />
                                                /Yeshtery
                                            </p>
                                            <p>
                                                <img src={linked} className='footer-img' alt='img-footer' />
                                                /Yeshtery
                                            </p>
                                            <p>
                                                <img src={twitter} className='footer-img' alt='img-footer' />
                                                /Yeshtery
                                            </p>
                                            <p>
                                                <img src={instgram} className='footer-img' alt='img-footer' />
                                                /Yeshtery
                                            </p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <hr/>
                            <span>
                                @ 2021 yeshtery . all rights reserved
                            </span>
                            <span style={{marginLeft:'10%'}}>
                                <img src={cash} className='img-footer-cash' alt='cash'/>
                                <img src={visa} className='img-footer-cash'alt='cash'/>
                                <img src={master} className='img-footer-cash'alt='cash'/>
                            </span>

                        </div>
                    </div>
                </div>
            </section>

        
    );
}

export default Footer;