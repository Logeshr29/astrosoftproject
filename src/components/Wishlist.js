import React, { useEffect, useState } from 'react'
import apiService from '../services/axiosService';
import apiConfig from '../services/apiConfig';
import Rating from './Rating';

const Wishlist = () => {
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
  return (
    <div className='container-ecom  p-2'>
      <div className='col-12'><p className='side-heading'>My Wishlist {`(2 items)`}</p> </div>
      <div className="col-12 d-flex">
      {productlist?.map((product) => (<>
        <div key={product.id} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            
            <div className="productImage">
              {console.log(product)}
              
              <div className="productImageContainer ">

                <div>
                  <div>
              <img src={product.image} alt={product.name} className="productImage1" />
              </div>
              <div>
          <img src={product.image} alt={product.name} className=" productImage1 productImage2" />
          </div></div>
              <div className="label new">New</div>
            
              </div>

          
            </div>
            <div className="product__item__text">
              <h6>{product.name}</h6>
              <Rating rating={product.rating} />
    
              <div className="product__price">₹ {product.price}</div>
            </div>
          </div>
        </div></>
      ))}{productlist?.map((product) => (<>
        <div key={product.id} className="col-lg-3 col-md-4 product-list-lg-md">
          <div className="productItem">
            
            <div className="productImage">
              {console.log(product)}
              
              <div className="productImageContainer ">
              
                <div >
                  <div>
              <img src={product.image} alt={product.name} className="productImage1" />
              </div>
              <div>
          <img src={product.image} alt={product.name} className=" productImage1 productImage2" />
          </div></div>
              <div className="label new">New</div>
        
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
      </div>
    </div>
  )
}

export default Wishlist
