import './ArtistCard.css';


function ArtistCard(props) {
    return (
        <div className="artist-card-content-wrapper">
            <img
                src={props.img_url}
                alt="artist image"
            />
            <h4>{props.name}</h4>
            <h5>{props.facebook_link}</h5>
            <h5>{props.events_no} upcoming events</h5>
        </div>
    )
}

export default ArtistCard;