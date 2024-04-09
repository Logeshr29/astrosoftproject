
import React, { useRef,useState,useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Outlet, useNavigate } from 'react-router-dom';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
const LoginForm=()=>{
    const navigate = useNavigate();
    const [usernameerror, setUserNameError]=useState(null);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      });
      function register(){
        navigate('/registeration-form');
      }
      const loginsubmit=async(values,{setSubmitting})=>{
        // You can handle form submission here
     // values object contains form field values
     console.log(values);
     console.log(values);
   
     // Send data to the backend
     try {
       const response = await fetch('http://localhost:3001/api/login', {
         method: 'POST', // Use the appropriate HTTP method
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(values), // Send form data as JSON to the backend
       });
   
       if (response.ok) {
         // Handle success
         console.log('Logged in successfully.');
         navigate('/address-payment');
         setUserNameError(null);

       } else {
         // Handle errors
         console.error('Failed to send data to the backend.');

         setUserNameError("Incorrect UserName and password");
       }
     } catch (error) {
       console.error('An error occurred:', error);
     }
    
   
     setSubmitting(false);
   }
   return (<>  
   <div className="container-ecom">
    <div className="container ">

      <div className="login-container d-flex justify-content-center">
   <Formik
       initialValues={{
        
         email: '',
         password: '',
       }}
       validationSchema={validationSchema}
       onSubmit={loginsubmit}
     >
       <div className=" login-cont ">
        <div className="login-text"><span >Login</span></div>
       <Form  className='login-form  '>
        {usernameerror &&(<><div className=" colored">Invalid UserName or Password</div></>)}
        <div className="inp-form">
           <label htmlFor="email" className="font">Email Id</label>
           <Field
             type="email"
             name="email"
             className="form-control"
             id="email"
           />
           <ErrorMessage
             name="email"
             component="div"
             className="error-message"
           />
         </div>

         <div className="inp-form">
           <label htmlFor="password" className="font">Password</label>
           <Field
             type="password"
             name="password"
             className="form-control"
             id="password"
           />
           <ErrorMessage
             name="password"
             component="div"
             className="error-message"
           />
         </div>
         <div className="text-dark colortomato">Don't have an account? <a href="#" onClick={register} className='text-black'>Register now</a></div>
         <button className="submit-btn">Login</button>
       </Form></div>
     </Formik>
     </div>
   </div>
   </div>
   <Outlet />  
   </>)
}
export default LoginForm;
