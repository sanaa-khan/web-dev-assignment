// imports
import './ArtistCard.css';

function ArtistCard(props) {

    return (

        <div className="artist-card">
            <img className="artist-card-img" src={props.img_url} alt="Artist" />
            <div className="artist-card-info">
                <p className="artist-name">{props.name}</p>
                <p className="divider">|</p>
                <a href={props.facebook_link} className="fa fa-facebook"></a>
            </div>
            <p className="events-link" data-testid="events-link" onClick={props.showEventsToggle}>View upcoming events</p>
        </div>
    )
}

export default ArtistCard;