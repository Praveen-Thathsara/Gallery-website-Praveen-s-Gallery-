// ImageCard.js
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card bg-dark">
      <img src={image.url} alt={image.alt} />
      <p>{image.caption}</p>
    </div>
  );
};

export default ImageCard;
