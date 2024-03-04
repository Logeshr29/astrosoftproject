import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
export default function AddressPayment(){
    const navigate = useNavigate();


    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        mobileNumber: Yup.number().required('Mobile Number is required'),
        postalcode: Yup.number().required('Postal Code is required'),
        // landmark: Yup.number().required('Land is required'),
        city: Yup.number().required('City Number is required'),
        street: Yup.number().required('Street  is required'),
      });
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
    return (<>
     <header>
      <div className="banner-container">
        <div className="banner-container-details">
      <h1 className="child-operations">Childcare Operations Excellence</h1>
                <div className="child-operations-p">Empower childcare professionals with efficiency and parents with peace of mind through our comprehensive management system.</div>
               {/* <div className="child-operations-pp">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</div> */}
               <div className="learnmore"> <button className="btn btn-lg btn-primary" href="#" role="button">Learn More</button></div>
              
      </div></div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        {/* <a className="navbar-brand" href="#">Carousel</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    </header>
   
   
      <div className="row">
          
      
       <div class="col-lg-4">
        <img className="rounded-circle" src="https://img.freepik.com/free-photo/happy-family-easter-time_329181-2485.jpg?size=626&ext=jpg&ga=GA1.1.318615915.1690477196&semt=sph" alt="Generic placeholder image" width="140" height="140"/>
        <h2>Innovation</h2>
        {/* <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p> */}
      <p>"Innovation is the spark that lights up the path to the future. It's the magic of turning dreams into reality, ideas into inventions, and problems into solutions</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div className="col-lg-4">
        <img className="rounded-circle" src="https://img.freepik.com/premium-photo/indian-small-kids-playing-colourful-block-toys-with-young-parents-against-white-background_466689-9062.jpg?size=626&ext=jpg&ga=GA1.1.318615915.1690477196&semt=sph" alt="Generic placeholder image" width="140" height="140"/>
        <h2>Caring</h2>
        <p>We providers are like guardians of joy, making sure that every day is filled with fun adventures, laughter, and new discoveries. We help children build the building blocks of life, from ABCs to 123s, and teach important values like kindness and sharing. So, whether it's a hug when they're sad or a high-five for a job well done, we are all about nurturing, caring, and helping children bloom into the amazing individuals they're meant to be</p>
        {/* <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> */}
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div className="col-lg-4">
        <img className="rounded-circle" src="https://img.freepik.com/free-photo/kindergarten-teacher-holding-notebook_23-2148633311.jpg?size=626&ext=jpg&ga=GA1.1.318615915.1690477196&semt=sph" alt="Generic placeholder image" width="140" height="140"/>
        <h2>Tutoring</h2>
        <p>Learning is like exploring a treasure map filled with exciting adventures!  Grab your magnifying glass, put on your adventure hat, and let's embark on a fantastic journey of discovery and learning together!</p>
        {/* <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> */}
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
    </div></>
      );


} 