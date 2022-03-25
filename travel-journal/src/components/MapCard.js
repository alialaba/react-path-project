const MapCard = ({ item }) => {
    return (
        <section>
            <div className="card">
                <img className="card__img" src={process.env.PUBLIC_URL + "/mountfuji.png"} alt="" />
                <div className="card__content">
                    <div className="card__header">
                        <img className="card__icon" src={process.env.PUBLIC_URL + "/location-icon.png"} alt="" />
                        <h4 className="card__location">{item.location}</h4>
                        <a href={`${item.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                    <h2 className="card__title">{item.title}</h2>
                    <div className="card__date">
                        <span className="card__date--start">{item.startDate}</span>
                        <span className="card__date--end">{item.endDate}</span>
                    </div>
                    <p>{item.description}</p>

                </div>

            </div>

        </section>
    );
}
export default MapCard;