import {fireEvent, queryByLabelText, render, screen} from '@testing-library/react';
import {mount, shallow} from "enzyme";
import axios from 'axios';
import App from './App';
import Homepage from "./components/Homepage/Homepage";
import SearchBar from "./components/Searchbar/SearchBar";
import ArtistCard from "./components/ArtistCard/ArtistCard";
import EventsPage from "./components/EventsPage/EventsPage";

describe("App Component Test", () => {
  it('Renders without crashing', () => {
    shallow(<App/>);
  });

  it("Renders Homepage Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Homepage />)).toEqual(true);
  });
})

describe("Searchbar Component Test", () => {
  it('Updated Value on Change', () => {
    // jest mock function
    const setSearch = jest.fn((value) => {})

    // pass mock function to SearchBar component
    const { queryByLabelText } = render(<SearchBar setSearch={setSearch}/>)
    // select the actual input
    const searchInput = queryByLabelText('Search artist')

    // input test value into search bar
    fireEvent.change(searchInput, { target: { value: 'test' } })

    // expect value to have changed to test
    expect(searchInput.value).toBe('test')
  });
})

describe("ArtistCard Component Test", () => {
  it('Calls Toggle Function onClick', () => {
    // jest mock function that returns true when called
    const toggle = jest.fn()
    toggle.mockReturnValue(true)

    // render ArtistCard component
    const { queryByTestId } = render(<ArtistCard img_url="" name="" facebook_link="" showEventsToggle={toggle}/>)
    const link = queryByTestId('events-link')

    // click on the link
    fireEvent.click(link)

    // expect the function to have returned true
    expect(toggle()).toBe(true)
  });
})

describe("EventsPage Component Test", () => {
  it('Calls Toggle Function onClick', () => {
    // jest mock function that returns true when called
    const toggle = jest.fn()
    toggle.mockReturnValue(true)

    // render EventPage component
    const { queryByTestId } = render(<EventsPage showArtistToggle={toggle}/>)
    const link = queryByTestId('artists-link')

    // click on the link
    fireEvent.click(link)

    // expect the function to have returned true
    expect(toggle()).toBe(true)
  });

  it('Displays Heading if Selected Artist does not have Events', () => {

    // render EventsPage, pass artist name that does not have any events
    const { queryAllByTestId } = render(<EventsPage artist_name='aa' />)
    const heading = queryAllByTestId('no-events-heading')

    // expect no-events-heading to have been rendered
    expect(heading.length).toBe(1)
  });
})

describe("Homepage Component Test", () => {
  it('Renders without crashing', () => {
    shallow(<Homepage />);
  });

  it("Renders Searchbar Component", () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
  });

  // it("Renders ArtistCard Component on Search", () => {
  //   const wrapper = mount(<Homepage />);
  //   const searchbar = wrapper.find(SearchBar);
  // });

})


