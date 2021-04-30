import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from '../actions'
import { Link, useHistory } from "react-router-dom";

const AddComment = (props) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  
  const brewery = useSelector(({ breweries }) => {
    return breweries.find((brewery) => {
      return brewery.id === parseInt(props.match.params.id);
    });
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCommentSubmit = (e) => {
    e.preventDefault();

      dispatch(
        addComment({
          breweryId: brewery.id,
          user,
          comment,
        })
      );
      history.push(`/breweries/${brewery.id}`);
  };
   
  return (
    <form onSubmit={handleCommentSubmit}>
      <Link to={`/breweries/${brewery.id}`}>Back</Link>
      <h3>Add a comment to the {brewery.name} page!</h3>
      <div className="form-group">
        <label>Your Name</label>
        <input
          required
          className="form-control"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label>Comment</label>
        <textarea
          required
          type="text-area"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default AddComment;