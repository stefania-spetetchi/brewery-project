import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchValue = ({ fetchBreweries }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('Raleigh');
  const handleSearchClick = () => {
    dispatch(fetchBreweries(value));
  }

  const handleEnterPress = (e) => {
  if (e.keyCode === 13) {
    handleSearchClick();
    }
  };

  return (
    <div className="col text-center">
      <div className="text-xs search ">
        <input
          value={value}
          onKeyDown={handleEnterPress}
          onChange={event => {
            setValue(event.target.value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm mb-4 mt-4 col-sm-12 offset-sm-1" placeholder="Type in city name"></input>
        <br />
        <button
          onClick={handleSearchClick}
          className="btn btn-outline search mb-4 mt-4 btn-sm"
        >Search</button>
      </div>
    </div>
  )
};

export default SearchValue;