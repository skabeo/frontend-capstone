import React from 'react';
import PropTypes from 'prop-types';

export const PropertySquare = (props) => {
  const {
    name, location, price, image,
  } = props;

  return (
    <button type="button" className="individualPropertyContainerHP">
      <div className="propertyImageContainerHP">
        <img className="propertyIconHomePage" src={image} alt="property" />
      </div>
      <div className="propertyTextsContainerHP">
        <h4>{name}</h4>
        <h4>{location}</h4>
        <div className="textRow">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
    </button>
  );
};

PropertySquare.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default PropertySquare;
