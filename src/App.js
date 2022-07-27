// imports
import {useEffect, useState} from "react";
import axios from 'axios';
import SearchBar from "./Searchbar/SearchBar";
import ArtistCard from "./ArtistCard/ArtistCard";
import './App.css';

function App() {

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
      <div className="app-content-wrapper">
        <SearchBar
            setSearch={setSearchTerm}
        />
          {artistData.length !== 1 && <h3>{artistData.length} results found for "{searchTerm}"</h3> }
          {artistData.length === 1 && <h3>{artistData.length} result found for "{searchTerm}"</h3> }

          <div>
              {artistData.map((artist) => (
                  <ArtistCard
                      key={artist.id}
                      name={artist.name}
                      img_url={artist.thumb_url}
                      facebook_link={artist.facebook_page_url}
                      events_no={artist.upcoming_event_count}
                  />
              ))}
          </div>

      </div>
  );

  // return (
  //     <div
  //         style={{
  //           display: "flex",
  //           alignSelf: "center",
  //           justifyContent: "center",
  //           flexDirection: "column",
  //           padding: 20
  //         }}
  //     >
  //       <SearchBar setSearch={setSearchTerm} />
  //       <div style={{ padding: 3 }}>
  //         {filteredData.map((d) => (
  //             <div
  //                 className="text"
  //                 style={{
  //                   padding: 5,
  //                   justifyContent: "normal",
  //                   fontSize: 20,
  //                   color: "blue",
  //                   margin: 1,
  //                   width: "250px",
  //                   BorderColor: "green",
  //                   borderWidth: "10px"
  //                 }}
  //                 key={d.id}
  //             >
  //               {d}
  //             </div>
  //         ))}
  //       </div>
  //     </div>
  // );
}

export default App;
