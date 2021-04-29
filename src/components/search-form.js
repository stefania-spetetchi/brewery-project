import React, { useState } from 'react';
// import { fetchBreweries } from '../actions';
import { useDispatch } from "react-redux";

const SearchValue = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="col text-center">
      <div className="text-xs search ">
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm mb-4 mt-4 col-sm-8 offset-sm-1" placeholder="Type in city name"></input>
        <br />
        <button
          className="btn btn-outline-info search mb-4 mt-4"
        >Search</button>
      </div>
    </div>
  )
};

export default SearchValue;