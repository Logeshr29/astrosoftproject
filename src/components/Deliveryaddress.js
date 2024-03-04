import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Deliveryaddress = () => {
    const address=true;
    const payment=true;
    const navigate=useNavigate()
    const navigatepayment=()=>
    {
        navigate("/checkout")
    }
  return (
    <div>
      <div className="container-cart mt-3 p-2 ">
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
                </div>
      </div>
      <div className="container-cart mt-3 p-2 d-flex">
        <div className="address-container col-7  p-2">
        <h4 className="side-heading">Delivery To</h4>
        <div className="d-flex gap-3">
            <div className="address-box">
                <div className="">
                        <div className="d-block mt-0">
                        <div><span>Logesh R</span></div> 
                        <div  className=""><p>83 ,chinnakattupalayam,<br></br> Perundurai Subdistrict,<br></br> Erode District-638751</p></div></div> 
                   
                        <div className="edit-btn gap-3">
                        <div><button>Edit</button></div>
                        <div><button>Remove</button></div></div> </div>
                    </div>
                <div className="">
                <div className="address-box">
                    <div className=" addplus"><FaPlus className="fa-2x"/></div><br></br>
                   
                <span>
                    ADD NEW ADDRESS</span>
                </div> </div></div>
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block container">
                <div className="bx1">
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
              <button className=" col-12" onClick={navigatepayment}>Place Order</button>             
              </div>
{/* <div className=" button-container mb-2 ">
    <button className=" col-12">Place Order</button>             
</div> */}
</div></div>
      </div>
    </div>
  )
}

export default Deliveryaddress
