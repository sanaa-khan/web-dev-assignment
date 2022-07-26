// imports
import { TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import './Searchbar.css';

function Searchbar (props) {

    function handleSearchChange(event) {
        props.setSearch(event.target.value)
    }

    return (
        <div className="content-wrapper">
            <TextField className="search-bar"
                fullWidth
                id="outlined-search"
                label="Search artist"
                type="search"
                variant="outlined"
                color="black"
                InputProps={{
                    endAdornment: (
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                    ),
                }}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Searchbar;