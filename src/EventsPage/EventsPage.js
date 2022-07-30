import {useEffect, useState} from "react";
import axios from "axios";
import './EventsPage.css';

function EventsPage(props) {

    const artistName = props.artist_name;
    const [artistEventData, setArtistEventData] = useState([]);

    useEffect(() => {
        document.title = 'Events for ' + artistName;

        axios.get('https://rest.bandsintown.com/artists/'+ artistName + '/events?app_id=' + process.env.REACT_APP_BIT_APPID)
            .then(res => {
                setArtistEventData(res.data)
                console.log(artistEventData)
            })
            .catch(err => {
                setArtistEventData([])
                console.log(err)
            })
    })

    function formatDate(date_str) {
        const date = new Date(date_str)
        const day = date.getDay().toString()
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear().toString()
        return  day + " " + month + ", " + year
    }

    return (
        <div>
            <h2 className="events-page-return-link" onClick={props.showArtistToggle}><i className="fa fa-angle-left"></i> Back to results</h2>
            <div className="events-table-container">
                {artistEventData.map((event) => (
                    <table className="events-table" key={event.url}>
                        <tr>
                            <th colSpan="2">Event Details</th>
                        </tr>
                        <tr>
                            <td>
                                <h4>Country</h4>
                                <p>{event.venue.country}</p>
                            </td>
                            <td>
                                <h4>City</h4>
                                <p>{event.venue.city}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Venue</h4>
                                <p>{event.venue.name}</p>
                            </td>
                            <td>
                                <h4>Date</h4>
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