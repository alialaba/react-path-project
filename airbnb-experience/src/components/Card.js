const Card = ({ item }) => {
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (item.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="container">
            {/* <div className="cards"> */}
            <div className="card__item">
                {badgeText && <span className="card__badge">{badgeText}</span>}
                <img className="card__img" src={process.env.PUBLIC_URL + `/images/${item.coverImg}`} />
                <div className="card__status">
                    <img className="card__status--icon" src={process.env.PUBLIC_URL + "images/star-rate.png"} />
                    <div>
                        <span className="card__status--bold">{item.stats.rating}</span>
                        <span className="card__status--gray">({item.stats.reviewCount})</span>
                        <span className="card__status--gray">. USA</span>
                    </div>
                </div>
                <p className="card__title">{item.title}</p>
                <p><b>from {item.price}</b> /person</p>
            </div>
            {/* </div> */}
        </div>

    );
}
export default Card;