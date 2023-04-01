import '../stylling/Nabar-footer/Navbar-footer.css';
import React from 'react';
 import { BsHeart, BsPerson, BsSearch } from 'react-icons/bs';
 import brand from '../images/adidaslogo.png';
 import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cart from './Cart';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 import { IoBasketOutline } from 'react-icons/io5';

function CartNav(props) {
   
const CartNum =localStorage.getItem("Counter");

    return (
       <section className='Sec-Nav-section'>
        <div className='row' style={{width:'100%'}}>
        <div className="col-md-4 col-lg-4  d-md-block ">
        <InputGroup>
        <InputGroup.Text id='Nav-Search-icon'>
            <BsSearch className='Nav-Search-icon'/>
        </InputGroup.Text>
        <Form.Control placeholder="Search" id='Nav-Search'/>
      </InputGroup>
        </div>
        <div className="col-md-4 col-lg-4  d-md-block " style={{textAlign:'center'}}>
            <img src={brand} className='Sec-nav-img' alt='Brand'/>
        </div>

        <div className="col-md-4 col-lg-4  d-md-block " >
        <div className='row'>
        <div className="col-md-4 col-lg-4  d-md-block ">
        <Navbar  expand={false} >
        <Container  >
           
        <Navbar.Toggle id='Sec-Nav-Menu'>
        <div>
            <IoBasketOutline className='Cart-icon'>
                
            </IoBasketOutline>
            <span className='cart-number'>{CartNum}</span>
            <span>Cart</span>
            </div>
        </Navbar.Toggle>

       <Cart />
       </Container>
</Navbar>
            </div> 
        <div className="col-md-4 col-lg-4 Sec-Nav-icons" > 
        <div><BsHeart/>Wishlist</div></div> 
        <div className="col-md-4 col-lg-4 Sec-Nav-icons">
            <div><BsPerson/>Login</div></div> 

        </div>
        </div>
        </div>
       </section>
    );
}

export default CartNav;