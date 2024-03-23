import React, { useEffect, useState } from 'react'
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';
import Rating from './Rating';
import { CloseButton } from 'react-bootstrap';
import Slider  from 'rc-slider';
import SlickSlider from 'react-slick';
import { useNavigate} from 'react-router-dom';

const Wishlist = () => {
  const navigate =useNavigate()
  const [wishlist,setwishlist]=useState(JSON.parse(localStorage.getItem('wishlist'))||[])
  const [cart,setcartitem]=useState(JSON.parse(localStorage.getItem('items'))||[])
/*     const [productlist,setproductlist]=useState(null)
console.log(productlist)
useEffect(() => {
    const fetchproductlist=()=>{
      apiService.getMethod(`${apiConfig.productlist}/1`)
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
}, []); */
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false, // Hide the default previous arrow
  nextArrow: false, // Hide the default next arrow
  

};

const addtoCart=(item)=>{
  console.log(item,"item");
  const Product = [...cart,item];
  localStorage.setItem("items",JSON.stringify(Product))
  if(Product)
    {
      setcartitem(Product);
     alert("product added to cart")
    }
    else
    {
      alert ("please login")
    }
}
const removewishlist=(productid)=>
{
  const product=JSON.parse(localStorage.getItem("wishlist"))
  const removeprod=product.filter(product=> product.id!=productid)
  setwishlist(removeprod) 
  localStorage.setItem("wishlist",JSON.stringify(removeprod))
}
function onImageClick(item){
  console.log("hellobabay");
  navigate('/product-detail',{ state: { item }});


}
const indexprod=wishlist.length
  return (
    <div className='container-cart  p-2'>
      <div className='col-12'><p className='side-heading'>My Wishlist {`(${indexprod} items)`}</p> </div>
      <div class="sm-product" >
        {wishlist?.map((product) => (<> <div key={product.id} className= "product-list-sm">
        <div  >
        <div className="productItem-sm" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            
        <SlickSlider {...settings}>
        {product?.product_images.map((product,index)=>
        index<2 &&
        <div key={index} className="productImageContainer position-relative">
           <div className="closebutton z-2" ><CloseButton onClick={()=>removewishlist(product.id)}/></div>
         <img  className="sm-product-image" src={product.image_path} onClick={()=>onImageClick(product)}/>
         <div className="label new">New</div>
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
                <div className="movebutton" onClick={()=>addtoCart(product)}>
<span>Move to Cart</span>
</div> 
            </div>
    
    </div></div>
              </div>
             
       </>
        ))}
        </div>

{/* productlist-lg.................................................... */}
        <div className="row img d-none d-md-flex">
      {wishlist?.map((product) => (<>
        <div key={product.id} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            
{/* productlist-lg.................................................... */}
<div className="productImage " >
    {product?.product_images.map((product,index)=>
        index<2 &&
              <div key={product.id} className="productImageContainer" onClick={()=>onImageClick(product)}>
              <img src={product.image_path} alt={product.name} className="productImage1" />
          <img src={product.image_path} alt={product.name} className="productImage1 productImage2" />
              </div>
    )}
              <div className="closebutton" onClick={()=>removewishlist(product.id)}><CloseButton/></div>
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
                <div className="movebutton" onClick={()=>addtoCart(product)}>
<span>Move to Cart</span>
</div> 
            </div>
            </div>
          </div>
        </>
      ))}

    </div>
    </div>
  )
}

export default Wishlist
{/* <div className="movebutton" onClick={()=>addtoCart(product)}>
<span>Move to Cart</span>
</div> */}
{/* <div className="closebutton" onClick={()=>removewishlist(product.id)}><CloseButton/></div> */}