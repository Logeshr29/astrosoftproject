
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
const RegisterationForm=()=>{
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobileNumber: Yup.number().required('Mobile Number is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
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
      } else {
        // Handle errors
        console.error('Failed to send data to the backend.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  
  
    setSubmitting(false);
  }
  const handleSubmit = async (values, { setSubmitting }) => {
    // You can handle form submission here
    // values object contains form field values
    console.log(values);
    console.log(values);
  
    // Send data to the backend
    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST', // Use the appropriate HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send form data as JSON to the backend
      });
  
      if (response.ok) {
        // Handle success
        console.log('Data sent successfully.');
        navigate('/login-form');

      } else {
        // Handle errors
        console.error('Failed to send data to the backend.');
      }
    
} catch (error) {
      console.error('An error occurred:', error);
    }
  
  
    setSubmitting(false);
  };

  return (
    <div className="container-ecom">
      <div className="form">
      <h1 className="">Registeration Form</h1>

      <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName text-tomato">Last Name</label>
              <Field
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <Field
                type="number"
                name="mobileNumber"
                className="form-control"
                id="mobileNumber"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="error-message"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email Id</label>
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

            <div className="mb-3">
              <label htmlFor="password">Password</label>
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

            {/* Gender and Submit button here */}
            <div className="submit-btn1">
              <button
                type="submit"
                className="sm-button text-uppercase bold_font"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
   
    
    </div>
  );

  
}
export default RegisterationForm;
