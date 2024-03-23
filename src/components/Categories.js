// import React from 'react';
import React, { useRef,useState,useEffect } from 'react';
import ThinHeartIcon from './HeartIcon';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

import AdvertismentCarousel from './AdvertismentCarousel';
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';


function Categories({ onImageClick,hideCarousel}) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
const [hidCarousel,setHideCaroulsel]=useState(false);
const [slidesToShow, setSlidesToShow] = useState(3);
const [Fandomcategory,setfandomcategory]=useState(null)
const [collections,setcollections]=useState(null)
const [category,setcategories]=useState(null)

useEffect(()=>
{
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
  /* fetching fandom data.......... */
  const fetchfandom=()=>{
  apiService.getMethod(apiConfig.fandom_category)
  .then((response)=>{
    console.log(response.data)
  setfandomcategory(response.data)})
  .catch((error)=>
  {console.log(error)})
}
/* fetching collection data ........ */
const fetchcollections=()=>{
  apiService.getMethod(apiConfig.collections)
  .then((response)=>{
    console.log(response.data)
  setcollections(response.data)})
  .catch((error)=>
  {console.log(error)})
}
/* fetching categories data........... */
const fetchcategories=()=>{
  apiService.getMethod(apiConfig.category)
  .then((response)=>{
    console.log(response.data)
  setcategories(response.data)})
  .catch((error)=>
  {console.log(error)})
}
fetchfandom();
fetchcollections();
fetchcategories();

handleResize(); // Call once on mount to set initial slidesToShow
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  }
},[]);


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
  slidesToScroll:1.5,
  nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
  prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,
};

function onImageClick(item){
  navigate('/product-list', { state: { item} });
}
const categorys=[
  {
    id:1,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Men-Website-tile-big-one_2_yl4bfKC.jpg?format=webp&w=480&dpr=1.3"
  },
  {
    id:2,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Holiday-Shirts_anldGWZ.jpg?format=webp&w=480&dpr=1.3"
  },
  {
    id:3,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Big_Oversized-Tshirts_PEf1RPs.jpg?format=webp&w=480&dpr=1.3"
  },
  {
    id:4,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Boxer-Shorts_y19uNHm.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:5,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Cargo-Joggers_9scr0x5.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:6,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Drop_Cut_T-Shirts_1_EVtKbQN.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:7,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Jeans_9KUu0BW.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:8,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Full-Sleeve-Tshirts_I5VcSSi.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:9,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Shoes_84NVQVN.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:10,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_1_shorts_AEOMhLP.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:11,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_1_shorts_AEOMhLP.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:12,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Tushar_men-version_1_polos_wBN8V34.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:13,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_men-Supima_kREPZT6.jpg?format=webp&w=360&dpr=1.3"
  },
  {
    id:14,
    name:"jeans",
    image_path:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/WebsiteTiles_Small_Perfumes_EmjUuds.jpg?format=webp&w=360&dpr=1.3"
  },

]
return ( Fandomcategory  && collections ?
  <>  
  {!hidCarousel &&  <> <AdvertismentCarousel/>
  <div className="container-ecom p-0">
  <div className="newarrival-container">
	 
    <div className="newarrival-container-title">
    <h3 className="title">Shop By Fandom</h3></div>
  <Slider  {...settings}>
    {Fandomcategory?.fandom_category.map((item) => (
      <div key={item.id} className="fandomImage">
        <img   onClick={()=>[onImageClick(item),setHideCaroulsel(true)]}  src={item.image_path} alt={item.name} />
      </div>
    ))}
  </Slider>
  
  </div></div>
<div className="container-ecom p-0">
  <div className="newarrival-container">
	 
   <div className="newarrival-container-title">
   <h3 className="title">Collections</h3></div>
   <Slider {...settings}>
   {collections?.collections.map((item) => (
     <div key={item.id} className="fandomImage " >
       <img onClick={()=>onImageClick(item)}  src={item.image_path} alt={item.collection} />
     </div>
   ))}
 </Slider>
 
 </div></div>

  <div className="container-ecom">
 <div className="category-heading col-md-12">
    <span>Categories</span>
  </div> 
  
  <div className=" category-larg ">
  {categorys?.map((prod, index) => (
      (index <= 2) && (
        <div className="bx col-4" key={prod.id}>
          <div className="tilethumb">
            <div className="homeCatTile pointer scaleImg zoom loaded">
              <img onClick={onImageClick} src={prod.image_path} alt={`Product ${prod.id}`} />
            </div>
          </div>
        </div>
      )
    ))}
  {categorys?.map((prod, index) => (
      (index >= 3 && index <= 6) && (
        <div className="bx col-3" key={prod.id}>
          <div className="tilethumb">
            <div className="homeCatTile pointer scaleImg zoom loaded">
              <img onClick={onImageClick} src={prod.image_path} alt={`Product ${prod.id}`} />
            </div>
          </div>
        </div>
      )
    ))}
      {categorys?.map((prod, index) => (
      (index >=7 && index <= 9) && (
        <div className="bx col-4" key={prod.id}>
          <div className="tilethumb">
            <div className="homeCatTile pointer scaleImg zoom loaded">
              <img className="w-100" onClick={onImageClick} src={prod.image_path} alt={`Product ${prod.id}`} />
            </div>
          </div>
        </div>
      )
    ))}
    {categorys?.map((prod, index) => (
      (index >= 10) && (
        <div className="bx col-3" key={prod.id}>
          <div className="tilethumb">
            <div className="homeCatTile  pointer scaleImg zoom loaded">
              <img className="w-100percent" onClick={onImageClick} src={prod.image_path} alt={`Product ${prod.id}`} />
            </div>
          </div>
        </div>
      )
    ))}
</div></div>
<div className="category-sm">
  <div className="newarrival-container">
	 
   <div className="newarrival-container-title">
   <h3 className="title">Categories</h3></div>
 <Slider {...settings}>
   {categorys?.map((category, index) => (
     <div key={index} className="fandomImage1 p-2">
       <img   onClick={()=>[onImageClick(category),hideCarousel]}  src={category.image_path} alt={"category"} />
     </div>
   ))}
 </Slider>
 
 </div>
  </div>

</> }
</>:<div className='loader'></div>
);

};


    export default Categories;


 