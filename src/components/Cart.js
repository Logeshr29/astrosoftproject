import React, { useRef,useState,useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from 'react-slick';
import Rating from './Rating';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPercent, FaPercentage, FaTrash } from 'react-icons/fa';
import { ModalHeader } from 'react-bootstrap';
import AddressPayment from './AddressPayment';
import apiConfig from '../services/apiConfig';
import apiService from '../services/axiosService';

export default function Cart(){
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.number().required('Mobile Number is required'),
    postalcode: Yup.number().required('Postal Code is required'),
    // landmark: Yup.number().required('Land is required'),
    city: Yup.string().required('City Name is required'),
    street: Yup.string().required('Street  is required'),
    isDefault: Yup.boolean(), // Validation for the checkbox (optional)

  });
/*   const handlesubmitaddress = async (values, { setSubmitting }) => {
    // You can handle form submission here
    // values object contains form field values
    console.log(values);
    console.log(values);
    navigate('/checkout');

    // Send data to the backend
    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST', // Use the appropriate HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send form data as JSON to the backend
      });
  
      if (response.ok) {
        // Handle success
        console.log('Data sent successfully.');
        if (values.isDefault) {
          // Set the address as default here (You need to implement this logic)
          // You may want to send an additional request to your backend to update the default address.
          console.log('Address set as default.');
        }

      } 

       else {
        // Handle errors
        console.error('Failed to send data to the backend.');
      }
    
} catch (error) {
      console.error('An error occurred:', error);
    }
  
  
    setSubmitting(false);
  }; */

  const handlesubmitaddress = (values, { setSubmitting }) => {
    apiService.authpostMethod(apiConfig.address_api, values)
      .then(response => {
        // Handle success
        console.log('Data sent successfully:', response.data);
        if (values.isDefault) {
          // Set the address as default here (You need to implement this logic)
          // You may want to send an additional request to your backend to update the default address.
          console.log('Address set as default.');
        }
        // Navigate or perform any other action upon success
      })
      .catch(error => {
        // Handle errors
        console.error('Failed to send data to the backend:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
    const [selectedOption, setSelectedOption] = useState(''); // Initialize the selected option
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // Your array of options

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const customStyles = {
    color:'black',
    backgroundColor:'#ffff',
    border:'1px solid black',
   
    fontSize: '15px', // Adjust the font size as needed
    padding: '3px 10px', // Adjust the padding as needed
  };
  const customStyles_modal={
    height:'50vh'

  }
   const product = {
    items: [{
      id: 5,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 100,
      category: "Oversized T-shirts",
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',
      image2: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694232472_3410691.jpg?format=webp&w=160&dpr=1.3',
      rating: 4.8,
      size:['s','l','m','xl','xxl','xxxl'],
      qty: [
        { qty: '1' },
        { qty: '2' },
        { qty: '3' },
        { qty: '4' },
        { qty: '5' },
        { qty: '6' },
        { qty: '7' },
        { qty: '8' },
        { qty: '9' },
        { qty: '10' }, 
      ],

quantity:'',
      },
       {
         id: 111,
        name: 'Product 2',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       price: 100,
       category:"Oversized T-shirts",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',

       image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694232472_3410691.jpg?format=webp&w=160&dpr=1.3',
         rating: 4.8,
         size:['s','l','m','xl','xxl','xxxl'],
         // qty:2
         qty: [
          { qty: '1' },
          { qty: '2' },
          { qty: '3' },
          { qty: '4' },
          { qty: '5' },
          { qty: '6' },
          { qty: '7' },
          { qty: '8' },
          { qty: '9' },
          { qty: '10' }, ],
         quantity:'',

       }
    ],
}

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
  };})
  const ArrowButton = ({ type, onClick }) => {
    return (
      <button className={`arrow-button ${type}`} onClick={onClick}>
        {type === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </button>
    );
  };

const [selectedSize, setSelectedSize] = useState('Size'); // Initialize with default text
const [selectedQty, setSelectedQty] = useState(1); // Initialize with default text
const [QtyId,setSelectedQtyId]=useState('');
const [selectCoupon,setCouponValue]=useState(null);
const [selectVoucher,setVoucherValue]=useState(null);
const [ deliveryProduct,setDeliveryProduct]=useState([]);
const [login,setlogin]=useState(false)
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
  prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,


};
const navigatecheckout=()=>{
  navigate("/deliveryaddress")
}
 /////////////////////////////
 let subtitle;
 const [modalIsOpen, setIsOpen] = React.useState(false);

 function openModal() {
   setIsOpen(true);
 }

 function afterOpenModal() {
   // references are now sync'd and can be accessed.
  //  subtitle.style.color = '#f00';
 }

 function closeModal() {
   setIsOpen(false);
 }
 
const navigateCart=()=>{
  navigate('/deliveryaddress');

}
const addtoDeliver=(product)=>{
        if(selectedQty===1){

    product.items.map((prod,index)=>{
      prod.quantity=selectedQty;

  
    console.log(product,"produdt");

    })  
      }
      if(selectedQty!==null){
        console.log(deliveryProduct,"deee");
      }


  console.log(product,"product");
  console.log(product,"prfrr");
navigate('/checkout');
  // navigate('/registeration-form');

}

const handleQtyClick = (quantity,id) => {
  console.log(id,"indee");

    product.items.map((prod)=>{
      if(prod.id===id){
        setSelectedQty(quantity);
        setSelectedQtyId(id);
      prod.quantity=quantity;
  }
  if(quantity)
  {
    const qtyamt=prod.price*quantity;
    setqtyamount(qtyamt)
  }
  console.log(QtyId,"ssss");
  console.log(product,"produdt");

})  
  console.log(deliveryProduct,"delvieryporduct");

 }; 
 const productlist = [
   
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
    }

];
const [qtyamount,setqtyamount]=useState('')
const [address, setAddress] = useState('green'); // Initialize address state variable
const [payment,setPayment]=useState('');
const [sizeAlert,setSizeAlert]=useState(false);
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
// Event handler function to update the state when the input changes
const handleCouponCodeChange = (event) => {
  setCouponValue(event.target.value);
};
const handleVoucherChange = (event) => {
  setVoucherValue(event.target.value);
};
const [bottomModalOpen, setIsBottomModalOpen] = useState(false);

