
import Rating from './Rating'; // Replace './Rating' with the actual path to your Rating component
// import React from 'react';
// import SideModal from './SideModal';

import React, { useRef,useState,useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { useNavigate,useHistory, useLocation } from 'react-router-dom';
// import Slider from 'react-slick';
// import Slider from 'rc-slider';
import Slider  from 'rc-slider';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThinHeartIcon from './HeartIcon';
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';



export default function ProductList  () {
  const navigate=useNavigate();
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range
  const location = useLocation();
  const { state } = location;
  console.log(state.item.id);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false, // Hide the default previous arrow
    nextArrow: false, // Hide the default next arrow
    
  
  };


const [selectedItems, setSelectedItems] = useState([]);
const [selectedSize,setSelectedSize]=useState([]);
const [selectGender,setSelectGender]=useState([]);
const [productlist,setproductlist]=useState(null)
const [user,setuser]=useState(JSON.parse(sessionStorage.getItem('user')))
const [wishlist,setwishlist]=useState(JSON.parse(localStorage.getItem('wishlist'))||[])

useEffect(() => {
  console.log(selectedItems, "selected items");
  console.log(selectedSize,"seldetedsize")
    const fetchproductlist=()=>{
      apiService.getMethod(`${apiConfig.productlist}/${state.item.id}`)
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
}, [selectedItems,selectedSize]);

const handlePriceChange = (values) => {
  setPriceRange(values);
};

const toggleSelection = (item) => {
  
  if (selectedItems.includes(item)) {
    setSelectedItems(selectedItems.filter(selected => selected !== item));
  } else {
    setSelectedItems([...selectedItems, item]);
  }

  console.log(selectedItems,"seledcteditesm");
};
const toggleSelectionsize=(item)=>{
  if (selectedSize.includes(item)) {
    setSelectedSize(selectedSize.filter(selected => selected !== item));
  } else {
    setSelectedSize([...selectedSize, item]);
  }

}
const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const [bottomModalOpen, setIsBottomModalOpen] = useState(false);

  const openBottomModal = () => {
    setIsBottomModalOpen(true);
  };

  const closeBottomModal = () => {
    setIsBottomModalOpen(false);}
function onImageClick(item){
  console.log("hellobabay");
  navigate('/product-detail',{ state: { item }});


}
console.log(productlist)
const BottomModal =({isBottomModalOpen,bottomCloseModal})=>{
  return (<> 
   <div >
    {/* <button onClick={openModal}>Open Modal</button> */}
    <div
      className={`modal-container ${isBottomModalOpen ? 'modal-open' : ''}`}
    >
            <button className="cancelX" onClick={closeBottomModal}>x</button>

      <div>
        {/* <samp>Price Range</samp> */}
        {/* <ul class="ddMenu">
            <li><a href="#">ONe</a></li>
            <li><a href="#">Two</a></li>
            <li class="last"><a href="#">Three</a></li>
        </ul> */}
        <p  className="text-center text-underline ">Below 500</p>
        <p className="text-center text-underline">Rs.500-Rs.1000</p>
        <p className="text-center text-underline">Rs.1000-Rs.2000</p>
        <p className="text-center text-underline">Above 2000</p>

        {/* Content of your modal */}
      
      </div>
    </div>
  </div></>);
}
const SideModal = ({ isOpen, onClose }) => {
  return (
    <div className={`side-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
          <Accordion defaultActiveKey="0" className="mob-filter product_detail_accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Product</Accordion.Header>
        <Accordion.Body>
  <div>
    {garments_category.map((item, index) => (
      <button
        key={index}
        onClick={() => toggleSelection(item.garmentName)}
        className={selectedItems.includes(item.garmentName) ? 'multi-select-button-selected' : 'multi-select-button'}
      >
        {item.garmentName}
      </button>
    ))}
  </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
        <div       className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}>

        <label  className={selectGender === 'Male' ? 'active':''}>
        <input
          type="radio"
          value="Male"
          checked={selectGender === 'Male'}
          className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}

          onChange={handleOptionChange}
        />
        Male
      </label> </div>
      <div       className={selectGender === 'Female' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Female"
          checked={selectGender === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label> </div>
      <div       className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Kids"
          checked={selectGender === 'Kids'}
          onChange={handleOptionChange}
          className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}

        />
      Kids
      </label></div>

      <div       className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}>
      <label>
        <input
          type="radio"
          value="Unisex"
          checked={selectGender === 'Unisex'}
          onChange={handleOptionChange}
          className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}
          />
        Unisex
      </label></div>
        </Accordion.Body>

        
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
  <div>
    {sizes.map((siz, index) => (
      <button
        key={index}
        onClick={() => toggleSelectionsize(siz.size)}
        className={selectedSize.includes(siz.size) ? 'multi-select-button-selected' : 'multi-select-button'}
      >
        {siz.size}
      </button>
    ))}
  </div>
        </Accordion.Body>
      </Accordion.Item>
  
      <Accordion.Item eventKey="4">
        <Accordion.Header className="custom-accordion-header">Price</Accordion.Header>
        
        <Accordion.Body>
        <div>
      <Slider
        range
        min={0}
        max={1000}
        step={10}
        value={priceRange}
        onChange={handlePriceChange}
        railStyle={{ backgroundColor: '#ccc', height: 5 }}
        trackStyle={[{ backgroundColor: 'tomato' }]}
        handleStyle={[{ borderColor: 'tomato' }, { borderColor: 'tomato' }]}
        dotStyle={{ borderColor: 'tomato' }}
      />
      <small>
        Price Range: {priceRange[0]} - {priceRange[1]}
      </small>
    </div>

        </Accordion.Body>

        
      </Accordion.Item>
    </Accordion>
 
          {/* </div> */}

        
       
        {/* Your modal content goes here */}
      </div>
      <div className="fixed-footer-sm">
        <div className="col-12 w-100  displayflex">
          <div className="col-6">
    <button
        onClick={() => toggleSelection()}
        className={  'sm-button'}
      >Apply</button></div>
      <div className="col-6">
       <button className={'sm-close-button'} onClick={onClose}>
          Cancel
        </button></div>         
          </div></div>
    </div>
  );
};

const garments_category=[
  {
  garmentId:1,
  garmentName:"shirt",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection-tile-Banner_solids_2_O7wgu5E.jpg?format=webp&w=480&dpr=1.3",

  categoryType:"garment",


  
}
, {
  garmentId:1,
  garmentName:"T-shirt",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Types-of-Shirts_Collection-tile_Nj4ui2u.jpg?format=webp&w=480&dpr=1.3",
  categoryType:"garment"
  
}
, {
  garmentId:1,
  garmentName:"Round Neck",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Supima-Hanger_Collection-Tile_3DciLHU.jpg?format=webp&w=480&dpr=1.3",

  categoryType:"garment"
  
},
{
  garmentId:1,
  garmentName:"Joggers",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-Tile_1_QJXzB4L.jpg?format=webp&w=480&dpr=1.3",

  categoryType:"garment"
  
}, {
  garmentId:1,
  garmentName:"Shorts",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tilesg.jpg?format=webp&w=480&dpr=1.3",

  categoryType:"garment"
  
}, {
  garmentId:1,
  garmentName:"Tank and Top",
  image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_2EtB3xN.jpg?format=webp&w=480&dpr=1.3",

  categoryType:"garment"
  
}


]
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

const handleOptionChange = (event) => {
  setSelectGender(event.target.value);
};
const [isFilled, setIsFilled] = useState(false);

const handleHeartClick = () => {
  setIsFilled(!isFilled);
};

const addwishlist=(item)=>{
  console.log(item)
  console.log(productlist)
  const newitem = productlist.products.filter((product) => item.product_id=== product.id);
  console.log(newitem);

  if(!user)
  {

    const userid=prompt("enter the user id")
    if(userid)
    {
      const cartprod = {
        userid: userid,
        product: [ ...newitem],
      };
    setuser(userid)
    sessionStorage.setItem("user",JSON.stringify(userid))
    wishlist.push(cartprod);
    setwishlist(wishlist)
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
    if(wishlist)
    alert(`product added to wishlist of user ${user}`)
    }
    else
    {
      alert("please enter the user id")  
    }
  }
  else{
    const cartprod = {
      userid: user,
      product: [ ...newitem],
    };
  wishlist.push(cartprod);
  setwishlist(wishlist)
  localStorage.setItem("wishlist",JSON.stringify(wishlist))
  if(wishlist)
  alert(` product added to wishlist of user${user}`)
  }
};

    return (
      productlist ? (
<>    
<div className="container-ecom">
<img className="product-img-banner" src={productlist?.fandom_category_image_path}/>
<img className="product-img-banner-small-screen" src={productlist?.fandom_category_image_path}/>
</div>

<div className="container-ecom">
<div className="sm-product" >
        {productlist?.products.map((product) => (<> <div key={product.id} className= "product-list-sm">
        <div  onClick={()=>onImageClick(product)}>
        <div className="productItem-sm" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            
        <SlickSlider {...settings}>
        {product?.product_images.map((product,index)=>
        index<2 &&
        <div key={index} className="productImageContainer position-relative">
         <img  className="sm-product-image" src={product.image_path_1}/>
         <img  className="sm-product-image" src={product.image_path_2}/>
         <div className="label new">New</div>
            
            <div className="product-heart"> 
                  <span
                    className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                    onClick={() => addwishlist(product)}
                  ></span>
                </div>
        </div>
          )}
              
    </SlickSlider>
    
    <div className="product__item__text">
              <h6>{product.product}</h6>
              <Rating rating={product.rating} />
    
              <div className="price-box-wrapper">
                  <span className="leftPrice">
                    <span className="fprice">
                      <p className={"iruppee product__price p-2"}>{`₹${product?.price}`} <span className='cancel-amt'>{(product?.price)+(product?.discount)}</span></p>
                    </span>
                  </span>
                </div>
            </div>
    
    </div></div>
              </div>
             
       </>
        ))}



        </div>
        <BottomModal isBottomModalOpen={bottomModalOpen} onClose={closeBottomModal}/>

        <SideModal isOpen={modalOpen} onClose={closeModal} />

        <div className="sticky-footer-sm">
          <div className="col-12 w-100 filter-sm">
            <div className="col-6 filter-sm-border">
            <button type="button" className="btn w-100   light Dark-text card-removeButton text-uppercase"onClick={openModal}>        
            
            <img className="filter-img-sm" src="https://prod-img.thesouledstore.com/public/theSoul/images/filterIcons/ic_filter.png?format=webp&w=160&dpr=2.0"></img>
           Filter </button>
            
              </div>
              <div className="col-6 filter-sm-border">
            <button type="button" className="btn w-100   lightDark-text card-removeButton text-uppercase" onClick={openBottomModal}>        
            
            <img className="filter-img-sm" src="https://prod-img.thesouledstore.com/public/theSoul/images/filterIcons/ic_sort.png?format=webp&w=200&dpr=2.0"></img>
           Sort </button>
            
              </div>

          </div>
  </div>
<div className="productsFilterContainer">
  {/* <div className="container-ecom"> */}
<div className="filterContainer">
          <Accordion className="product_detail_accordion"defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Product</Accordion.Header>
        <Accordion.Body>
  <div>
    {garments_category.map((item, index) => (
      <button
        key={index}
        onClick={() => toggleSelection(item.garmentName)}
        className={selectedItems.includes(item.garmentName) ? 'multi-select-button-selected' : 'multi-select-button'}
      >
        {item.garmentName}
      </button>
    ))}
  </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
        <div       className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}>

        <label  className={selectGender === 'Male' ? 'active':''}>
        <input
          type="radio"
          value="Male"
          checked={selectGender === 'Male'}
          className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}

          onChange={handleOptionChange}
        />
        Male
      </label> </div>
      <div       className={selectGender === 'Female' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Female"
          checked={selectGender === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label> </div>
      <div       className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Kids"
          checked={selectGender === 'Kids'}
          onChange={handleOptionChange}
          className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}

        />
      Kids
      </label></div>

      <div       className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}>
      <label>
        <input
          type="radio"
          value="Unisex"
          checked={selectGender === 'Unisex'}
          onChange={handleOptionChange}
          className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}
          />
        Unisex
      </label></div>
        </Accordion.Body>

        
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
  <div>
    {sizes.map((siz, index) => (
      <button
        key={index}
        onClick={() => toggleSelectionsize(siz.size)}
        className={selectedSize.includes(siz.size) ? 'multi-select-button-selected' : 'multi-select-button'}
      >
        {siz.size}
      </button>
    ))}
  </div>
        </Accordion.Body>
      </Accordion.Item>
  
       <Accordion.Item eventKey="3">
        <Accordion.Header >Gender</Accordion.Header>
        <Accordion.Body>
        <div       className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}>

        <label  className={selectGender === 'Male' ? 'active':''}>
        <input
          type="radio"
          value="Male"
          checked={selectGender === 'Male'}
          className={selectGender === 'Male' ? 'multi-select-button-selected' : 'multi-select-button'}

          onChange={handleOptionChange}
        />
        Male
      </label> </div>
      <div       className={selectGender === 'Female' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Female"
          checked={selectGender === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label> </div>
      <div       className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}>

       <label>
        <input
          type="radio"
          value="Kids"
          checked={selectGender === 'Kids'}
          onChange={handleOptionChange}
          className={selectGender === 'Kids' ? 'multi-select-button-selected' : 'multi-select-button'}

        />
      Kids
      </label></div>

      <div       className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}>
      <label>
        <input
          type="radio"
          value="Unisex"
          checked={selectGender === 'Unisex'}
          onChange={handleOptionChange}
          className={selectGender === 'Unisex' ? 'multi-select-button-selected' : 'multi-select-button'}
          />
        Unisex
      </label></div>
        </Accordion.Body>

        
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="custom-accordion-header">Price</Accordion.Header>
        
        <Accordion.Body>
        <div>
      <Slider
        range
        min={0}
        max={1000}
        step={10}
        value={priceRange}
        onChange={handlePriceChange}
        railStyle={{ backgroundColor: '#ccc', height: 5 }}
        trackStyle={[{ backgroundColor: 'tomato' }]}
        handleStyle={[{ borderColor: 'tomato' }, { borderColor: 'tomato' }]}
        dotStyle={{ borderColor: 'tomato' }}
      />
      <div>
        Price Range: {priceRange[0]} - {priceRange[1]}
      </div>
    </div>

        </Accordion.Body>

        
      </Accordion.Item>
    </Accordion>
  <div className="text-center">
    <button
        onClick={() => toggleSelection()}
        className={  'button'}
      >Apply</button>         
          </div
          
          
          ></div>

          <div className="row img">
      {productlist?.products.map((product) => (<>
        <div key={product.id} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            
{/* productlist-lg.................................................... */}
<div className="productImage d-none d-md-flex" onClick={()=>onImageClick(product)}>
    {product?.product_images.map((product,index)=>
        index<2 &&
              <div key={product.id} className="productImageContainer" >
              <img src={product.image_path_1} alt={product.name} className="productImage1" />
          <img src={product.image_path_2} alt={product.name} className="productImage1 productImage2" />

              <div className="label new">New</div>         
      <div className="product-heart">
            <span
        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
        onClick={() => addwishlist(product)}
      ></span>
    </div>
              </div>
    )}
            </div>

          
            
            <div className="product__item__text">
              <h6>{product.product}</h6>
              <Rating rating={product.rating} />
    
              <div className="price-box-wrapper">
                  <span className="leftPrice">
                    <span className="fprice">
                      <p className={" product__price p-1"}>{`₹${product?.price}`} <span className='cancel-amt'>{(product?.price)+(product?.discount)}</span></p>
                    </span>
                  </span>
                </div>
            </div>
            </div>
          </div>
        </>
      ))}

    </div></div>

          
</div></>):<div className='loading'> <div className="circle"></div>loading...</div>
)};
