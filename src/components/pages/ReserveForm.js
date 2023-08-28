import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import { createReservation } from '../../redux/reservations/reserveSlice';
import { BsArrowLeft } from 'react-icons/bs';
import '../../styles/reservation.css';

const ReserveForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [propertyId, setPropertyId] = useState(-1);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
    const property = portfolio.find((item) => item.id === parseInt(propertyId, 10));

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
    setCity('');
    setDate('');
    setPropertyId('');
  };

  const handleBack = () => {
    if (state && state.id) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
 
  return (
    <div className="reserve-form-container">
      <div className="reserve-form-overlay">
        <div className="reserve-desktop-sizing">
        <button type="button" className="reserve-back-btn" onClick={handleBack}>
          <BsArrowLeft />
          {' '}
        </button>
          <h3 className="center-text reserve-form-title">Reserve Form</h3>
          {feedbackMessage && <p className="success-flash">{feedbackMessage}</p>}
          <form className="form-container small-gap">
            <select
              name="availableProperties"
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
              className="reserve-drop-down"
            >
              {state && <option value={state.id} defaultValue>{state.name}</option>}
              {!state && <option value="" defaultValue>Choose a Property</option>}

              {!state && portfolio.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="reserve-submit-btn"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
