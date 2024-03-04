
import Rating from './Rating'; // Replace './Rating' with the actual path to your Rating component
// import React from 'react';
// import SideModal from './SideModal';

import React, { useRef,useState,useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { useNavigate,useHistory } from 'react-router-dom';
// import Slider from 'react-slick';
// import Slider from 'rc-slider';
import Slider  from 'rc-slider';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ThinHeartIcon from './HeartIcon';

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

export default function WomenProductList  () {
  const navigate=useNavigate();
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range


  
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
useEffect(() => {
  console.log(selectedItems, "selected items");
  console.log(selectedSize,"seldetedsize")
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
  navigate('/women-product-detail', { state: { item } });


}

const BottomModal =({isBottomModalOpen,bottomCloseModal})=>{
  return (<> 
   <div>
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


    return (<>
<div className="container-ecom">
<img className="product-img-banner" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4529120230711120652.jpg?format=webp&w=1500&dpr=1.3"/>
<img className="product-img-banner-small-screen" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/5650820230711120652.jpg?format=webp&w=576&dpr=2.0"/>
</div>

<div className="container-ecom">
<div class="sm-product" >
        {productlist.map((product) => (<> <div className= "product-list-sm">
        <div  onClick={()=>onImageClick(product)}>
        <div className="productItem-sm" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              
        <SlickSlider {...settings}>

        <div className=" productImageContainer">
               <img   key={product.id}
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
              <span
                className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
                onClick={handleHeartClick}
              ></span>
            </div>
        </div>
        
        {/* </div> */}   
    </SlickSlider>
  
    <div className="product__item__text">
              <h6>{product.name}</h6>
              <Rating rating={product.rating} />
    
              <div className="product__price">₹ {product.price}</div>
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
            <button type="button" className="btn w-100   lightDark-text card-removeButton text-uppercase"onClick={openModal}>        
            
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



      {productlist.map((product) => (<>
        <div key={product.id} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            <div className="productImage">
              
              <div className="productImageContainer" onClick={()=>onImageClick(product)}>
              <img src={product.image} alt={product.name} className="productImage1" />
          <img src={product.image2} alt={product.name} className="productImage1 productImage2" />
          
        
                    
                
              <div className="label new">New</div>
            
<div className="product-heart">
      <span
        className={`icon_heart_alt ${isFilled ? 'filled' : ''}`}
        onClick={handleHeartClick}
      ></span>
    </div>
              </div>

          
            </div>
            <div className="product__item__text">
              <h6>{product.name}</h6>
              <Rating rating={product.rating} />
    
              <div className="product__price">₹ {product.price}</div>
            </div>
          </div>
        </div></>
      ))}

    </div></div>

          
</div>


    </>
);
    };

