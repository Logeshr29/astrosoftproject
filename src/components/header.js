
// import { useNavigate } from 'react-router-dom';
// import ThinHeartIcon from './HeartIcon';
// import React from 'react';

// export default function Header(hideCarousel){
//     const navigate=useNavigate();

// const openCart=()=>{
//     navigate('/cart');

// }

//     return (
//         <>
// <header class="header">
// <div class="container-fluid">
//     <div class="row">
//         <div class="col-xl-3 col-lg-2">
//             <div class="header__logo">
//                 <a href="./index.html"><img src="/img/logo.png" alt=""/></a>
//             </div>
//         </div>
//         <div class="col-xl-6 col-lg-7">
//             <nav class="header__menu">
//                 <ul>
//                     <li class="active">Home</li>
//                     <li>Women’s</li>
//                     <li>Men’s</li>
//                     <li>Shop</li>
//                     <li>Pages
//                         <ul class="dropdown">
//                             <li>Product Details</li>
//                             <li>Shop Cart</li>
//                             <li>Checkout</li>
//                             <li>Blog Details</li>
//                         </ul>
//                     </li>
//                     <li>Blog</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </div>
//         <div class="col-lg-3">
//             <div class="header__right">
//                 <div class="header__right__auth">
//                     <a href="#">Login</a>
//                     <a href="#">Register</a>
//                 </div>
//                 <ul class="header__right__widget">
//                     <li><span class="icon_search search-switch"></span></li>
//                     <li>
//                         <a href="#"><span class="icon_heart_alt">
//                         <ThinHeartIcon size="24px" color="red" />

//                         </span>
//                         <div class="tip">2</div>
//                     </a></li>
//                     <li><a onClick={()=>[openCart(),hideCarousel]}><span class="icon_bag_alt"></span>
//                         <div class="tip">2</div>
//                     </a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <div class="canvas__open">
//         <i class="fa fa-bars"></i>
//     </div>
// </div>
// </header>



// </>)}




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
import { CgProfile } from "react-icons/cg";
import { Accordion, Col, Dropdown, DropdownItem, Row } from 'react-bootstrap';
import apiService from '../services/axiosService.js';
import apiConfig from '../services/apiConfig.js';


