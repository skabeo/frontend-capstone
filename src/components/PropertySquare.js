import React from 'react';
import PropTypes from 'prop-types';

const description = 'This a wonderful property ready to move in. You can appreciatte every design detail and all the amazing amenities';

export const PropertySquare = (props) => {
  const {
    name, image, onClick,
  } = props;

  return (
    <div>
      <br />
      <button onClick={onClick} type="button" className="individualPropertyContainerHP">
        <div className="propertyImageContainerHP">
          <img className="propertyIconHomePage" src={image} alt="property" />
        </div>
        <br />
        <h4>{name.toUpperCase()}</h4>
        <h4 className="secondaryText">****************</h4>
        <h5 className="secondaryText">{description}</h5>
      </button>
      <div className="iconsContainer">
        <div className="smIcon1">        </div>
        <div className="smIcon2">        </div>
        <div className="smIcon3">        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

PropertySquare.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PropertySquare;
