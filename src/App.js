import MiddelCart from "./components/MiddelCart";
import MainNav from "./components/MainNav";
import CartNav from "./components/CartNav";
// import SimilarProduct from "./components/SimilarProduct";
import Footer from './components/Footer';
import React from "react";
function App() {

  return (
  <>
  <MainNav/>
  <CartNav/>
  <hr/>
  <MiddelCart/>
  {/* <SimilarProduct/> */}
<Footer/>
  </>
  );
}

export default App;
