import { useNavigate } from "react-router-dom";
import './ArtistCard.css';

function ArtistCard(props) {

    const navigate = useNavigate();

    function navigateToEventPage(event) {
        event.preventDefault()
        const path = '/events'
        navigate(path, {state: {artist_name: props.name}})
    }

    return (

        <div className="artist-card">
            <img className="artist-card-img" src={props.img_url} alt="Artist" />
            <div className="artist-card-info">
                <p className="artist-name">{props.name}</p>
                <p className="divider">|</p>
                <a href={props.facebook_link} className="fa fa-facebook"></a>
            </div>
            <p className="events-link" onClick={navigateToEventPage}>View upcoming events</p>
        </div>
    )
}

export default ArtistCard;