const openBottomModal = () => {
  console.log("sss");
  setIsBottomModalOpen(true);
};
const closeBottomModal = () => {
  setIsBottomModalOpen(false);}
  const BottomModal =({isBottomModalOpen,bottomCloseModal})=>{
    return (<> 
     <div       className={`modal-container ${isBottomModalOpen ? 'modal-open' : ''}`}
>
<div className="displayflex">
  <div className="w-50">
  <div className="side-heading  text-underline ">Cart Total  {}</div>
         <div className="side-heading  text-underline ">GST  {}</div>
         <div className="side-heading  text-underline colorgreen">Discount  {}</div>
         
  </div>
  <div className="w-50">
  <div className="side-heading  text-underline ">₹350</div>
         <div className="side-heading  text-underline ">₹20</div>
         <div className="side-heading  text-underline colorgreen">₹30</div>
    
  </div>
</div>
        <div className="displayflex">
        

        <div className="amount-flex">
        
      <div className={"font-body ht-01 side-heading"}>₹ {product.totalamount}</div>
  
      </div>
            </div>
    </div></>)};
    return(<>
    
        <div className="container-cart d-block d-lg-flex">
     
    <div className="overflow-y col-12 col-lg-7">
      {/* address container */}
     <div className="flex m-2">
        <div className="col-9 col-xl-10 p-1 p-lg-0 address-container">
        <div className="col-12"><span>Deliver To:</span>Logesh R,638751</div> 
        <div  className="col-11"><p>83 ,chinnakattupalayam, Perundurai Subdistrict, Erode District</p></div></div>
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
        {product.items.map((prod) => (<div className="container-ecom">
            <div className=" p-0 col-12 d-flex ">
            <div key={prod.id} className="cart-img-sm col-4 col-md-3 col-lg-4 col-xl-3">
                 <img src={prod.image2} alt={"image2"}
        /> </div>
        <div className="cart-detail-sm column-container col-8 col-md-8 col-lg-8 col-xl-9 ">
          <div className="col-12 d-flex">
          <div className={' prod-cart col-7 col-md-8 '}>
            <span>Batman: Madness In Gotham</span>
            <p>{prod.category}</p> 
    </div>
            <div className="price-box-wrapper mt-0 col-5 text-end">
                      <p className={"iruppee mt-0 pt-0"}>₹799 <span className='cancel-amt'> ₹999</span><br></br><span className='discount-text1'> Member Discount ₹ 200</span></p>
                </div></div>
                <div className="d-flex gap-5">
                <div class="product_detail_accordion-size ">
          <select class="from-control" id="dropdownOption">
          <option value="" disabled selected>Size:</option>
            {prod.size.map((siz,index) => (
              <option
                key={index}
                value={siz}
                className={selectedSize === siz ? 'size-click-button-active' : 'size-click-button-det'}
              >
                {siz}
              </option>
            ))}
          </select>
        </div>
        <div class="product_detail_accordion-size ">
          <select class="from-control d-block" id="dropdownOption">
          <option value="" disabled selected>qty</option>
          {prod.qty.map((qtyOption, index) => (
              <option
              key={index}
                value={qtyOption.qty}
              >
                {qtyOption.qty}
              </option>))}
          </select>
        </div>
        </div>
    
    <div className='day mb-1'>Delivery by 22 Feb, Thursday</div>

    <div className="product_det-sm">
          <div className="cart-rem-btn">
              <button
                className={'cart-remove  bold_font'}
              ><FaTrash className='m-1 mb-2'/>
                Remove
              </button> 
          </div>

          <div className="cart-rem-btn">
            <button className={'sm-close-button1  bold_font'}>
              <span> WISHLIST</span>
            </button>
          </div>
        </div>


        </div>         

            </div>
            </div>

      ))

        } </div>
      <div className="remove-btn">
              <button ><FaTrash className='m-1 mb-2'/>Remove</button>             
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

      <div className="add-item">
            <div className="side-heading">You May also like</div>
<div className="displayflex mt-0 flex-wrap">
          {productlist.map((item, index) => (<>
      <div key={index} className="productItem-sm  col-6 col-sm-4 col-md-4 col-lg-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="productImageContainer  ">
        <img   className="sm-product-image w-100"
        // onClick={()=>[onImageClick(item),hideCarousel]}
          src={item.image} alt={item.categoryName} />
      </div>
         <div className="product__item__text">
        <h6>{item.name}</h6>
          {/* <Rating rating={product.rating} /> */}
  
           <div className="product__price">₹ {item.price}</div>
         </div>
         <button className={'sm-close-button'}>
          Add Now
        </button></div>
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
  <div className=" button-container mb-2 ">
              <button className=" col-12" onClick={navigatecheckout}>Place Order</button>             
              </div>
</div> 
{/* <div className=" button-container mb-2 ">
    <button className=" col-12">Place Order</button>             
</div> */}
</div></div>

  </div>
           </>);
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