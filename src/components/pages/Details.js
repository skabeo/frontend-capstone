import { useLocation, Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import '../../styles/details.css';

const Details = () => {
  const location = useLocation();
  const { property } = location.state;
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="details-main">
        <div className="img-cont">
          <img className="img-details" src={property.image} alt="property" />
        </div>
        <div className="details-cont">
          <div className="cont-title">
            <h2>{property.name}</h2>
          </div>
          <ul>
            <li className="details-card">
              <span>
                <CiLocationOn />
                Location
              </span>
              <span>{property.location}</span>
            </li>
            <li className="details-card">
              Price
              <span>
                $
                {property.price}
              </span>
            </li>
          </ul>
          <div className="reserve-btn-cont">
            <Link to="/reserve" state={property}>
              <button type="button" className="details-reserve">
                Reserve
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="return-btn-cont">
        <button type="button" className="return-btn" onClick={handleBackButtonClick}>
          <IoIosArrowBack />
          {' '}
        </button>
      </div>
    </>
  );
};

export default Details;
