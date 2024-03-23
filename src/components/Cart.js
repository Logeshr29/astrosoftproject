import React, { useRef, useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from 'react-slick';
import Rating from './Rating';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPercent, FaPercentage, FaTrash } from 'react-icons/fa';
import { ModalHeader } from 'react-bootstrap';
import AddressPayment from './AddressPayment';
import apiConfig from '../services/apiConfig';
import apiService from '../services/axiosService';

export default function Cart() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.number().required('Mobile Number is required'),
    postalcode: Yup.number().required('Postal Code is required'),
    city: Yup.string().required('City Name is required'),
    street: Yup.string().required('Street is required'),
    isDefault: Yup.boolean(), // Validation for the checkbox (optional)
  });

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [productlist, setProductList] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Initialize with default null
  const [selectedQty, setSelectedQty] = useState(1); // Initialize with default 1
  const [qtyAmount, setQtyAmount] = useState('');
  const [selectCoupon, setCouponValue] = useState(null);
  const [selectVoucher, setVoucherValue] = useState(null);
  const [isFilled, setIsFilled] = useState(false);
  const [wishlist,setwishlist]=useState(JSON.parse(localStorage.getItem('wishlist'))||[])
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items'))||[]);
  console.log(items)

  useEffect(() => {

    const fetchProductList = () => {
      apiService.getMethod(`${apiConfig.productlist}/4`)
        .then((response) => {
          const fandom_cat = response.data;
          console.log(fandom_cat);
          setProductList(fandom_cat);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    fetchProductList();
  }, []);
 
  const removebutton=(productid)=>
  {
    const product=JSON.parse(localStorage.getItem("items"))
    const removeprod=product.filter(product=> product.id!=productid)
    setItems(removeprod)

  }
  const totalremovebutton=()=>
  {
    setItems([])

  }
  const ArrowButton = ({ type, onClick }) => {
    return (
      <button className={`arrow-button ${type}`} onClick={onClick}>
        {type === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
    prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,
  };

  const handleHeartClick = () => {
    setIsFilled(!isFilled);
  };

  const handleQtyClick = (quantity, id) => {
    setItems((prevItems) =>
      prevItems.map((prod) =>
        prod.id === id ? { ...prod, quantity } : prod
      )
    );

    if (quantity) {
      const qtyAmt = items.find((prod) => prod.id === id)?.price * quantity;
      setQtyAmount(qtyAmt);
    }

    setSelectedQty(quantity);
    console.log(id, "indee");
    console.log(items, "produdt");
  };

  const toggleSelectionsize = (item) => {
    setSelectedSize((prevSize) => (prevSize === item ? null : item));
  };

  const handleCouponCodeChange = (event) => {
    setCouponValue(event.target.value);
  };

  const handleVoucherChange = (event) => {
    setVoucherValue(event.target.value);
  };


  const navigatecheckout=()=>{
    navigate("/deliveryaddress")
  }
  function onImageClick(item){
    console.log("hellobabay");
    navigate('/product-detail', { state: { item } });
  
  }
  const addwishlist=(item)=>{
    const Product = [...wishlist,item];
      setwishlist(Product)
      localStorage.setItem("wishlist",JSON.stringify(Product))
      if(wishlist)
      alert(" product added to wishlist")
    }
  return (
    <>
       <div className="container-cart d-block d-lg-flex ">
     
    <div className="overflow-y col-12 col-lg-8 me-4">
      {/* address container */}
     <div className="flex m-2">
        <div className="col-9 col-xl-10 p-1 p-lg-0 address-container">
        <div className="col-12"><span>Deliver To:</span>Logesh R,638751</div> 
        <div  className="col-11 d-none d-sm-flex"><p>83 ,chinnakattupalayam, Perundurai Subdistrict, Erode District</p></div></div>
        <div className="col-xs-11 col-3 col-sm-2  col-xl-1 change-btn" >Change</div> 
      </div>
    <div className="flex m-0">
        <p><span className="dis-text"> <FaPercent /> Member Discount </span>on this order are Rs.400</p>
        </div>
    <div className={"seperator mb-3 seperatorExtra"}>

      </div>


  {/* product deatils */}
  <div className="d-block  ">
  <div>
        {items? items?.product.map((prod) => (<div className="container-ecom">
            <div key={prod.id}className=" p-0 col-12 d-flex ">
              {prod?.product_images.map((prod,index)=>
              index==0 &&
            <div key={prod.id} className="cart-img-sm col-3 col-sm-3 col-lg-3 col-xl-3">
                 <img src={prod.image_path} alt={"image2"}
        /> </div>)}
        <div className="cart-detail-sm column-container col-9 ">
          <div className="col-12 d-md-flex">
          <div className={' prod-cart col-12 col-md-8 '}>
            <span className="text-capitalize">{prod.product}</span>
            <p>{prod.collection_name}</p> 
    </div>
            <div className="price-box-wrapper mt-0 col-12 col-md-4 text-md-end">
                      <p className={"iruppee mt-0 pt-0 mb-1"}>{`₹${prod.sale_price}`} <span className='cancel-amt'> {`₹${prod.price}`}</span><br></br><span className='discount-text1 d-lg-none'> {`Member Discount ₹${prod.discount}`}</span></p>
                </div></div>
                {prod.product_size.map((siz,index) => (
                <div key={index} className="d-flex gap-2 gap-md-5 ">
                <div class="product_detail_accordion-size">
          <select class="from-control" id="dropdownOption">
          <option value="" disabled selected>Size:</option>
           
              <option
                
                value={siz.size}
                className={selectedSize === siz.size ? 'size-click-button-active' : 'size-click-button-det'}
              >
                {siz.size}
              </option>
          </select>
        </div>
        <div class="product_detail_accordion-size mt-1">
          <select class="from-control d-block" id="dropdownOption">
          <option value="" disabled selected>qty</option>
              <option
                value={siz.stock}
              >
                {siz.stock}
              </option>
          </select>
        </div>
        </div>))}

    <div className="product_det-sm col-12 gap-2 d-none d-md-flex">
          <div className="cart-rem-btn-lg w-25 " onClick={()=>removebutton(prod.id)}>
             remove
          </div>

          <div className="cart-rem-btn">
            <button className={'sm-close-button1  bold_font'} onClick={()=>addwishlist(prod)}>
              <span> WISHLIST</span>
            </button>
          </div>
        </div>
        </div>         

            </div>
            <div className="product_det-sm col-12 d-flex d-md-none">
          <div className="cart-rem-btn-lg col-6 "  onClick={()=>removebutton(prod.id)}>       
                remove
          </div>

          <div className="cart-rem-btn-lg col-6"  onClick={()=>addwishlist(prod)}>         
              <span> whishlist</span>
          </div>
        </div>
            </div>
            

      )) :<div className='container fa-1x text-center'>your cart is empty</div>} </div>
      <div className="cart-rem-btn-lg justify-content-end fa-1x" onClick={totalremovebutton}>
              <FaTrash className='m-1 mb-2'/>Remove            
              </div></div>
       
            <div className="bx1">
      <div className={"seperator mb-1 mt-3 seperatorExtra"}>
</div>
      </div>  
      {/* Product detail ends here*/}
      <div className="col-12 col-lg-4 container-cart d-lg-none">
  
            <Accordion className="product_detail_accordion ">
      <Accordion.Item eventKey="0">
        <Accordion.Header  >Apply Coupon</Accordion.Header>
        <Accordion.Body>

  <div>
  <div className="input-box">
  
    <input
        id="coupon-input"
        name="coupon"
        type="text"
        value={selectCoupon}
        onChange={handleCouponCodeChange}
        placeholder="Enter Coupon Code"
      /><samp className="apply">Apply</samp>
      
      </div>
 
  </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Gift Voucher</Accordion.Header>
        <Accordion.Body>
        <div className="input-box">
  
  <input
      id="coupon-input"
      name="coupon"
      type="text"
      value={selectVoucher}
      onChange={handleVoucherChange}
      placeholder="Enter Gift Voucher "
    /><samp className="apply">Apply</samp>
    
    </div>
        </Accordion.Body>
      </Accordion.Item> </Accordion>  
      <div className="bx1">
      <div className={"seperator mb-3 mt-4"}></div>
      <div className="price-details"><span>BILLING DETAILS</span></div>
      <div className="col-12">
  <table className="table">
  <tbody className='table-body'>
      <tr>
        <td>Cart Total</td>
        <td><span className="price-amt">₹ 3597.3</span></td>
      </tr>
      <tr>
        <td>Member Discount</td>
        <td><span className="price-amt">- ₹ 400.00</span></td>
      </tr>
      <tr>
        <td>GST</td>
        <td><span className="price-amt">₹ 395.63</span></td>
      </tr>
      <tr>
        <td>Shipping Charges</td>
        <td><span className="price-amt colorgreen">Free</span></td>
      </tr>
      <tr>
        <td className='fbold'>Total Amount</td>
        <td><span className="price-amt">₹ 3593.00</span></td>
      </tr>
    </tbody>
  </table>
</div> 
<div className=" button-container mb-2 ">
    <button className=" col-12" onClick={navigatecheckout}>Place Order</button>             
</div> 
</div></div>

{/* similar product cart for all  devices................. */}
<div className={"seperator mb-1 d-lg-none seperatorExtra mt-4"}></div>
<div className="col-12"><span className='side-heading'>Similar Products</span></div>
<div className="">
<div class="d-flex flex-wrap">
        {productlist?.products.map((product) => (<> 
        <div key={product.id} className= "w-sm-50percent w-30percent ">
        <div  onClick={()=>onImageClick(product)}>
        <div className="productItem-sm " style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {/* productlist-sm............................................ */}  
        <SlickSlider {...settings} className='d-md-none'>  
        {product.product_images.map((product,index)=>
        index<2 &&
        <div key={index} className="productImageContainer">
         <img  className="sm-product-image" src={product.image_path_1}/>
         <img  className="sm-product-image" src={product.image_path_2}/>
         <div className="label new">New</div>
            
            <div className="product-heart"> 
                  <span
                    className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                    onClick={handleHeartClick}
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

              <div className="label new">New</div>         
<div className="product-heart">
      <span
        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
        onClick={handleHeartClick}
      ></span>
    </div>
              </div>
    )}
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
        </div></div></div>

  <div className="col-12 col-lg-4 d-none d-lg-block container">
 {/*  <div className=" button-container mb-2 ">
              <button className=" col-12" onClick={navigatecheckout}>Place Order</button>             
              </div> */}
            <Accordion className="product_detail_accordion ">
      <Accordion.Item eventKey="0">
        <Accordion.Header  >Apply Coupon</Accordion.Header>
        <Accordion.Body>

  <div>
  <div className="input-box">
  
    <input
        id="coupon-input"
        name="coupon"
        type="text"
        value={selectCoupon}
        onChange={handleCouponCodeChange}
        placeholder="Enter Coupon Code"
      /><samp className="apply">Apply</samp>
      
      </div>
 
  </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Gift Voucher</Accordion.Header>
        <Accordion.Body>
        <div className="input-box">
  
  <input
      id="coupon-input"
      name="coupon"
      type="text"
      value={selectVoucher}
      onChange={handleVoucherChange}
      placeholder="Enter Gift Voucher "
    /><samp className="apply">Apply</samp>
    
    </div>
        </Accordion.Body>
      </Accordion.Item> </Accordion>  
      <div className="bx1">
      <div className={"seperator mb-3 mt-3"}></div>
      <div className="price-details"><span>BILLING DETAILS</span></div>
      <div className="col-12">
  <table className="table">
  <tbody className='table-body'>
      <tr>
        <td>Cart Total</td>
        <td><span className="price-amt">₹ 3597.3</span></td>
      </tr>
      <tr>
        <td>Member Discount</td>
        <td><span className="price-amt">- ₹ 400.00</span></td>
      </tr>
      <tr>
        <td>GST</td>
        <td><span className="price-amt">₹ 395.63</span></td>
      </tr>
      <tr>
        <td>Shipping Charges</td>
        <td><span className="price-amt colorgreen">Free</span></td>
      </tr>
      <tr>
        <td className='fbold'>Total Amount</td>
        <td><span className="price-amt">₹ 3593.00</span></td>
      </tr>
    </tbody>
  </table>
  <div className=" button-container mb-2 ">
              <button className=" col-12" onClick={navigatecheckout}>Place Order</button>             
              </div>
</div> 
{/* <div className=" button-container mb-2 ">
    <button className=" col-12">Place Order</button>             
</div> */}
</div></div>

  </div>
    </>
  );
}



 {/* <Accordion className="product_detail_accordion-size mb-2 col-3 ">
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
                    </Accordion> */}
{/*     <div className="detail-rating"> <Rating rating={prod.rating} /></div> */}