import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import { createReservation } from '../../redux/reservations/reserveSlice';

const ReserveForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [propertyId, setPropertyId] = useState(-1);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);

  const portfolio = useSelector((state) => state.properties.portfolio);

  const accessToken = useSelector((state) => state.session.accessToken);

  useEffect(() => {
    if (state) {
      setPropertyId(state.id);
    }
  }, [state]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const property = portfolio.find((item) => item.id === propertyId);

    const data = {
      city,
      date,
      property,
    };

    try {
      await dispatch(createReservation(accessToken, data));
      setFeedbackMessage('Reservation added successfully');
    } catch (error) {
      setFeedbackMessage('Please fill all fields');
    }
    setCity('')
    setDate('')
    setPropertyId('')
  };

  return (
    <div>
      <h1>Reserve Form</h1>
      <form>
        <select
          name="availableProperties"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        >
          {state && <option value={state.id} defaultValue>{state.name}</option>}
          {!state && <option value="" defaultValue>Choose a Property</option>}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Reserve</button>
      </form>
      {feedbackMessage && <p>{feedbackMessage}</p>}
    </div>
  );
};

export default ReserveForm;
