
import Rating from './Rating'; // Replace './Rating' with the actual path to your Rating component
// import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the default styles for the slider
import Header from './header';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useRef,useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useHistory, useNavigate, BrowserRouter,useLocation, Await, json } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { FiRotateCw } from 'react-icons/fi';
import Accordion from 'react-bootstrap/Accordion';
import SlickSlider from 'react-slick';
import { FaShare } from 'react-icons/fa';
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';
import Footer from './Footer';

export default function ProductDetail(){
 
      const [selectedSize,setSelectedSize]=useState(null);
      const [productdetail,setproductdetail]=useState(null);
      const [productid,setproductId]=useState("")
      const [productlist,setproductlist]=useState(null)
      const [modalOpen, setModalOpen] = useState(false);
      const [emptySize,setEmptySize]=useState("s");
      const [sizeAlert,setSizeAlert]=useState(false);
      const [bottomModalOpen, setIsBottomModalOpen] = useState(false);
      const [user,setuser]=useState(JSON.parse(sessionStorage.getItem('user')))
      const [isFilled, setIsFilled] = useState(false);
      const [wishlist,setwishlist]=useState(JSON.parse(localStorage.getItem('wishlist'))||[])
      const [cart,setcartitem]=useState(JSON.parse(localStorage.getItem('items'))||[])
      const sliderRef = useRef(null);
      console.log(emptySize)
      const {state}=useLocation()
      console.log(state.item.id)
      console.log(productid)
      useEffect(() => {
        const fetchproductlist=()=>{
          apiService.getMethod(`${apiConfig.productlist}/4`)
          .then((response)=>
          {
            const fandom_cat=response.data
            console.log(fandom_cat)
             setproductlist(fandom_cat);
          })
          .catch
            ((error)=>{console.log(error)})
          }
          fetchproductlist();
        const fetchproductdetail=()=>{
        apiService.getMethod(`${apiConfig.productdetails}/${state.item.id}`)
          .then((response)=>
          {
            setproductdetail(response.data)
          
          })
          .catch
        ((error)=>{console.log(error)})
      }
      fetchproductdetail();
      
     }, [selectedSize]);
      
      const handleHeartClick = (product) => {
        setproductId(product)
        setIsFilled(!isFilled);
        const values={
          product:[productid],
          qty:[1],
          user:[user],
          size:[emptySize]
        }
      apiService.postMethod(apiConfig.wishlist,JSON.stringify(values))
      .then(response=>
        {
          console.log('Data sent successfully:', response.data);
      })
      .catch
      ((error)=>{console.log(error)})
        
      };
      const ArrowButton = ({ type, onClick }) => {
        return (
          <button className={`arrow-button ${type}`} onClick={onClick}>
            {type === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        );
      };
      

      const toggleSelectionsize=(item)=>{
        console.log(item,"sizeee");
        if(selectedSize!=item){
          setSelectedSize(item);
        }
        if(selectedSize==item){
          console.log(selectedSize,item,"size2")

          setSelectedSize(null);
        }

        // if (selectedSize.includes(item)) {

        //   setSelectedSize(selectedSize.filter(selected => selected !== item));
        // } else {
        //   setSelectedSize([...selectedSize, item]);
        // }
      
      }
      
      const navigate=useNavigate();
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false, // Hide the default previous arrow
        nextArrow: false, // Hide the default next arrow
        
      
      };
      const [slidesToShow, setSlidesToShow] = useState(3);
useEffect(() => {
  // Define your media query conditions and set the slidesToShow accordingly
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 480) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1.5);
    }
  };

  handleResize(); // Call once on mount to set initial slidesToShow
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
      const settings_prod = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
        prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,
      
      
      };

     
      function onImageClick(item){
        console.log("hellobabay");
        navigate('/product-detail', { state: { item } });

      }

      const openModal = () => {
        setModalOpen(true);
      };
      const closeModal = () => {
        setModalOpen(false);
      };
      const openBottomModal = () => {
        setIsBottomModalOpen(true);
      };
      const alertStyle = {
        
        height: '5vh',
        color:'white',
        textAlign:'left',
        paddingBottom:'2px',
        paddingTop:'2px',

        backgroundColor:'black' // You can adjust the width to your desired value
      };
      
      
      const addtoCart=(item)=>{
        console.log(item,"item");
        item.size=selectedSize;
        console.log(item,"tiems");
        const Product = [...cart,item?.products];
        if(!user)
        {

          const userid=prompt("enter the user id")
          if(userid)
          {
          setuser(userid)
          sessionStorage.setItem("user",JSON.stringify(userid))
          
          setcartitem(Product)
          localStorage.setItem("items",JSON.stringify(Product))
          if(cart)
          alert(" product added to cart")
          }
          else
          {
            setcartitem(Product)
            localStorage.setItem("items",JSON.stringify(Product))
            alert("please enter the user id")
            
          }
        }
        else{
          setcartitem(Product)
          localStorage.setItem("items",JSON.stringify(Product))
          if(cart)
          alert(" product added to cart")
        }
       
        
      }

      function addtoCart1(item){
        setSizeAlert(true);

        // Set a timer to hide the alert after 3000 milliseconds (3 seconds)
        setTimeout(() => {
          setSizeAlert(false);
        }, 1000);
      };
        // Function to show the alert

      const addwishlist=(item)=>{
        const Product = [...wishlist,item?.products];
        if(!user)
        {

          const userid=prompt("enter the user id")
          if(userid)
          {
          setuser(userid)
          sessionStorage.setItem("user",JSON.stringify(userid))
          
          setwishlist(Product)
          localStorage.setItem("wishlist",JSON.stringify(Product))
          if(cart)
          alert(" product added to wishlist")
          }
          else
          {
            setwishlist(Product)
            localStorage.setItem("wishlist",JSON.stringify(Product))
            alert("please enter the user id")
            
          }
        }
        else{
          setwishlist(Product)
          localStorage.setItem("wishlist",JSON.stringify(Product))
          if(cart)
          alert(" product added to wishlist")
        }
      };
      


  
    
      return (
        productdetail ? 
        <div className="container-ecom">
          <div className="overflow-y">
            <div className="d-md-flex">
            {/* product detail images  for all devices.............................................................. */}
            {/* product images for small devices................. */}
            <div className="info-sm mb-3">
            <div className="product-detail-sm">
            <SlickSlider {...settings} >
            {productdetail?.products.product_images.map((prod,index) => (
              
                <div key={prod.id} className="single-img-slide">
                    <div  className="productImageContainer">
                      <img src={prod.image_path} alt={"image1"} className='w-100'/>
                    </div>
                        

                </div>
              ))}</SlickSlider>
            </div></div>

               {/* product images for large devices................. */} 
            <div className='col-lg-7   d-flex flex-wrap'>
            {productdetail?.products.product_images.map((prod,index)=>
            <div className='col-6'>
                <div  className="product-detail-img-lg col-12 col-lg-12  ">
                <div key={prod.id} className=" col-12 d-flex ">
                  <div className="d-flex col-12 p-2 gap-3">
                      <div  className="productImageContainer col-12">
                      <img src={prod.image_path} alt={"image"} />
                    </div>
                    </div>
                    </div>
          </div></div>)}</div>

{/* product detail for md and lg..................................................... */}
{/* product details for small and larger devices.....................................*/}
          <div className="product-detail-info-lg col-12 col-md-5 mb-3">
              <div className="px-lg-3 p-1 mt-3 container-fluid">
                <div className="bx1 ">
                  <div className="row  border-1 ">
                    <div className="col-10 col-lg-10  col-xl-10 col-md-10">
                      <div className={'fbold title-size '}>
                        <span>{productdetail?.products.product}</span>
                      </div>
                      <div className=" prod-cat "><p>{productdetail?.products.collection_name}</p></div>
                    </div>
                    <div className=" col-2 col-lg-2  col-xl-1 col-md-2 share-btn">
                      <span className="font-body share-btn">SHARE</span>
                    </div>
                  </div>
                </div>
                <div className="price-box-wrapper">
                  <span className="leftPrice">
                    <span className="fprice">
                      <p className={"iruppee  mb-1 pt-0"}>{`₹${productdetail?.products.price}`} <span className='cancel-amt'>{(productdetail?.products.price)+(productdetail?.products.discount)}</span><span className='discount-text'> Member Discount ₹{productdetail?.products.discount}</span></p>
                    </span>
                  </span>
                </div>
                <div className="product_detail_accordion-size mt-1">
                        <div className="size-text "><p>Please select a size.</p></div>
                        <div className="side-box mb-1">
                       {productdetail?.products.product_size.map((siz, index) => (
                      <div
                        key={index}
                       
                        className={selectedSize === siz.size? 'size-click-button-active' : 'side box size-click-button-det'}
                      >
                        <label  className={selectedSize === siz.size ? 'active' : ''}>
                          <input
                            type="radio"
                            value={siz.size}
                            checked={selectedSize === siz.size}
                            className={selectedSize === siz.size ? 'size-click-button-active' : 'size-click-button-det'}
                            onChange={() => toggleSelectionsize(siz.size)}
                          />
                          {siz.size}
                        </label>
                      </div>
                    ))} 
                  </div> 
                       </div>
                    <div className="mb-2"><span>Size not available?  <span> Notify Me</span></span></div>
                    <div className="detail-rating mb-1"> <Rating rating={productdetail?.products.rating} /></div>
                  <div className='day mb-3'><span>{`Delivery by 22,feb`}</span></div>
                  <div className="sticky-footer-lg mt-0 d-none d-md-block">
        {sizeAlert ? (
          <Alert className=" buy-cont dark" style={alertStyle}>
            Please select size
          </Alert>
        ) : (
          <></>
        )}
        <div className="product_det-lg mb-lg-4 mb-2 ">
          <div className="addcart-btn ">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>  addtoCart1(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="addcart-btn">
            {selectedSize !== null ? (
              <button
                onClick={() =>addwishlist(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                WISHLIST
              </button>
            ) : (
              <button
                onClick={() =>  addtoCart1(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
               WISHLIST
              </button>
            )}
          </div>
        </div> </div> 
        
      <div className={"seperator mb-1 seperatorExtra"}></div>
      <div className='d-flex return-policy'><img src="https://tss-static-images.gumlet.io/icons/return-icon.png" alt="return-img" /><p className="p-0">This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p></div>
                  <div className="">
                    <p className="side-heading border-0">
                      <span>Product Details</span>
                    </p>
                    <Accordion className="product_detail_accordion" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Product Description</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div className="accordion-header">{productdetail?.products.description1}</div>
                            <span className={"font-body ht-01"}>{productdetail?.products.description2}</span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Manufactured By</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div className={"font-body ht-01"}>{productdetail?.products.manufactuerd}</div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>                                  
                  </div>
                </div>
              </div>  </div>



{/* similar product cart for all  devices................. */}
<div className={"seperator mb-1 seperatorExtra mt-4"}></div>
<div className="col-12"><span className='side-heading'>Similar Products</span></div>
<div className="">
<div class="d-flex flex-wrap">
        {productlist ?.products.map((product) => (<> <div key={product.id} className= "product-list-sm">
        <div  onClick={()=>onImageClick(product)}>
        <div className="productItem-sm " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {/* productlist-sm............................................ */}  
        <SlickSlider {...settings} className='d-md-none '>

        {product?.product_images.map((product,index)=>
        index<2 &&
        <div key={index} className="productImageContainer position-relative">
         <img  className="sm-product-image" src={product.image_path_1}/>
         <img  className="sm-product-image" src={product.image_path_2}/>
         <div className="label new">New</div>
         
            <div className="product-heart"> 
                  <span
                    className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                    onClick={() => addwishlist(productdetail)}
                  ></span>
                </div>
                </div>
          )}         
    </SlickSlider>

{/* productlist-lg.................................................... */}
    <div className="productImage d-none d-md-flex">
    {product?.product_images.map((product,index)=>
        index<2 &&
              <div className="productImageContainer" onClick={()=>onImageClick(product)}>
              <img src={product.image_path_1} alt={product.name} className="productImage1" />
          <img src={product.image_path_2} alt={product.name} className="productImage1 productImage2" />
          </div>
    )}
              <div className="label new">New</div>         
<div className="product-heart">
      <span
        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
        onClick={() => addwishlist(productdetail)}
      ></span>
    </div>
             
            </div>
{/* productlist info ........................................... */}
    <div className="product__item__text">
              <h6>{product.product}</h6>
              <Rating rating={product.rating} />
    
              <div className="price-box-wrapper">
                  <span className="leftPrice">
                    <span className="fprice">
                      <p className={"iruppee product__price p-2"}>{`₹${product?.price}`} <span className='cancel-amt'>{(product?.price)+(product?.discount)}</span></p>
                    </span>
                  </span>
                </div></div>  
         <button className={'-5 sm-close-button'}>
          Add Now
        </button></div>
              </div>
              </div>
       </>
        ))}
        </div></div>


      <div className="sticky-footer-sm">
        {sizeAlert ? (<>
    <Alert variant="dark" style={alertStyle}> 
          Please select size
        </Alert></>):(<> </>)}<br></br>
          <div className="col-12 w-100 product_det-sm">

            <div className="col-6" >
          {selectedSize !==null ? (<>
            <button
                onClick={() => addtoCart(productdetail)}

        className={  'sm-button text-uppercase bold_font'}  
      >Add to Cart</button></>):(<>
           <button
                onClick={() => addtoCart1(productdetail)}

        className={  'sm-button text-uppercase bold_font'}  
      >Add to Cart</button></>)}
       </div>
     
              <div className="col-6"  onClick={() => addtoCart1(productdetail)}>
          
                <button className={'sm-close-button text-uppercase bold_font'}>
                <span
                className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                onClick={handleHeartClick}
              ></span>
          <span> WISHLIST</span> 
                   </button>
              </div>

          </div>
  </div></div>: <div className="loader"></div>
);
            } 

           