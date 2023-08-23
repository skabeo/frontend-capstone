import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reserveSlice';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const accessToken = useSelector((state) => state.session.accessToken);
  const currentUser = useSelector((state) => state.session.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div>
      <h1>My Reservations</h1>
      <div className="homePagePropertiesContainer">
        {reservations.length ? (
          reservations.map((reserve) => (
            <div key={reserve.id}>
              <h3>{currentUser.name}</h3>
              <p>
                Date of Visit:
                {reserve.date_of_visit}
              </p>
              <p>
                City:
                {reserve.city}
              </p>
            </div>
          ))
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
