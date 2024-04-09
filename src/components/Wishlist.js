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
  const [user,setuser]=useState(JSON.parse(sessionStorage.getItem('user')))
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
useEffect(()=>
{

  const whishlistuser= wishlist.filter((product)=> product.userid==user)
  setwishlist(whishlistuser)
},[]);;
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
    console.log(item, "item");
    console.log(item, "item with size");
  
    // Initialize cart as an empty array if it's null or undefined
  
    if (!user) {
      const userid = prompt("Enter the user id");
      if (userid) {
        const cartprod = {
          userid: userid,
          product: [{ ...item.product[0]}],
        };
        setuser(userid);
        sessionStorage.setItem("user", JSON.stringify(userid));
        cart.push(cartprod); // Add new cart product to the updated cart array
        setcartitem(cart);
        localStorage.setItem("items", JSON.stringify(cart));
        alert("Product added to cart");
      } else {
        alert("Please enter the user id");
      }
    } else {
      const cartprod = {
        userid: user,
        product: [{ ...item.product[0]}],
      };
      cart.push(cartprod); // Add new cart product to the updated cart array
      setcartitem(cart);
      localStorage.setItem("items", JSON.stringify(cart));
      alert("Product added to cart");
    }
}
const removewishlist=(productid)=>
{
  const product=JSON.parse(localStorage.getItem("wishlist"))
  const removeprod=product.filter(product=> product.product[0].id!=productid)
  setwishlist(removeprod) 
  localStorage.setItem("wishlist",JSON.stringify(removeprod))
}
function onImageClick(item){
  console.log("hellobabay");
  navigate('/product-detail',{ state: { item }});


}
const indexprod=wishlist.length
  return (<>{(!wishlist || wishlist==[]) ? <div className='col-12'>
  <p className='side-heading'>My Wishlist ({indexprod} items)</p>
</div>:
    <div className='container-cart p-2'> 
    <div className='col-12'>
      <p className='side-heading'>My Wishlist ({indexprod} items)</p>
    </div>
    <div className="sm-product">
      {wishlist?.map((product, index) => (
        <div key={index} className="product-list-sm ">
          <div className="productItem-sm p-0 p-2" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <SlickSlider {...settings}>
              {product.product[0].product_images.map((image, idx) =>
                idx < 2 && (
                  <div key={idx} className="productImageContainer position-relative">
                    <div className="closebutton z-2">
                      <CloseButton onClick={() => removewishlist(product.product[0].id)} />
                    </div>
                    <img className="sm-product-image" src={image.image_path_1|| image.image_path} onClick={() => onImageClick(product)} />
                    <img className="sm-product-image" src={image.image_path_2|| image.image_path} onClick={() => onImageClick(product)} />
                    <div className="label new">New</div>
                  </div>
                )
              )}
            </SlickSlider>
            <div className="product__item__text">
              <h6>{product.product[0].product}</h6>
              <Rating rating={product.product[0].rating} />
              <div className="price-box-wrapper">
                <span className="leftPrice">
                  <span className="fprice">
                    <p className={"iruppee product__price p-2"}>{`₹${product?.product[0].sale_price}`} <span className='cancel-amt'>{(product?.product[0].price)+(product?.product[0].discount)}</span></p>
                  </span>
                </span>
              </div>
              <div className="movebutton" onClick={() => addtoCart(product)}>
                <span>Move to Cart</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* productlist-lg */}
    <div className="row img d-none d-md-flex">
      {wishlist?.map((product, index) => (
        <div key={index} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            <div className="productImage">
              {product?.product[0].product_images.map((image, idx) =>
                idx < 2 && (
                  <div key={image.id} className="productImageContainer" onClick={() => onImageClick(product)}>
                    <img src={image.image_path_1 || image.image_path} alt={image.name} className="productImage1" />
                    <img src={image.image_path_2 || image.image_path} alt={image.name} className="productImage1 productImage2" />
                  </div>
                )
              )}
              <div className="closebutton" onClick={() => removewishlist(product.product[0].id)}>
                <CloseButton />
              </div>
            </div>
            <div className="product__item__text">
              <h6>{product.product[0].product}</h6>
              <Rating rating={product.product[0].rating} />
              <div className="price-box-wrapper">
                <span className="leftPrice">
                  <span className="fprice">
                    <p className={"product__price p-1"}>{`₹${product?.product[0].sale_price}`} <span className='cancel-amt'>{(product?.product[0].price) + (product?.product[0].discount)}</span></p>
                  </span>
                </span>
              </div>
              <div className="movebutton" onClick={() => addtoCart(product)}>
                <span>Move to Cart</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>}</>
  )
}

export default Wishlist
{/* <div className="movebutton" onClick={()=>addtoCart(product)}>
<span>Move to Cart</span>
</div> */}
{/* <div className="closebutton" onClick={()=>removewishlist(product.id)}><CloseButton/></div> */}