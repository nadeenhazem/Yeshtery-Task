import React, { useState,useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../stylling/Nabar-footer/Navbar-footer.css';
import { fetchdata ,deleteitem} from '../services/DataProcess';

function Cart(props) {
    const [Fetch,setFetch]=useState();
    let TotalPrice = 0
    useEffect(()=>{
        const getData =async()=>{
          const getAllData=await fetchdata()
          setFetch(getAllData)
          
        }        

        getData()
      },[])

    const Price = (Q, P) => {
        const sum = Q * P;
        TotalPrice += sum;
        localStorage.setItem("Counter", Fetch.length);
        console.log(Fetch.length)
        return sum
    }
    const Deleteitem=(id)=>{
        deleteitem(id);
        const CartNum =localStorage.getItem("Counter");
        localStorage.setItem("Counter", (parseInt(CartNum) -1));
        window.location.reload() 


    }
    return (


        <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton >
                <Offcanvas.Title />
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Offcanvas.Title id='Cart-Name'>
                    My Cart
                </Offcanvas.Title>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Navbar.Text id='Cart-summery'>
                        Cart Summary</Navbar.Text>{
                    
                    
                        Fetch==null?console.log('lazyLoading'):
                        Fetch.length===0?<Navbar.Text>You Have no items yet..</Navbar.Text>:
                        Fetch.map((item) => (
                            <div className='card 'id='Card-Cart'key={item.id} style={{marginBottom:'5%'}}>
                                
                                <div className='row'>
                                    <div className="col-md-3 col-lg-3">
                                    <img src={item.colorImg} alt='item img'className='Cart-img'/>

                                    </div>
                                    <div className="col-md-9 col-lg-9">
                                    <div className='Cart-name'>{item.name}</div>
                                <div>Quantity:{item.Quantity}</div>
                                <div className='Cart-Price'>{Price(item.Quantity, item.price)}
                                <span> LE</span> </div>
                                 <button className='Remove-btn'onClick={()=>Deleteitem(item.id)}>Remove</button>
                                 </div>
                                    </div>
                                
                                 

                              
                            

                            </div>
                        ))
                        
                    }
                    
                    <div className='total-price'>
                        Total: {TotalPrice} LE
                    </div>
                    <p>
                                    <button className='AddCart-btn' style={{fontSize:'smaller'}}>Review Cart</button>
                                    <button className='Pickup-btn'style={{fontSize:'smaller',float:'right'}}> Compelet Check out</button>

                                </p>
                </Nav>


            </Offcanvas.Body>
        </Navbar.Offcanvas>

    );
}

export default Cart;