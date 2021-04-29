import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './style.css';
import { fetchBreweries } from "../actions";
import SearchValue from "./search-form.js";
import FilterQuery from "./filter-query";
import Breweries from "./breweries";


const BreweriesIndex = () => {
  const breweries = useSelector((state) => state.breweries);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreweries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBreweries]);

  let filterBreweries = breweries.filter((brewery) => {
    if (brewery.type) {
      return brewery.type.includes(query);
    }

    return false;
  });

  return (
    <div>
      <SearchValue fetchBreweries={fetchBreweries} />
      <h4>Breweries</h4>
      <FilterQuery query={query} setQuery={setQuery} />

      <div>
        <div className="main-layout">
          <Breweries breweries={filterBreweries} /></div>
      </div>
    </div>
  );
}

export default BreweriesIndex;