// imports
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Homepage from "./Homepage/Homepage";
import EventsPage from "./EventsPage/EventsPage";
import './App.css';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/events" element={<EventsPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
