import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchValue = ({ fetchBreweries }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('apex');
  const handleSearchClick = () => {
    dispatch(fetchBreweries(value));
  }

  return (
    <div className="col text-center">
      <div className="text-xs search col-sm-12">
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm mb-3" placeholder="Type in city name"></input>
        <br />
        <button
          className="btn btn-outline-info"
          onClick={handleSearchClick}
        >Search</button>
      </div>
    </div>
  )
};

export default SearchValue;