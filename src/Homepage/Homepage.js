// imports
import {useEffect, useState} from "react";
import axios from 'axios';
import SearchBar from "../Searchbar/SearchBar";
import ArtistCard from "../ArtistCard/ArtistCard";
import './Homepage.css'

function Homepage() {

    const [searchTerm, setSearchTerm] = useState("")
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        console.log(searchTerm)

        if (searchTerm === '') {
            setArtistData([])
        } else {
            axios.get('https://rest.bandsintown.com/artists/' + searchTerm + '/?app_id=' + process.env.REACT_APP_BIT_APPID)
                .then(res => {
                    let tempArray = []

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

    return (
        <div className="homepage-content-wrapper">
            <div className="homepage-container">
                <h1 className="homepage-heading">Instantly lookup your favourite artist.</h1>
                <SearchBar
                    setSearch={setSearchTerm}
                />

                <div className="homepage-results-info">
                    {searchTerm !== '' && artistData.length !== 1 && <h3>{artistData.length} results found for "{searchTerm}"</h3> }
                    {artistData.length === 1 && <h3>{artistData.length} result found for "{searchTerm}"</h3> }
                </div>

                <div>
                    {artistData.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            name={artist.name}
                            img_url={artist.thumb_url}
                            facebook_link={artist.facebook_page_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
