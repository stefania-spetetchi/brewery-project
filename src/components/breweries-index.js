import { useSelector, useDispatch } from "react-redux";
// import { fetchBreweries } from '../actions';
import _ from "lodash";
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
          <p>{brewery.name}</p>
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