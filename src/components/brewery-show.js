import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { fetchBreweries, fetchBrewery } from "../actions";
import { Link } from "react-router-dom";
import breweryReducer from "../reducers/breweries-reducer";
//import breweryReducer from "../reducers/breweries-reducer";

const BreweryShow = (props) => {
  const brewery = useSelector(({ breweries }) => {
    return breweries.find((brewery) => {
      return brewery.id === parseInt(props.match.params.id);
    });
  });

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{brewery.name}</h1>
      <hr></hr>
      <p>Type: {brewery.type}</p>
      <h4>{brewery.address}</h4>
      <h4>{brewery.city}, {brewery.state}</h4>
      <h4>{brewery.phone}</h4>
      <h5><a href={brewery.website}>Website</a></h5>

    </div>
  )
}

export default BreweryShow;