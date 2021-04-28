import { useSelector } from "react-redux";
// import { fetchBreweries, fetchBrewery } from "../actions";
import { Link } from "react-router-dom";
//import breweryReducer from "../reducers/breweries-reducer";
//import breweryReducer from "../reducers/breweries-reducer";

const BreweryShow = (props) => {
  const brewery = useSelector(({ breweries }) => {
    return breweries.find((brewery) => {
      return brewery.id === parseInt(props.match.params.id);
    });
  });

  const comments = [
    {
      user: "Ian",
      comment: "I had a great time"
    }
  ];

  function renderBrewery() {
    return (
      <div>
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

  function renderComments() {
    return (
      <div>
        <h3>Comments</h3>
        <hr></hr>
        <h5>{comments[0].user}</h5>
        <p>{comments[0].comment}</p>
        <hr></hr>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">Back</Link>
      {renderBrewery()}
      <br></br>
      <br></br>
      <br></br>
      {renderComments()}
      <Link to={`${brewery.id}/addComment`} className="btn btn-primary">Add Comment</Link>
    </div>
  )
}

export default BreweryShow;