import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation()
    const { property } = location.state

    return (
        <>
        <div>
            <img className="img-details" src={property.image} alt="property" />
        </div>
        <div>
        <h2>{property.name}</h2>
        <ul>
            <li>{property.location}</li>
            <li>{property.price}</li>
        </ul>
        <button type="button">
            Reserve
        </button>
        </div>
        </>
    )
}

export default Details