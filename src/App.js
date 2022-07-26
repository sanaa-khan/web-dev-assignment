import Searchbar from "./Searchbar/Searchbar";
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log(searchTerm)
  },[searchTerm])

  return (
    <Searchbar
        setSearch={setSearchTerm}
    />
  );
}

export default App;
