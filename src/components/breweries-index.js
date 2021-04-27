import { useSelector, useDispatch } from "react-redux";
// import { fetchBreweries } from '../actions';
import _ from "lodash";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchBreweries } from "../actions";

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
        <li className="list-group-item" key={brewery.id}>
          <Link to={`breweries/${brewery.id}`}>{brewery.name}</Link>
        </li>
      ));
    }
    return <div>No breweries</div>
  }

  return (
    <div>
      <h4>Breweries</h4>
      <ul className="list-group">{renderBreweries()}</ul>
    </div>
  );
}

export default BreweriesIndex;