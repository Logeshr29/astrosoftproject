
import Rating from './Rating'; // Replace './Rating' with the actual path to your Rating component
// import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the default styles for the slider
import Header from './header';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useRef,useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useHistory, useNavigate, BrowserRouter,useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import Accordion from 'react-bootstrap/Accordion';
import SlickSlider from 'react-slick';
import { FaShare } from 'react-icons/fa';

export default function ProductDetail(){
 
  const sizes=[
    { id:'1',
     size:'s'},
     
    { id:'2',
    size:'M'},
    { id:'3',
     size:'L'},
     { id:'4',
      size:'XL'},
      
       { id:'6',
        size:'XXL'},
        { id:'7',
         size:'XXXL'},
         { id:'8',
          size:'UK 7'},
          { id:'9',
          size:'UK 8'},{ id:'9',
          size:'UK 10'},{ id:'10',
          size:'UK 11'},{ id:'11',
          size:'UK 12'},
   ]
  const productlist = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593804_7455230.jpg?format=webp&w=300&dpr=1.3',
      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686843455_6771127.jpg?format=webp&w=300&dpr=1.3',
      rating: 4.5
    },
    {
        id: 2,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593650_8595869.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685428941_4205814.jpg?format=webp&w=300&dpr=1.3',
        rating: 3
      }, {
        id: 3,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593851_6398798.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685618791_2907350.jpg?format=webp&w=300&dpr=1.3',
        rating:3.5
      }, {
        id: 4,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682751894_3133823.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1651127113_4855483.jpg?format=webp&w=300&dpr=1.3',
        rating: 4
      },
    {
      id: 5,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667547108_4535010.jpg?format=webp&w=300&dpr=1.3',

      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667547108_8442187.jpg?format=webp&w=300&dpr=1.3',
      rating: 4.8
    }, {
      id: 6,
      name: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1657992255_4455089.jpg?format=webp&w=300&dpr=1.3',
      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1657992255_6491239.jpg?format=webp&w=300&dpr=1.3',
      rating: 5
    }, {
      id: 7,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690272612_6144137.jpg?format=webp&w=300&dpr=1.3',
      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690272612_3112132.jpg?format=webp&w=300&dpr=1.3',
      rating: 4.5
    }, {
      id: 8,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1663334679_4986522.jpg?format=webp&w=300&dpr=1.3',
      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678880539_4908910.jpg?format=webp&w=300&dpr=1.3',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593804_7455230.jpg?format=webp&w=300&dpr=1.3',
      image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686843455_6771127.jpg?format=webp&w=300&dpr=1.3',
      rating: 4.5
    },
    {
        id: 10,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593650_8595869.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685428941_4205814.jpg?format=webp&w=300&dpr=1.3',
        rating: 3
      }, {
        id: 11,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687593851_6398798.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685618791_2907350.jpg?format=webp&w=300&dpr=1.3',
        rating:3.5
      }, {
        id: 15,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682751894_3133823.jpg?format=webp&w=300&dpr=1.3',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1651127113_4855483.jpg?format=webp&w=300&dpr=1.3',
        rating: 4
      }

];
    const product=[ {
        id: 5,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',

        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_4444272.jpg?format=webp&w=376&dpr=2.0',
        rating: 4.8
      }]
      const [selectedSize,setSelectedSize]=useState(null);
      useEffect(() => {
        console.log("selected items");
        console.log(selectedSize,"seldetedsize")
      }, [selectedSize]);
      const [isFilled, setIsFilled] = useState(false);
      const handleHeartClick = () => {
        setIsFilled(!isFilled);
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
      const [modalOpen, setModalOpen] = useState(false);
      const [emptySize,setEmptySize]=useState(false);
      const [sizeAlert,setSizeAlert]=useState(false);
      const [bottomModalOpen, setIsBottomModalOpen] = useState(false);
      const sliderRef = useRef(null);

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
      console.log("product",product);
      function addtoCart(item){
        console.log(item,"item");
        item.size=selectedSize;
        console.log(item,"tiems");
      

      }
        // Function to show the alert
 
  
      function addtoCart1(item){
        setSizeAlert(true);

        // Set a timer to hide the alert after 3000 milliseconds (3 seconds)
        setTimeout(() => {
          setSizeAlert(false);
        }, 1000);
      };
      
       

  
    
      return (
        <div className="container-ecom">
          <div className="overflow-y">
            <div className="info-sm">
            <div className="product-detail-sm">
              {product.map((prod) => (
                <div key={prod.id} className="single-img-slide">
                  <SlickSlider {...settings}>
                    <div className="productImageContainer">
                      <img src={prod.image} alt={"image1"} />
                    </div>
                    <div className="productImageContainer">
                      <img src={prod.image2} alt={"image2"} />
                    </div>
                  </SlickSlider>
                </div>
              ))}
            </div>
            <div className="product-detail-info-sm">
              <div className="px-3 mt-3">
                <div className="bx1">
                  <div className="row">
                    <div className="col-10">
                      <div className={'fbold title-size'}>
                        Solids: Nude Pink, Burgundy, and White (Colourblock)
                      </div>
                    </div>
                    <div className="col-2 ">
                      <a><span className="font-body bg-warning text-center  p-2">SHARE</span></a>
                    </div>
                  </div>
                </div>
                <div className="mb-2 prod-cat">Oversized T-shirts</div>
                <div className="price-box-wrapper mb-2">
                  <span className="leftPrice">
                    <span className="fprice">
                      <span className={"iruppee pdr-5"}>₹</span>899
                    </span>
                  </span>
                </div>
      
                <div className="bx1 mb-2">
                  <div className={"seperator mb-1 seperatorExtra"}></div>
                  <p className="side-heading">
                    <span>Size</span>
                  </p>
                  <div className="mb-2">
                    {sizes.map((siz, index) => (
                      <div
                        key={index}
                        className={selectedSize === siz.size ? 'size-click-button-active' : 'size-click-button-det'}
                      >
                        <label className={selectedSize === siz.size ? 'active' : ''}>
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
                  
                  <div className={"seperator mb-1 seperatorExtra"}></div>
                  <div className="mb-2">
                    <p className="side-heading">
                      <span>Product Details</span>
                    </p>
                    <Accordion className="product_detail_accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Product Description</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div className="accordion-header">Material composition</div>
                            <span className={"font-body ht-01"}>Premium Heavy Gauge Fabric</span>
                            <div className={"font-body ht-01"}>100% Cotton</div>
                            <div className="accordion-header">Cloth care</div>
                            <div className={"font-body ht-01"}>Machine Wash</div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Manufactured By</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div className={"font-body ht-01"}>2K Tribes pvt Ltd</div>
                            <div className="font-body ht-01">22, Deppo Road</div>
                            <div className={"font-body ht-01"}>Mannargudi-614001</div>
                            <div className="font-body ht-01">Tamil Nadu</div>
                            <a className={"font-body ht-01"}>2ktribes@gmai.com</a>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            </div>

<div className="info-lg ">
<div className="product-detail-img-lg">
              {product.map((prod) => (
                <div key={prod.id} className="single-img-slide">
                  <SlickSlider {...settings}>
                    <div className="productImageContainer">
                      <img src={prod.image} alt={"image1"} />
                    </div>
                    <div className="productImageContainer">
                      <img src={prod.image2} alt={"image2"} />
                    </div>
                  </SlickSlider>
                </div>
              ))}
          </div>
            <div className="product-detail-info-lg">
              <div className="px-3 mt-3 ">
                <div className="bx1">
                  <div className="row  border-1 ">
                    <div className="col-lg-9  col-xl-9 col-md-8">
                      <div className={'fbold title-size '}>
                        Solids: Nude Pink, Burgundy, and White (Colourblock)
                      </div>
                    </div>
                    <div className="whish-icon col-lg-1  col-xl-1 col-md-2">
                      <span
                        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                        onClick={handleHeartClick}
                      ></span>
                    </div>
                    <div className="col-lg-2  col-xl-2 col-md-2 share-btn bg-warning text-center p-2">
                      <span className="font-body share-btn">SHARE</span>
                    </div>
                  </div>
                </div>
                <div className=" prod-cat ">Oversized T-shirts</div>
                <div className=" prod-cat ">In Stocks</div>
                <div className="price-box-wrapper mb-2">
                  <span className="leftPrice">
                    <span className="fprice">
                      <span className={"iruppee p-2 "}>₹899</span>
                    </span>
                  </span>
                </div>
                <Accordion className="product_detail_accordion-size mb-2 ">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>size</Accordion.Header>
                        <Accordion.Body  >
                        <div className="side-box mb-2">
                    {sizes.map((siz, index) => (
                      <div
                        key={index}
                        className={selectedSize === siz.size ? 'size-click-button-active' : 'side box size-click-button-det'}
                      >
                        <label className={selectedSize === siz.size ? 'active' : ''}>
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
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="detail-rating"> <Rating rating="4.5" /></div>
                  <div className='day mb-1'>Delivery by 22 Feb, Thursday</div>
                <div className="side-heading pt-2">
                      <span>Product Details</span>
                  <div className='product-Manufactured '>
                    <div className="product-Manufactured-details">
                    <div className='desp-container col-md-6 col-lg-5 col-xl-4 col-2xl-3'>
                      <h4 className="sub-heading  mb-1">Product Description</h4>
                            <span>Material composition</span><br></br>
                            <span>Premium Heavy Gauge Fabric</span><br></br>
                            <span>100% Cotton</span><br></br>
                            <span>Cloth care</span><br></br>
                           <span>Machine Wash</span><br></br>
                      </div>
                      <div className='desp-container col-6 col-lg-3  col-xl-3'>
                      <h4 className="sub-heading  mb-1">Manufactured By</h4>
                            <p>2K Tribes pvt Ltd ,22, Deppo Road
                          Mannargudi-614001Tamil Nadu
                            2ktribes@gmai.com</p>
                      </div>
                      </div>
                      </div>
                      </div>
                                  
            <div className="sticky-footer-lg">
        {sizeAlert ? (
          <Alert className=" buy-cont dark" style={alertStyle}>
            Please select size
          </Alert>
        ) : (
          <></>
        )}
        <div className="col-12 w-100 product_det-lg">
          <div className="col-6">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => addtoCart1(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="col-6">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                BUY NOW
              </button>
            ) : (
              <button
                onClick={() => addtoCart1(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                BUY NOW
              </button>
            )}
          </div>
        </div>
      </div>
                  </div>
                </div>
              </div>
            </div>
      


            <div className="lg-product">
        {productlist.map((product) => (
          <div key={product.id} className="product-list-sm">
            <div onClick={() => onImageClick(product)}>
              <div className="productItem-sm " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <SlickSlider {...settings}>
                  <div className="productImageContainer ">
                    <img
                      className="sm-product-image"
                      src={product.image}
                      alt={"image1"}
                    />
                    <div className="label-sm new">New</div>
                    <div className="product-heart-sm">
                      <span
                        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                        onClick={handleHeartClick}
                      ></span>
                    </div>
                  </div>

                  <div className="productImageContainer">
                    <img
                      className="sm-product-image"
                      src={product.image2}
                      alt={"image2"}
                    />
                    <div className="label-sm new">New</div>
                    <div className="product-heart-sm">
                      <div className="float_left">
                        <span
                          className={`icon_heart_alt ${isFilled ? 'filled' : ''} `}
                          onClick={handleHeartClick}
                        ></span>
                      </div>
                    </div>
                  </div>
                </SlickSlider>

                <div className="product__item__text">
                  <h6>{product.name}</h6>
                  <Rating rating={product.rating} />
                  <div className="product__price">₹ {product.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky-footer-sm">
        {sizeAlert ? (
          <Alert variant="dark" style={alertStyle}>
            Please select size
          </Alert>
        ) : (
          <></>
        )}
        <div className="col-12 w-100 product_det-sm">
          <div className="col-6">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => addtoCart1(product)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className="col-6">
            <button className={'sm-close-button text-uppercase bold_font'}>
              <span
                className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                onClick={handleHeartClick}
              ></span>
              <span> WISHLIST</span>
            </button>
          </div>
        </div>
      </div>
    </div>

);
            } 