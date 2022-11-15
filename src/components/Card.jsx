function Card(props) {
  return (
    <div className="card--section">
      <img src={props.item.imageUrl} alt="Location-image" />

      <div className="info--section">
        <span>
          <p className="card--location">{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </span>

        <h1>{props.item.title}</h1>

        <p>
          <strong>
            {props.item.startDate} - {props.item.endDate}
          </strong>
        </p>

        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
