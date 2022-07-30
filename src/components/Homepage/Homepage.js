// imports
import {useEffect, useState} from "react";
import axios from 'axios';
import SearchBar from "../Searchbar/SearchBar";
import ArtistCard from "../ArtistCard/ArtistCard";
import EventsPage from "../EventsPage/EventsPage";
import './Homepage.css'

function Homepage() {

    // set document title everytime component loads
    document.title = 'Search Artists'

    // state variables
    const [searchTerm, setSearchTerm] = useState("")
    const [artistData, setArtistData] = useState([])

    // toggle to switch between showing searchbar + artist or events
    const [showEventsToggle, setShowEventsToggle] = useState(false)

    // this will run once only on initial render
    useEffect( () => {
        const localStorageSearchTerm = localStorage.getItem('searchedArtistName')

        // check if search data was saved
        if (localStorageSearchTerm) {
            setSearchTerm(localStorageSearchTerm)
        }
    }, [])

    // this will run everytime value of searchTerm is updated
    useEffect(() => {
        localStorage.setItem('searchedArtistName', searchTerm)

        // do nothing if empty search
        if (searchTerm === '') {
            setArtistData([])
        } else {
            // fetch data from API
            axios.get('https://rest.bandsintown.com/artists/' + searchTerm + '/?app_id=' + process.env.REACT_APP_BIT_APPID)
                .then(res => {
                    // note that API typically returns one result only matching artist name to search term exactly
                    // but case of multiple results handled as well by having an array for artist data

                    let tempArray = []

                    // push if data not empty and no error
                    if (res.data !== '' && res.data.error !== 'Not Found') {
                        tempArray.push(res.data)
                    }

                    setArtistData(tempArray)
                })
                .catch(err => {
                    setArtistData([])
                    console.log(err)
                })
        }

    },[searchTerm])

    // switch off toggle, show search + artist
    function showArtist() {
        setShowEventsToggle(false)
    }

    // switch on toggle, show events
    function showEvents() {
        setShowEventsToggle(true)
        console.log("show events")
    }

    return (
        <div className="homepage-content-wrapper">
            <div className="homepage-container">

                {/* Toggle is off by default, display searchbar and search results */}
                {!showEventsToggle &&
                    <div>
                        <h1 className="homepage-heading">Instantly lookup your favourite artists.</h1>
                        <SearchBar setSearch={setSearchTerm} searchTerm={searchTerm}/>

                        <div className="homepage-results-info">
                            {searchTerm !== '' && artistData.length !== 1 && <h3>{artistData.length} results found for "{searchTerm}"</h3>}
                            {artistData.length === 1 && <h3>{artistData.length} result found for "{searchTerm}"</h3>}
                        </div>

                        {/* Dynamically display card for every artist found */}
                        <div>
                            {artistData.map((artist) => (
                                <ArtistCard
                                    key={artist.id}
                                    name={artist.name}
                                    img_url={artist.thumb_url}
                                    facebook_link={artist.facebook_page_url}
                                    showEventsToggle={showEvents}
                                />
                            ))}
                        </div>
                    </div>
                }

                {/* Toggle is on, display events and pass function to turn off toggle */}
                {showEventsToggle &&
                    <div>
                        <EventsPage artist_name={searchTerm} showArtistToggle={showArtist}/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Homepage;
