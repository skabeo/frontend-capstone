import { useLocation, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import '../../styles/details.css';

const Details = () => {
  const location = useLocation();
  const { property } = location.state;

  return (
    <div className="details-main">
      <div className="img-cont">
        <img className="img-details" src={property.image} alt="property" />
        <button><IoIosArrowBack/></button>
      </div>
      <div className="details-cont">
        <h2>{property.name}</h2>
        <ul>
          <li>
            Location:
            {property.location}
          </li>
          <li>
            Price: $
            {property.price}
          </li>
        </ul>
        <button type="button" className="details-reserve">
          <Link to="/reserve" state={property}>Reserve</Link>
        </button>
      </div>
    </div>
  );
};

export default Details;
