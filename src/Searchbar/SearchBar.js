// imports
import { TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import './SearchBar.css';

function SearchBar (props) {

    // pass search term to parent component (homepage)
    function handleSearchChange(event) {
        props.setSearch(event.target.value)
    }

    return (
        <div className="search-content-wrapper">
            <TextField className="search-bar"
                fullWidth
                id="outlined-search"
                label="Search artist"
                type="search"
                variant="outlined"
                value={props.searchTerm === '' ? '' : props.searchTerm}
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

export default SearchBar;