export default function Header({ hideCarousel }){
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchvalue,setSearchValue]=useState("")
  const [gender,setgender]=useState(null)
  const [Fandomcategory,setfandomcategory]=useState(null)
  const [fandom,setfandom]=useState(null)
  const [category,setcategories]=useState(null)
  const [genderid,setgenderid]=useState('1')
  const [fcid,setfcid]=useState(null)
  const [fid,setfid]=useState(null)
  const [user,setuser]=useState(JSON.parse(sessionStorage.getItem('user')))
  const [activeTab, setActiveTab] = useState('');
  const [categoryid,setcategoryid] = useState('');
  const [fandomcategoryid,setfandomcategoryid] = useState('1');

  useEffect(()=>
  {
    console.log(genderid)
    console.log(categoryid)
    console.log(fandomcategoryid)
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
    apiService.getMethod(`${apiConfig.category_menu}/${genderid}`)
    .then((response)=>{
      console.log(response.data)
    setcategories(response.data)})
    .catch((error)=>
    {console.log(error)})
  }
    /* fetching fandom data.......... */
    const fetchfandomcategory=()=>{
    apiService.getMethod(`${apiConfig.fandom_category_menu}/${categoryid}`)
    .then((response)=>{
      console.log(response.data)
    setfandomcategory(response.data)})
    .catch((error)=>
    {console.log(error)})
  }
  /* fetching fandom data.......... */
  const fetchfandom=()=>{
    apiService.getMethod(`${apiConfig.fandom_menu}/${fandomcategoryid}`)
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
  
  },[genderid,categoryid,fandomcategoryid]);

  const openCart = () => {
    navigate('/cart');
  };
  const openwhishlist = () => {
    navigate('/wishlist');
  };
 const onImageClick=(e)=>{
    console.log(e.target.title)
    navigate(`/${e.target.title}`);
  }

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
      navigate('/mencategories');
    }
  };


  const opencategory = (item,e) => {
    console.log(setActiveTab(e.target.title));
    setgenderid(item?.id);
    navigate(`/${item.gender}categories`)
  }
 const  handlecatid=(item)=>
 {
  console.log(item)
  if(item)
    setcategoryid(item)
 }
 const handlefandomcatid=(item)=>
 {
  setfandomcategoryid(item)
 }
  const openfc = (item) => {
    console.log(item);
    setfcid(item?.id);
  }
  const Login=()=>{
    if(!user){
    const login=prompt("enter the user id")
    setuser(login)
    sessionStorage.setItem("user",JSON.stringify(login))}
    else{
      alert("already logged in")
    }
  }
  const Logout=()=>{
    setuser(sessionStorage.removeItem("user"))
    
  }
 
  return (  
    gender &&
    <>
    <div className="header-bar mb-2 pt-lg-0">
    <div className="col-dir-tab d-none d-lg-flex">
      <div className="d-flex">
      <div className='col-8 d-flex'>
        {gender?.gender.map((item,index)=>(
          <div key={item.id} id='cityName' className={`tab nav-fill1  ${activeTab==(item.gender)? "active":" "} `} onClick={(e)=>opencategory(item,e)}>
      <button 
        className="tablinks"
        title={item.gender}
      >
       {item.gender}
      </button> 
       </div>))}
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

              <Navbar.Brand className='p-0' href="/">2K Tribes </Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header className='pb-2 mt-3' closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className='profile-offcanvas'><CgProfile/> Logesh R </div>                
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body  >
                   <div className={"seperator mb-3 seperatorExtra"}></div>
                   <div className="col-dir-tab d-flex d-lg-none">
      <div className="col-12 d-flex justify-content-evenly">
        {gender?.gender.map((item,index)=>(
          <div key={item.id} id='cityName' className={`tab w-100 ${activeTab===(item.gender)? "active":" "} `} onClick={(e)=>opencategory(item,e)}>
      <button 
        className="tablinks w-100"
        title={item.gender}
        
      >
       {item.gender}
      </button> 
       </div>))}
    </div>
      </div>
                  {category?.categories.map((prod,index)=>
                  <div key={prod.id}>
                  <div  className='nav-container '>
                    <ul  className="nav-list d-none d-lg-flex">
                      <li>
                      <NavDropdown
                    bsPrefix='cat_heading '
                    title={prod.category}
                    >
                   <NavDropdown.Item    className="heart-icon-lg" > {prod?.fandom_item.map((fandom)=>
                          <div key={fandom.id}>
                            <div  className="side-heading">{fandom?.fandom.name}</div>
                            <span onClick={()=>handlecatid(prod.id)} className={"font-body ht-01"}>{fandom.name}</span>
                          </div>)}</NavDropdown.Item>
                  </NavDropdown>
                  </li>
                    </ul>
                  </div>
                 <div className="nav-container ">
                 <ul className='nav-list d-lg-none '>
                  <li key={prod.id} className='col-12'>
                      <Accordion className="product_detail_accordion1" defaultActiveKey="0">
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{prod.category}</Accordion.Header>
                        <Accordion.Body>
                          {prod?.fandom_item.map((fandom)=>
                          <div key={fandom.id}>
                            <div  className="side-heading">{fandom?.fandom.name}</div>
                            <span  onClick={()=>openfc(prod)} className={"font-body ht-01"}>{fandom.name}</span>
                          </div>)}
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
                   <NavDropdown.Item as={Link} to=""  className="heart-icon-lg" onClick={()=>Login()}>Login</NavDropdown.Item>
                   <NavDropdown.Item as={Link} to="/profile"  className="heart-icon-lg">Profile</NavDropdown.Item>
                   <NavDropdown.Item as={Link} to=""  className="heart-icon-lg" onClick={()=>Logout()}>Logout</NavDropdown.Item>
                  </NavDropdown>
                  <div  className="heart-icon-lg" ><FaCartPlus title='cart'  onClick={openCart}/></div>
                  <div  className="heart-icon-lg" ><FaRegHeart title='wishlist' onClick={openwhishlist} /></div>
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
                  <div  className="heart-icon-lg" ><FaCartPlus title='cart' onClick={openCart}/></div>
                  <div  className="heart-icon-lg" ><FaRegHeart title='wishlist'onClick={openwhishlist}/></div>
                </div>
            </Container>
          </Navbar>
          
        ))} 
                        
        </div>     
        </div>
        
        <div className="col-dir d-lg-none">
      {/* <div  className="float-right background-color-red"  >
        <div className="d-flex  ">
      <div className="header-icon mr-3 "          

onClick={(onImageClick)}><img src="img/search.png" alt=""/>
</div>
      <div className="header-icon mr-3 "          

onClick={(onImageClick)}><img src="img/shopping-bag.png" alt=""/>
</div>
<div className="heart-icon mr-3 "          

onClick={(onImageClick)}><img src="img/heart.png" alt=""/>
</div>
      </div></div> */}

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

