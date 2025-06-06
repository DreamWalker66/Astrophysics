import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="info-card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
