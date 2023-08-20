import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPortfolio } from './propertiesSlice';
import { PropertySquare } from '../components/PropertySquare';

export const Home = () => {
  const portfolio = useSelector((state) => state.properties.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  if (portfolio) {
    return (
      <div>
        <div>
          <h1>Home Page</h1>
          <p>Welcome to Get more properties</p>
          <div className="homePagePropertiesContainer">
            {portfolio.length ? portfolio.map((property) => (
              <PropertySquare
                key={property.id}
                name={property.name}
                price={property.price}
                location={property.location}
                image={property.image}
              />
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

export default Home;
