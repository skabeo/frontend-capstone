import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import { PropertySquare } from '../PropertySquare';
import DeleteSquare from '../DeleteSquare';

export const Delete = () => {
  const portfolio = useSelector((state) => state.properties.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  const handleDelete = (propertyId) => {
    dispatch(deleteProperty(propertyId)); // Dispatch the deleteProperty action
  };



  if (portfolio) {
    return (
      <div>
        <div>
          <h1>Remove properties</h1>
          <p>Welcome to the page where you can navigate through the properties and remove them</p>
          <div className="homePagePropertiesContainer">
            {portfolio.length ? portfolio.map((property) => (
                <>
              <DeleteSquare
                key={property.id}
                name={property.name}
                price={property.price}
                location={property.location}
                image={property.image}
                onClick={() => handleDelete(property.id)}
              />
              </>

            ))
              : <p>Nothing to show</p>}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to Get more properties</p>
      </div>
    </div>
  );
};

export default Delete;
