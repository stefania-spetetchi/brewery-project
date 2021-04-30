import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBreweryById } from '../actions';
import MapComponent from "./google-maps";


const BreweryShow = (props) => {
  const breweryId = parseInt(props.match.params.id);
  const dispatch = useDispatch();
  const brewery = useSelector(({ breweries }) => breweries.find(brewery => brewery.id === breweryId));

  useEffect(() => {
    dispatch(fetchBreweryById(breweryId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBreweryById]);

  const comments = useSelector(({ comments }) => comments.filter(comment => comment.breweryId === brewery.id));

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  }

  const phoneNumber = formatPhoneNumber(brewery?.phone);

  function renderBrewery() {
    return (
      <div>
        <h1>{brewery?.name}</h1>
        <hr></hr>
        <p>Type: {brewery?.type}</p>
        <h4>{brewery?.address}</h4>
        <h4>{brewery?.city}, {brewery?.state} {brewery?.zipCode}</h4>
        <h4>{phoneNumber}</h4>
        <h5><a href={brewery?.website}>Website</a></h5>
      </div>
    )
  }

  function renderComments() {
    if (comments.length > 0) {
      return (
        <div>
          <h3>Comments</h3>
          <hr></hr>
          {comments.map((comment, index) => (
            <div key={index}>
              <h5>{comment.user}</h5>
              <p>{comment.comment}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      )
    }
    return <div>
      <h3>Comments</h3>
      <hr></hr>
      <p>No comments to show</p>
    </div>
  }

  return (
    <div className="text">
      <Link to="/">Back</Link>
      {renderBrewery()}
      <br></br>
      <br></br>
      <br></br>
      {renderComments()}
      <Link to={`${brewery?.id}/addComment`} className="btn btn-primary">Add Comment</Link>
      <hr />
      <MapComponent latitude={brewery?.latitude} longitude={brewery?.longitude} />
    </div>
  )
}

export default BreweryShow;