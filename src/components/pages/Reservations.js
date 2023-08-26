import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reserveSlice';
import '../../styles/my-reservation.css';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import dateLogo from '../../assets/date.png';
import cityLogo from '../../assets/location.png';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const accessToken = useSelector((state) => state.session.accessToken);
  const properties = useSelector((state) => state.properties.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(accessToken));
    dispatch(fetchPortfolio());
  }, [dispatch]);

  return (
    <div className="my-reservation-container">
      <h3 className="center-text margin-btm">My Reservations</h3>
      <div className="reservePagePropertiesContainer">
        {reservations.length ? (
          reservations.map((reserve) => {
            const property = properties.find((item) => item.id === reserve.property_id);

            if (!property) {
              return <p key={reserve.id}>Loading...</p>;
            }

            return (
              <div key={reserve.id} className="my-reservation-cards">
                <img src={property.image} alt="propperty" className="my-reservation-img" />
                <div className="my-reservation-description">
                  <p>
                    <strong>
                      property name:
                      {property.name}
                    </strong>
                  </p>
                  <span className="top-gap delete-location">
                    <div className="my-reservation-img-container">
                      <img src={cityLogo} alt="city-log" className="location side-gap" />
                    </div>

                    <p>{reserve.city}</p>
                  </span>
                  <span className="delete-location">
                    <img src={dateLogo} alt="date-logo" className="location side-gap" />
                    <p>{reserve.date_of_visit}</p>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
