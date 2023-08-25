import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/home.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolio } from '../../redux/properties/propertiesSlice';
import { PropertySquare } from '../PropertySquare';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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

  return (
    <div className="homePageContainer">
      <div className="homeTextsContainer">

      </div>

      <Carousel
        arrows
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        swipeable
        draggable={false}
        responsive={responsive}
        ssr
        infinite
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

      </Carousel>
    </div>
  );
};

export default Home;
