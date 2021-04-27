import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import './style.css';

import { fetchBreweries } from "../actions";
import { useEffect } from "react";
import SearchValue from "./search-form.js";

const BreweriesIndex = () => {
  const breweries = useSelector((state) => state.breweries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreweries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBreweries]);


  function renderBreweries() {
    if (!_.isEmpty(breweries)) {
      return breweries.map((brewery) => (

        <div className="breweries-layout col-md-3">
          <Link to={`breweries/${brewery.id}`} className="brewery" key={brewery.id}>{brewery.name}</Link>
        </div>
      ));
    }
    return <div>No breweries</div>
  }

  return (
    <div>
      <SearchValue fetchBreweries={fetchBreweries} />
      <h4>Breweries</h4>
      <div className="main-layout">{renderBreweries()}</div>
    </div>
  );
}

export default BreweriesIndex;