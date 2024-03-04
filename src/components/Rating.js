// Rating.js

import React from 'react';

const Rating = ({ rating }) => {
  // Logic to calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<i key={i} className="fa fa-star filled-star"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key="half-star" className="fa fa-star-half-alt half-star"></i>);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
