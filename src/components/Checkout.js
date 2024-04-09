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


  const Checkout=(props)=>{
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
  const handlesubmitaddress = async (values, { setSubmitting }) => {
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
    const product={
      
      items:[{
        id: 5,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 100,
        category:"Oversized T-shirts",
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',

        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694232472_3410691.jpg?format=webp&w=160&dpr=1.3',
        rating: 4.8,
        size:['s','l','m'],
        // qty:1
        qty:['1','2','3','4','5','6','7','8','9','10'],

quantity:'',
      },
       {
         id: 111,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         price: 100,
        image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691839500_6225046.jpg?format=webp&w=480&dpr=2.0',

        image2:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694232472_3410691.jpg?format=webp&w=160&dpr=1.3',
        rating: 4.8,
         size:['s','l','m'],
         qty:2,
         qty:['1','2','3','4','5','6','7','8','9','10'],
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
const [ deliveryProduct,setDeliveryProduct]=useState([]);
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
  prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,


};
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
const address=true;
    const payment=true;

const handleQtyClick = (quantity,id) => {
  console.log(id,"indee");

    product.items.map((prod,index)=>{
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
const [qtyamount,setqtyamount]=useState('')
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };
  
    return (
      <div>
      <div className="container-cart mt-3 mb-4 p-2">
      <div className="multi_step_bar d-flex justify-content-center">
                <div className="">My Cart</div>
                {address ? (
                        <div className="dotted-line-green w-20percent"></div>
                    ) : (
                        <div className="dotted-line w-15percent "></div>
                    )}
                <div className=" padding-left">Address</div>
                {payment ? (
                        <div className="dotted-line-green w-20percent"></div>
                    ) : (
                        <div className="dotted-line w-15percent "></div>
                    )}
                <div className="">Payment</div>
                </div> </div>
    <div className="container-cart d-block d-lg-flex">
     
    <div className="overflow-y col-12 col-lg-7">
      {/* address container */}
     <div className="flex m-2">
        <div className="col-9 col-xl-10 p-1 p-lg-0 address-container">
        <div className="col-12"><span>Deliver To:</span>Logesh R,638751</div> 
        <div  className="col-11"><p>83 ,chinnakattupalayam, Perundurai Subdistrict, Erode District</p></div></div>
        <div className="col-xs-11 col-3 col-sm-2  col-xl-1 change-btn" >Change</div> 
      </div>
    <div className={"seperator mb-3 seperatorExtra"}>

      </div>  

  {/* ------------------------------- payment and price details*/}
  <div className="price-pay d-md-flex">
  <div className="col-12">
<div className="heading border-top-1">Payment Options</div>

<div className="payment-option col-12  col-md-12">  

  <Accordion className="product_detail_accordion"  activeKey={activeKey} onSelect={handleSelect}>
<Accordion.Item eventKey="0">
  <Accordion.Header>UPI</Accordion.Header>
  <Accordion.Body>

  <div>
<div className=" d-flex col-dir">

<div class="d-flex">
<img className="payment-logo" src="img/paytm.png" alt="Paytm" />
<div class="f-14 ml mt">Paytm</div>
</div>

<div class="d-flex">
<img className="payment-logo" src="img/gpay.png" alt="Google Pay" />
<div class="f-14 ml mt">Google Pay</div>
</div>

<div class="d-flex">
<img className="payment-logo" src="img/phonepe.png" alt="PhonePe" />
<div class="f-14 ml mt">PhonePe</div>
</div>
</div>


</div>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Wallet</Accordion.Header>
  <Accordion.Body>
  <div>
<div className=" d-flex col-dir">

<div class="d-flex">
<img className="payment-logo" src="img/paytm.png" alt="Paytm" />
<div class="f-14 ml mt">Paytm</div>
</div>

<div class="d-flex">
<img className="payment-logo" src="img/gpay.png" alt="Google Pay" />
<div class="f-14 ml mt">Google Pay</div>
</div>

<div class="d-flex">
<img className="payment-logo" src="img/phonepe.png" alt="PhonePe" />
<div class="f-14 ml mt">PhonePe</div>
</div>
</div>


</div>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header  >Credit & Debit Cards</Accordion.Header>
  <Accordion.Body>

<div>
<div className="input-box">



</div>

</div>
  </Accordion.Body>
</Accordion.Item> 
<Accordion.Item eventKey="3">
  <Accordion.Header  >Net Banking</Accordion.Header>
  <Accordion.Body>


  </Accordion.Body>
</Accordion.Item>    

<Accordion.Item eventKey="4">
  <Accordion.Header  >Cash on Delivery</Accordion.Header>
  <Accordion.Body>
  <div className="cash-radio-select">
<label>
<input type="checkbox" name="paymentMethod" value="Cash on Delivery" />
Cash on Delivery
</label>

</div> 

  </Accordion.Body>
</Accordion.Item> 
</Accordion>  
</div></div></div></div>
  <div className="col-12 col-lg-4 d-lg-block container">
  <div className=" button-container mb-2 d-none d-lg-flex ">
              <button className=" col-12">Pay Now</button>             
              </div>  
      <div className="bx1 mt-3">
      <div className="price-details"><span>BILLING DETAILS</span></div>
      <div className="col-12">
  <table className="table">
    <tbody className='table-body'>
      <tr>
        <td>Cart Total</td>
        <td><span className="price-amt">₹ {props.carttotal}</span></td>
      </tr>
      <tr>
        <td>Member Discount</td>
        <td><span className="price-amt">- ₹ 400.00</span></td>
      </tr>
      <tr>
        <td>GST</td>
        <td><span className="price-amt">₹ {props.gstamount}</span></td>
      </tr>
      <tr>
        <td>Shipping Charges</td>
        <td><span className="price-amt colorgreen">Free</span></td>
      </tr>
      <tr>
        <td className='fbold'>Total Amount</td>
        <td><span className="price-amt">₹ {props.carttotal+props.gstamount}</span></td>
      </tr>
    </tbody>
  </table>
  <div className=" button-container mb-2 ">
              <button className=" col-12">Pay Now</button>             
              </div>  
</div> 
{/* <div className=" button-container mb-2 ">
    <button className=" col-12">Place Order</button>             
</div> */}
</div></div>
</div></div>
);
}
export default Checkout