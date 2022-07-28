import { useLocation } from 'react-router-dom';

function EventsPage() {

    const location = useLocation();
    const artistName = location.state.artist_name;

    return (
        <h1>Hello {artistName}</h1>
    )
}

export default EventsPage;