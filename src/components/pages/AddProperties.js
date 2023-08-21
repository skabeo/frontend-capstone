/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProperty } from '../../redux/properties/propertiesSlice';

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
    <div>
      <h1>Form that allows users to add a property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price: $</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Property</button>
      </form>
      {feedbackMessage && <p>{feedbackMessage}</p>}
    </div>
  );
};

export default AddProperties;
