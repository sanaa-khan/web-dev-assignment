import { useNavigate } from "react-router-dom";
import {ArrowForwardIos} from '@material-ui/icons';
import {Button} from "@material-ui/core";
import './ArtistCard.css';

function ArtistCard(props) {

    const navigate = useNavigate();

    function navigateToEventPage(event) {
        event.preventDefault()
        console.log("clicked")
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
            <Button onClick={navigateToEventPage} variant="contained" endIcon={<ArrowForwardIos/>}>
                View upcoming events
            </Button>
        </div>
    )
}

export default ArtistCard;