import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPortfolio, deleteProperty } from '../../redux/properties/propertiesSlice';
import { DeleteSquare } from '../DeleteSquare';
import '../../styles/delete.css';

export const Delete = () => {
  const portfolio = useSelector((state) => state.properties.portfolio);
  const dispatch = useDispatch();
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  const handleDelete = (propertyId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this property?');
    if (shouldDelete) {
      try {
        dispatch(deleteProperty(propertyId));
        setFeedbackMessage('Property deleted');
      } catch (error) {
        setFeedbackMessage('Something went wrong');
      }
    }
  };

  if (portfolio) {
    return (
      <div className="delete-component">
        <h3 className="delPage-title">Remove properties</h3>
        {feedbackMessage && <p className="success-flash delete-flash">{feedbackMessage}</p>}
        <div className="delPagePropertiesContainer">
          {portfolio.length ? portfolio.map((property) => (
            <DeleteSquare
              key={property.id}
              name={property.name}
              price={property.price}
              location={property.location}
              image={property.image}
              onClick={() => handleDelete(property.id)}
            />
          ))
            : <p className="delPage-msg">Nothing to show</p>}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3 className="delPage-title">Remove properties</h3>
        <p className="delPage-msg">Nothing here for now! Check the App property link to add new properties</p>
      </div>
    </div>
  );
};

export default Delete;
