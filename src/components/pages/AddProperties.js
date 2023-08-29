/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProperty } from '../../redux/properties/propertiesSlice';
import '../../styles/add-property.css';

const AddProperties = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const dispatch = useDispatch();
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    location: '',
    price: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(createProperty(accessToken, formData));
      setFeedbackMessage('Property added successfully');
    } catch (error) {
      setFeedbackMessage('Please fill all fields');
    }
    setFormData({
      name: '',
      image: '',
      location: '',
      price: '',
    });
  };

  return (
    <div className="add-property-container">
      <div className="add-property-overlay">
        <div className="add-property-sizing">
          <h3 className="center-text reserve-form-title">Add property</h3>
          {feedbackMessage && <p className="success-flash">{feedbackMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label className="reserve-form-title">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="reserve-form-title">Image URL:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="reserve-form-title">Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="reserve-form-title">Price: $</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="add-property-submit">Add Property</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;
