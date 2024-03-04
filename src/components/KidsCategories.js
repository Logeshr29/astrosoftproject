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


function KidsCategories({ onImageClick,hideCarousel}) {
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
  slidesToScroll: 1,
  nextArrow: <ArrowButton type="next" onClick={() => sliderRef.current.slickNext()} />,
  prevArrow: <ArrowButton type="prev" onClick={() => sliderRef.current.slickPrev()} />,
};

function onImageClick(item){
  navigate('/product-list', { state: { item} });
}

return (
  <>  
  {!hidCarousel &&  <> <AdvertismentCarousel/>
  <div className="container-ecom">
  <div className="newarrival-container">
	 
    <div className="newarrival-container-title">
    <h3 className="title">Shop By Fandom</h3></div>
  <Slider {...settings} className="fandomImage1">
    {Fandomcategory?.fandom_category.map((item) => (
      <div key={item.id} className="fandomImage">
        <img   onClick={()=>[onImageClick(item),setHideCaroulsel(true)]}  src={item.image_path} alt={item.name} />
      </div>
    ))}
  </Slider>
  
  </div></div>
<div className="container-ecom">
  <div className="newarrival-container">
	 
   <div className="newarrival-container-title">
   <h3 className="title">Collections</h3></div>
   <Slider {...settings} className="fandomImage1">
   {collections?.collections.map((item) => (
     <div key={item.id} className="fandomImage" >
       <img onClick={()=>onImageClick(item)}  src={item.image_path} alt={item.collection} />
     </div>
   ))}
 </Slider>
 
 </div></div>

 <div className="container-ecom ">
 <div className="category-heading  col-md-12">
    <span>Categories</span>
  </div> 
  <div className="container-larg d-none d-md-flex col-12">
  {category?.categories.map((category, index) => (
     <div key={index} className="fandomImage1 col-4">
       <img   onClick={()=>[onImageClick(category),hideCarousel]}  src={category.image_path} alt={"category"} />
     </div>
   ))}
  </div>

  <div className="category-sm">
  <div className="newarrival-container">
	 
   <div className="newarrival-container-title">
   <h3 className="title">Categories</h3></div>
 <Slider {...settings}>
   {category?.categories.map((category, index) => (
     <div key={index} className="fandomImage1 ">
       <img   onClick={()=>[onImageClick(category),hideCarousel]}  src={category.image_path} alt={"category"} />
     </div>
   ))}
 </Slider>
 
 </div>
  </div>
 </div>

</> }

 
</>


);






};


    export default KidsCategories;