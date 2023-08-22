import React from 'react';
import PropTypes from 'prop-types';

export const DeleteSquare = (props) => {
  const {
    name, location, price, image, onClick,
  } = props;

  return (
    <div className="wrapper">

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
      <button onClick={onClick} type="button" className="individualPropertyContainerHP">Delete</button>
    </div>
  );
};

DeleteSquare.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeleteSquare;
