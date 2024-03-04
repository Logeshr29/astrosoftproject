<div className=" w-100 text-center d-flex align-items-center" >          
        <BottomModal isBottomModalOpen={bottomModalOpen} onClose={closeBottomModal}/>
<div className="amount col-6 displayflex justify-content-end">
<div className={"font-body ht-01 sub-heading"}>₹ {qtyamount}</div>
<span><a  className="anchor"onClick={openBottomModal}> View Details
</a> </span>
</div>
      <div className="continue col-6 displayflex justify-content-start" >
    
      <button
          onClick={()=>{navigate('/checkout')}}

  className={  'sm-button text-uppercase bold_font'}  
>Continue</button></div>

<Modal className="modal-style"
  isOpen={modalIsOpen}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  style={customStyles_modal}
  contentLabel="Example Modal"
>

<div className="bx1">
      <div className={"seperator mb-1 seperatorExtra"}>

      </div></div>
      <div className="inline-flex">
    <div className="address-header">Add Delivery Address</div> <span> <img className="image-logo" src="/img/pin.png" alt=""/>
 </span></div>

          <div className="address-payment-form">
          <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                mobileNumber: '',
                postalcode: '',
                landmark: '',
                city:'',
                street:'',
                isDefault: false, // Add this field

                
              }}
              validationSchema={validationSchema}
              onSubmit={handlesubmitaddress}
            >
              <Form>
                <div className="row flex ">
                <div className="mb-3 col-6">
                  {/* <label htmlFor="firstName">First Name</label> */}
                  <Field
                    type="text"
                    name="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-message-address"
                  />
                </div>
    
                <div className="mb-3 col-6">
                  {/* <label htmlFor="lastName text-tomato">Last Name</label> */}
                  <Field
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"

                    id="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-message-address"
                  />
                </div>
                </div>
             
                <div className="mb-3">
                  {/* <label htmlFor="postalcode">Street </label> */}
                  <Field
                    type="text"
                    name="street"
                    className="form-control"
                    id="street"
                    placeholder="street"
                  />
                  <ErrorMessage
                    name="street"
                    component="div"
                    className="error-message-address"
                  />
                </div>
                <div className="row flex">
            
                <div className="mb-3 col-6">
                  {/* <label htmlFor="landmark">Land Mark</label> */}
                  <Field
                    type="text"
                    name="landmark"
                    className="form-control"
                    id="landmark"
                    placeholder="Land Mark"
                  />
                
                </div>
                 <div className="mb-3 col-6">
                  {/* <label htmlFor="city">City</label> */}
                  <Field
                    type="text"
                    name="city"
                    className="form-control"
                    id="city"
                    placeholder="City"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="error-message-address"
                  />
                </div>
                </div>
                <div className="row flex">
                <div className="mb-3 col-6">
                  {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
                  <Field
                    type="number"
                    name="mobileNumber"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="error-message-address"
                  />
                </div>
                <div className="mb-3 col-6">
                  {/* <label htmlFor="postalcode">Postal Code</label> */}
                  <Field
                    type="number"
                    name="postalcode"
                    className="form-control"
                    id="postalcode"
                    placeholder="postal code"
                  />
                  <ErrorMessage
                    name="postalcode"
                    component="div"
                    className="error-message-address"
                  />
                </div>
                <div className="mb-3">
  <label>
    <Field type="checkbox" name="isDefault" />
    Make this address default
  </label>
</div>
              </div>
    
               <div className="row right-corner">
                <div className="col-6"><button className="cncl-btn text-uppercase bold_font w-100" type="button" onClick={closeModal}>cancel</button></div>
                <div className="col-6 "><button type="submit" className="sm-button text-uppercase bold_font w-100">Add</button></div>

               </div>
  
                {/* <div className="submit-btn w-50percent">
                  <button
                    type="submit"
                    className="sm-button text-uppercase bold_font"
                  >
                    Submit
                  </button>
                </div> */}
              </Form>
            </Formik>
       
        
        </div>  
      
        </Modal>

        </div>


/*  */


import { Link, useNavigate } from 'react-router-dom';
import ThinHeartIcon from './HeartIcon';
import LogoAnimation from './logo';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProductList from './ProductList';
import Categories from './Categories';
import WomenCategories from './WomenCategories';
import KidsCategories from './KidsCategories';
import Offcanvasoverlay from './Offcanvasoverlay.js';
import LoginForm from './LoginForm.js';
import { FaCartPlus, FaHeart, FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa';
import { IoSearchSharp } from "react-icons/io5";
import { Accordion, Col, Dropdown, DropdownItem, Row } from 'react-bootstrap';
import apiService from '../services/axiosService.js';
import apiConfig from '../services/apiConfig.js';

export default function Header({ hideCarousel }) {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchvalue,setSearchValue]=useState("")
  const [gender,setgender]=useState(null)
  const [Fandomcategory,setfandomcategory]=useState(null)
  const [fandom,setfandom]=useState(null)
  const [category,setcategories]=useState(null)
  const [genderid,setGenderId]=useState(null)
  useEffect(()=>
{
  /* fetching gender data........... */
const fetchgender=()=>{
  apiService.getMethod(apiConfig.gender)
  .then((response)=>{
    console.log(response.data)
  setgender(response.data)})
  .catch((error)=>
  {console.log(error)})
}
/* fetching categories data........... */
const fetchcategories=()=>{
  apiService.getMethod(apiConfig.category_menu)
  .then((response)=>{
    console.log(response.data)
  setcategories(response.data)})
  .catch((error)=>
  {console.log(error)})
}
  /* fetching fandom data.......... */
  const fetchfandomcategory=()=>{
  apiService.getMethod(apiConfig.fandom_category_menu)
  .then((response)=>{
    console.log(response.data)
  setfandomcategory(response.data)})
  .catch((error)=>
  {console.log(error)})
}
/* fetching fandom data.......... */
const fetchfandom=()=>{
  apiService.getMethod(apiConfig.fandom_menu)
  .then((response)=>{
    console.log(response.data)
  setfandom(response.data)})
  .catch((error)=>
  {console.log(error)})
}

fetchgender();
fetchfandomcategory();
fetchfandom();
fetchcategories();
},[]);

  const openCart = () => {
    navigate('/cart');
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  function onImageClick(e) {
    const change=e.target.title
    console.log(change)
    navigate(`${change}`);
  }
  const handleWomenTabClick = () => {
    console.log("hello");
    // Navigate to the "/women" route when the "Women" tab is clicked
  };

  const handleTabSelect = (eventKey) => {
    console.log(`Selected tab: ${eventKey}`);
    if (eventKey === "women") {
      navigate('/WomenCategories');
    }
    if (eventKey === "Login") {
      navigate('/loginform');
    }
    if (eventKey === "kids") {
      navigate('/kids-categories');
    }
    if (eventKey === "men") {
      navigate('/categories');
    }
  };
  const [activeTab, setActiveTab] = useState(null);

  const openCity = (cityName) => {
    console.log(cityName)
    setGenderId(cityName)
    if (cityName) {
      // Remove "active" class from all tab links
      const tabLinks = document.getElementsByClassName("tab");
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
      }
    } 
  else {
      console.error(`Element with ID ${cityName} not found.`);
    }
  };
  

  return (
    <>
    <div className="header-bar mb-2">
    <div className="col-dir-tab d-none d-lg-flex">
      <div className="d-flex">
      <div className='col-8 d-flex'>
        {gender?.gender.map((item,index)=>
          <div key={item.id} class="tab nav-fill1" onClick={() => openCity(item)}>
           <button 
           id='cityName'
        className={`tablinks ${activeTab ===(item.gender) ? 'active' : ''}`}
        style={{ background: activeTab === item.gender ? 'black' : '' }}
      >
       {item.gender}
      </button>
       </div>)}
    </div>
        <div  className="col-4 track">
          <sapn>Track Orders</sapn>
            <span>Contact Us</span></div>
      </div></div>
      <div className="position-fix d-lg-flex">
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="custom-navbar-background w-100">
            <Container fluid >
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='d-flex d-lg-none' />

              <Navbar.Brand className='fa-2x p-0' href="/">2K Tribes </Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Logesh R 
                   
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='' >
                   <div className={"seperator mb-3 seperatorExtra"}></div>
                <div className="col-dir-tab1 d-lg-none">
                      <Tabs
                        defaultActiveKey="men"
                        id="justify-tab-example"
                        bsPrefix="nav nav-type1 "
                        fill
                        onSelect={handleTabSelect}
                      >
                        <Tab eventKey="men" title="MEN" ></Tab>
                        <Tab eventKey="women" title="WOMEN"></Tab>
                        <Tab eventKey="kids"  title="KIDS"></Tab>
                        
                      </Tabs>
                    </div>
                  {category?.categories.map((prod,index)=>
                  <div>
                  <div className='nav-container '>
                    <ul className='nav-list d-none d-lg-flex '>
                      <li>{prod.category}</li>
                    </ul>
                  </div>
                 <div className="nav-container ">
                 <ul className='nav-list d-lg-none '>
                  <li className='col-12'>
                      <Accordion className="product_detail_accordion1" defaultActiveKey="0">
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{prod.category}</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <span className={"font-body ht-01"}>vvvvkjblknmq34gr54wjazgmmlkmlk</span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      </Accordion></li>
                      </ul>
                 </div></div>
                  )}<div className={"seperator mb-3 mt-3 d-lg-none seperatorExtra"}></div>
                  <div className=" settings d-lg-none">
                    <div className='discount-text1 fa-1x pointer'>Get More Discounts with Membership</div>
                    <ul>
                      <li>My Account</li>
                      <li>My Orders</li>
                      <li>Contact Us</li>
                      <li>FAQs</li>
                      <li>community Initiatives</li>
                    </ul>
                  </div>

               
              <div className='icon-container d-none d-lg-flex' >
                
                <div className=" d-flex header-icon-lg">
                  <div  className="box d-flex" /* onMouseEnter={handleopen()} */>
                    <input type="search"
                    className='fas-s search-input'
                    id="search"
                    placeholder="Search for products, brands and more.."
                    value={searchvalue}
                    onChange={(e) => setSearchValue(e.target.value)}/>
                <IoSearchSharp title='search'/></div>
                  <NavDropdown
                   className="heart-icon-lg m-0 "
                    title={<FaRegUser title='User'/>}>
                   <NavDropdown.Item as={Link} to="/Login"  className="heart-icon-lg">Login</NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/profile"  className="heart-icon-lg">Profile</NavDropdown.Item>
                  </NavDropdown>
                  <div  className="heart-icon-lg" onClick={openCart}><FaCartPlus title='cart' /></div>
                  <div  className="heart-icon-lg" onClick={onImageClick}><FaRegHeart title='checkout' /></div>
                </div>
              </div>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div className=" d-flex header-icon-lg d-lg-none ">
                  <div  className="box d-flex" /* onMouseEnter={handleopen()} */>
                    <input type="search"
                    className='fas-s search-input'
                    id="search"
                    placeholder="Search for products, brands and more.."
                    value={searchvalue}
                    onChange={(e) => setSearchValue(e.target.value)}/>
                <IoSearchSharp title='search'/></div>
                  <div  className="heart-icon-lg" onClick={openCart}><FaCartPlus title='cart' /></div>
                  <div  className="heart-icon-lg" onClick={onImageClick}><FaRegHeart title='checkout' /></div>
                </div>
            </Container>
          </Navbar>
          
        ))} 
                        
        </div>     
        </div>
        <div className="col-dir d-lg-none ">
      <Tabs
      defaultActiveKey="men"
      id="justify-tab-example"
      className="mb-3"
      justify
      onSelect={handleTabSelect}

    >
      <Tab eventKey="men" title="MEN">
      </Tab>
      <Tab eventKey="women" title="WOMEN">
      </Tab>
      <Tab eventKey="kids" title="KIDS">
      </Tab>
     
    </Tabs>
    </div>
    
    </>
  );
}

