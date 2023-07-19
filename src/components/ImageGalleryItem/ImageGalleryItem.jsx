import React from 'react';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className="gallery-item">
      <img src={image.src} alt={image.alt} />
    </li>
  );
};

