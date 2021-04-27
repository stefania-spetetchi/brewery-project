import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './style.css';
import { fetchBreweries } from "../actions";
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
          <div className="brewery">
            <Link to={`breweries/${brewery.id}`} key={brewery.id}>{brewery.name}</Link>
            <div>{brewery.type}</div>
          </div>
        </div>
      ));
    }
    return <div>No breweries</div>
  }

  return (
    <div>
      <SearchValue fetchBreweries={fetchBreweries} />
      <h4>Breweries</h4>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter by Type</button>
        <input type="text center" id="search-query" className="text-center input-group input-group-sm mb-3" placeholder="start the filter"></input>

      </div>
      <div className="main-layout">{renderBreweries()}</div>
    </div>
  );
}

export default BreweriesIndex;