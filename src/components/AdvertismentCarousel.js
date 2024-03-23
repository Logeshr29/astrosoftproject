import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import{ useRef,useState,useEffect } from 'react';
import apiConfig from '../services/apiConfig';
import apiService from '../services/axiosService';

const Carousel = () => {
  const [categoryData, setCategoryData] = useState(null);
const [carouselData, setCarouselData] = useState(null);

const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData  () {
      console.log("hello1");
      const CATEGORY = '/api/category';
      const carousel = '/api/adverstimentcarousel';
  
      console.log(apiConfig.CATEGORY);
  
      // apiService.getMethod(apiConfig.CATEGORY)
      // .then(response => {
      //     console.log(response.data);
      //     setCategoryData(response.data);
      //   })
      console.log(apiConfig.carousel,"carouylsee");
        apiService.getMethod(apiConfig.carousel)
        .then(response => {
          console.log(response.data);
          setCarouselData(response.data);
        })
        .catch(error => {
          setError(error);
        });
    };
    console.log(carouselData,"caruousess");
  

    
    fetchData();
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-ecom">
    <Slider {...settings} className="carouselImage">
      {carouselData?.advertisment.map((image) => (
        <div key={image.id}>
               <img  

        src={image.image_path}
        alt={`Image ${image.image_id}`}
        />
        </div>
      ))}
    </Slider>
    <Slider {...settings} className="carouselImage-sm">
      {carouselData?.advertisment.map((image) => (
        <div key={image.id}>
               <img  
        src={image.image_path}
        alt={`Image ${image.image_id}`}
        />
        </div>
      ))}
    </Slider>
    
    
    </div>
  );
};

export default Carousel;