import styled from 'styled-components';
import Categories from './Categories';
import Cart from './Cart';
import React, {Outlet, useState, useEffect } from 'react';
import Header from './header';
import ProductDetail from './ProductDetails';
import ProductList from './ProductList';
import Offcanvasoverlay from './Offcanvasoverlay';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, BrowserRouter, useLocation } from 'react-router-dom';
import RegisterationForm from './RegisterationFrom';
import LoginForm from './LoginForm';
// import Navbar from './Navbar';
// import ChildmanagmentSystem from './ChildmanagmentSystem';
import AddressPayment from './AddressPayment';
import Checkout from './Checkout';
import KidsProductDetails from './KidsProdutDetails';
import WomenProductDetails from './WomenProductDetails';
import KidsProductList from './KidsProductList';
import WomenProductList from './WomenProductList';
import WomenCategories from './WomenCategories';
import KidsCategories from './KidsCategories';
import Deliveryaddress from './Deliveryaddress';
import Footer from './Footer';
import Wishlist from './Wishlist';

function Home() {
/*   const [hideCarousel, setHideCarousel] = useState(true);
   const location = useLocation();
 

  const updateHideCarousel = () => {
    const currentPath = location.pathname;
  
    if (
      currentPath === '/product-list' ||
      currentPath === '/cart' ||
      currentPath === '/product-detail' ||
      currentPath === '/registeration-form' ||
      currentPath === '/checkout' ||
      currentPath === '/loginform' ||
      currentPath === '/address-payment'
    ) {
      setHideCarousel(true);
    } else {
      setHideCarousel(false);
    }
  }; 
  

  const hideCarouselHandler = () => {
    setHideCarousel(true);
  };
  const navigate = useNavigate();

  const hideCarouselcomponent = () => {
    // Call this function when the image is clicked to navigate and hide the carousel
    navigate(`${hideCarousel}`);
    hideCarouselHandler(); // Call the hideCarouselHandler to hide the carousel
  }; */

  return (
    <>
      {/* <OffscreenCanvas></OffscreenCanvas> */}
      <Header  />
      <Routes>
     
        <Route path="/" />
        <Route index element={<Categories/>} />
        <Route path="/mencategories" element={<Categories/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/womencategories" element={<WomenCategories/>}/>
        <Route path="/women-product-list" element={<WomenProductList />} />
        <Route path='/women-product-detail' element={<WomenProductDetails/>}/>
        <Route path="/kidscategories" element={<KidsCategories/>}/>
        <Route path="/kids-product-list" element={<KidsProductList/>} />
        <Route path="/kids-product-details" element={<KidsProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/deliveryaddress' element={<Deliveryaddress />}/>
        <Route path="/loginform" element={<LoginForm/>}/>
        <Route path="/registeration-form"element={<RegisterationForm/>}/>
        <Route path="/address-payment"element={<AddressPayment/>}/>
        <Route path="/footer"element={<Footer/>}/>
      </Routes>
      <Footer />
    </>

  )
}
export default Home;