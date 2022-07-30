import {fireEvent, queryByLabelText, render, screen} from '@testing-library/react';
import {mount, shallow} from "enzyme";
import axios from 'axios';
import App from './App';
import Homepage from "./components/Homepage/Homepage";
import SearchBar from "./components/Searchbar/SearchBar";

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
    const setSearch = jest.fn((value) => {})

    const { queryByLabelText } = render(<SearchBar setSearch={setSearch}/>)

    const searchInput = queryByLabelText('Search artist')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
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

  it("Renders ArtistCard Component on Search", () => {
    const wrapper = mount(<Homepage />);
    const searchbar = wrapper.find(SearchBar);
  });

})


