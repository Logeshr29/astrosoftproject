
import Rating from './Rating'; // Replace './Rating' with the actual path to your Rating component
// import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the default styles for the slider
import Header from './header';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useRef,useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useHistory, useNavigate, BrowserRouter,useLocation, Await } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { FiRotateCw } from 'react-icons/fi';
import Accordion from 'react-bootstrap/Accordion';
import SlickSlider from 'react-slick';
import { FaShare } from 'react-icons/fa';
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';

export default function ProductDetail(){
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
        Tshirttype:"Oversized T-shirts",
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 799,
        Discount:200,
        quantity:6,
        ddate:"28 Feb,Friday",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',
        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_4444272.jpg?format=webp&w=376&dpr=2.0',
        image3:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',
        image4:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_4444272.jpg?format=webp&w=376&dpr=2.0',
        sizes:['s','l','m','xl','xxl','xxxl'],
        rating: 4.5
      }]
      const [selectedSize,setSelectedSize]=useState(null);
      const [productdetail,setproductdetail]=useState(null);
      const [productid,setproductId]=useState("")
      const {state}=useLocation()
      
      useEffect(() => {
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
      function addtoCart(item){
        console.log(item,"item");
        item.size=selectedSize;
        console.log(item,"tiems");
      navigate("/cart", { state: { item } })

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
                      <img src={prod.image_path} alt={"image1"} />
                    </div>
                        

                </div>
              ))}</SlickSlider>
            </div></div>

               {/* product images for large devices................. */} 
            <div className='col-7 d-flex flex-wrap'>
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
          <div className="product-detail-info-lg col-12 col-lg-5  ">
              <div className="px-3  mt-3 container-md">
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
                      <p className={"iruppee p-2 "}>{`₹${productdetail?.products.price}`} <span className='cancel-amt'>{(productdetail?.products.price)+(productdetail?.products.discount)}</span><span className='discount-text'> Member Discount ₹{productdetail?.products.discount}</span></p>
                    </span>
                  </span>
                </div>
                <div className="product_detail_accordion-size">
                        <div className="size-text"><p>Please select a size.</p></div>
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
                       
                    <div className="mb-2"><span>Size not available?  <span> Notify Me</span></span></div>
                    <div className="detail-rating mb-1"> <Rating rating={productdetail?.products.rating} /></div>
                  <div className='day'><span>{`Delivery by ${productdetail?.products.ddate}`}</span></div>
                  <div className="sticky-footer-lg mt-0 ">
        {sizeAlert ? (
          <Alert className=" buy-cont dark" style={alertStyle}>
            Please select size
          </Alert>
        ) : (
          <></>
        )}
        <div className="product_det-lg mb-4">
          <div className="addcart-btn">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => addtoCart1(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="addcart-btn">
            {selectedSize !== null ? (
              <button
                onClick={() => addtoCart(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
                WISHLIST
              </button>
            ) : (
              <button
                onClick={() => addtoCart1(productdetail)}
                className={'sm-button text-uppercase bold_font'}
              >
               WISHLIST
              </button>
            )}
          </div>
        </div> </div> 
        
      <div className={"seperator mb-1 seperatorExtra"}></div>
      <div className='d-flex return-policy'><img src="https://tss-static-images.gumlet.io/icons/return-icon.png" alt="return-img" /><p className="">This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p></div>
                  <div className="m-2">
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

      <div className="info-lg d-none d-md-flex gap-2  ">

            <div className={"seperator mb-1 seperatorExtra mt-4"}></div>
      </div>
      <div className="lg-product">
            <div className="col-12"><span className='side-heading'>Similar Products</span></div>
          {productdetail?.related_products.map((product) => (
            <div key={product.id} className="product-list-sm">
              <div onClick={() => onImageClick(product)}>
                <div className="productItem-sm " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <SlickSlider {...settings}>
                    <div className="productImageContainer ">
                      <img
                        className="sm-product-image"
                        src={product.image_path}
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
      </div></div>:<div>loading...</div>
);
            } 

           