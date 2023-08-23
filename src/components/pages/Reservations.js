import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reserveSlice';

const Reservations = () => {
  const reservation = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken)
  const currentUser = useSelector((state) => state.session.currentUser)

  useEffect(() => {
    dispatch(fetchReservations(accessToken));
  }, [dispatch]);

  if (reservation) {
    return (
      <div>
        <div>
          <h1>My Reservations</h1>
          <div className="homePagePropertiesContainer">
            {reservation.length ? reservation.map((reserve) => (
              <div key={reserve.id}>
              <h3>{currentUser.name}</h3>
              <p>{reserve.date_of_visit}</p>
              <p>{reserve.city}</p>
            </div>
            ))
              : <p>Nothing to show</p>}
          </div>
        </div>
      </div>
    );
  }

  return(
    <div>
      <h2 className="home-title">My Reservations</h2>
    </div>
  )
}

export default Reservations;
