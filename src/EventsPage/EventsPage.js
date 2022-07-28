import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@material-ui/core";
import ArtistCard from "../ArtistCard/ArtistCard";

function EventsPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const artistName = location.state.artist_name;
    const [artistEventData, setArtistEventData] = useState([]);

    useEffect(() => {

        axios.get('https://rest.bandsintown.com/artists/'+ artistName + '/events?app_id=' + process.env.REACT_APP_BIT_APPID)
            .then(res => {
                setArtistEventData(res.data)
                console.log(artistEventData)
            })
            .catch(err => {
                setArtistEventData([])
                console.log(err)
            })
    },[])

    function navigateToHomepage(event) {
        event.preventDefault()
       navigate(-1)
    }

    function formatDate(date_str) {
        const date = new Date(date_str)
        const day = date.getDay().toString()
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear().toString()
        return  day + " " + month + ", " + year
    }

    return (
        <div>
            <h1 onClick={navigateToHomepage}>Back to results</h1>
            <h2>Upcoming events for {artistName}</h2>
            <div>
                {artistEventData.map((event) => (
                    <table key={event.url}>
                        <tr>
                            <th colSpan="2">Event Details</th>
                        </tr>
                        <tr>
                            <td>
                                <p>Country</p>
                                <p>{event.venue.country}</p>
                            </td>
                            <td>
                                <p>City</p>
                                <p>{event.venue.city}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Venue</p>
                                <p>{event.venue.name}</p>
                            </td>
                            <td>
                                <p>Date</p>
                                <p>{formatDate(event.starts_at)}</p>
                            </td>
                        </tr>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default EventsPage;