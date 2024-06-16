import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="card">
          <img src={image.urls?.regular} alt={image.alt_description} />
          <div className="card-info">
            <h3>{image.alt_description}</h3>
            <p>By: {image.user?.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
