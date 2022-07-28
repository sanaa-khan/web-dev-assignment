import { useNavigate } from "react-router-dom";
import {ArrowForwardIos} from '@material-ui/icons';
import './ArtistCard.css';

function ArtistCard(props) {

    const navigate = useNavigate();

    function navigateToEventPage(event) {
        event.preventDefault()
        const path = '/events'
        navigate(path, {state: {artist_name: props.name}})
    }

    return (
        <div className="artist-card-content-wrapper">
            <img
                src={props.img_url}
                alt="artist image"
            />
            <h4>{props.name}</h4>
            <h5>{props.facebook_link}</h5>
            <div onClick={navigateToEventPage}>
                <h5>View upcoming events</h5>
                <ArrowForwardIos/>
            </div>
        </div>
    )
}

export default ArtistCard;