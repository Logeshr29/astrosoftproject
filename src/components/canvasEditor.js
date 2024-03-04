// import React, { useRef,useState } from 'react';

// const ImageCombiner = () => {
//   const canvasRef = useRef(null);
//   const [combinedImageSrc, setCombinedImageSrc] = useState(null);

//   const handleSaveImage = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Load your images
//     const image2 = new Image();
//     image2.src = 'img/product/tank_top.jpg';

//     const image1 = new Image();
//     image1.src = 'img/categories/boxers.jpg';

//     // After the images load, draw them on the canvas
//     image1.onload = () => {
//       ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
//       image2.onload = () => {
//         ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);

//         // Save the combined image
//         const dataURL = canvas.toDataURL('image/png');
//         setCombinedImageSrc(dataURL);

//         // You can now use 'dataURL' to display or save the combined image
//         // console.log(dataURL);
//          // Display the combined image in the console
//          const combinedImage = new Image();
//          combinedImage.src = dataURL;
//          console.log(combinedImage);
//       };
//     };
//   };

//   return (
//     <div>
//       <canvas ref={canvasRef} width={1000} height={1000} />
//       <button onClick={handleSaveImage}>Save Combined Image</button>
//       {combinedImageSrc && (
//         <div>
//           <h2>Combined Image:</h2>
//           <img src={combinedImageSrc} alt="Combined" />
//         </div>
//       )}
//     </div>
   
//   );
// };

// export default ImageCombiner;





import React from 'react';

const OverlayContainer = () => {
  return (
    <div className="container">
      {/* Background Image */}
      <div className="background-image">
        {/* Overlay Text */}
        <img src='img/categories/shorts.jpg' alt=''></img>
        {/* <h1 className="overlay-text">Hello, World!</h1> */}
      </div>

      {/* Overlay Image */}
      <img className="overlay-image" src="/path/to/overlay-image.png" alt="Overlay" />
    </div>
  );
};

export default OverlayContainer;
