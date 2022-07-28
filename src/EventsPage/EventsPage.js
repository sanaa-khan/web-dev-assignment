import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

function EventsPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const artistName = location.state.artist_name;
    const [artistData, setArtistData] = useState();
    const [artistEventData, setArtistEventData] = useState([]);

    useEffect(() => {
        axios.get('https://rest.bandsintown.com/artists/' + artistName + '/?app_id=' + process.env.REACT_APP_BIT_APPID)
            .then(res => {
                console.log(res.data)
                setArtistData(res.data)
            })
            .catch(err => {
                setArtistData(null)
                console.log(err)
            })

        axios.get('https://rest.bandsintown.com/artists/'+ artistName + '/events?app_id=' + process.env.REACT_APP_BIT_APPID)
            .then(res => {
                setArtistEventData(res.data)
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

    return (
        <div>
            <h1 onClick={navigateToHomepage}>Back to results</h1>
        <h1>Hello {artistName}</h1>
        </div>
    )
}

export default EventsPage;