import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiMenuAlt1 ,HiOutlineShoppingCart,HiOutlineLocationMarker} from 'react-icons/hi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {FiPhoneCall} from 'react-icons/fi';
function MainNav(props) {
    return (
        <section className='Nav-top-section' >
            <div className='row' id='Nav-top-mainDiv'style={{width:'100%'}}>


                <div className="col-md-4 col-lg-4  d-md-block "  >
                    <Navbar  expand={false}>
                        <Container fluid >
                        <Navbar.Toggle id='Nav-top-Menu'>
                            <HiMenuAlt1 />
                        </Navbar.Toggle>
                        <h4 id='Nav-top-Name'>Yeshtery</h4>
                        <Navbar.Offcanvas placement="start">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='Nav-top-Name'>
                                    Yeshtery
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <hr/>
                                    <Nav.Link href="Men">Men</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="Women">Women</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="Kids">Kids</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="Electronic">Electronic</Nav.Link>
                                    <hr/>
                                  
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
            <div className="col-md-4 col-lg-4  d-md-block " id='Nav-Top-Valentines'>
            <IoIosArrowBack/>
            <span> Valentine's Day Offers Buy Two Get One Free <span className='Nav-Top-Shop'>Shop Now </span></span>
                <IoIosArrowForward/>
               
            </div>
            <div className="col-md-4 col-lg-4 d-md-block " id='Nav-Top-Contact'>
                <div><FiPhoneCall/> Contact us</div>
                <div><HiOutlineShoppingCart/> Track Order</div>
                <div><HiOutlineLocationMarker/> Find A Store</div>
            </div>




        </div>
        </section>
   
    );
}

export default MainNav;