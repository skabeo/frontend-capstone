import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/home.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import { PropertySquare } from '../PropertySquare';

export const Home = () => {
  const portfolio = useSelector((state) => state.properties.portfolio);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  const switchPage = (property) => {
    nav(`property/${property.id}`, { state: { property } });
  };

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
                onClick={() => switchPage(property)}
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
