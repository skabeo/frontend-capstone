import React from 'react';
import PropTypes from 'prop-types';
import locationImg from '../assets/location.png';

export const DeleteSquare = (props) => {
  const {
    name, location, price, image, onClick,
  } = props;

  return (
    <div className="wrapper">
      <img className="propertyIcon" src={image} alt="property" />
      <div className="propertyDetails">
        <div className="delete-square-details">
          <p className="price">
            <strong>
              from US$
              {price}
            </strong>
          </p>
          <p>{name}</p>
          <span className="delete-location">
            <img src={locationImg} className="location" alt="location-logo" />
            <p>{location}</p>
          </span>
          <button
            onClick={onClick}
            type="button"
            className="del-btn"
          >
            Delete
          </button>
        </div>
      </div>
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
