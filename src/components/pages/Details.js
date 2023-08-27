import { useLocation, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import '../../styles/details.css';

const Details = () => {
  const location = useLocation();
  const { property } = location.state;

  return (
    <>
    <div className="details-main">
      <div className="img-cont">
        <img className="img-details" src={property.image} alt="property" />
      </div>
      <div className="details-cont">
        <div className='cont-title'>
        <h2>{property.name}</h2>
        </div>
        <ul>
          <li className='details-card'>
            <span><CiLocationOn/>Location</span>
            <span>{property.location}</span>
          </li>
          <li className='details-card'>
            Price
            <span>$ {property.price}</span>
          </li>
        </ul>
        <div className='reserve-btn-cont'>
        <button type="button" className="details-reserve">
          <Link to="/reserve" state={property}>Reserve</Link>
        </button>
        </div>
      </div>
    </div>
    <div>
    <button><IoIosArrowBack/></button>
    </div>
    </>
  );
};

export default Details;
