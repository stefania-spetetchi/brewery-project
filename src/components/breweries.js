import { Link } from "react-router-dom";
import _ from "lodash";

const Breweries = (props) => {
  if (!_.isEmpty(props.breweries)) {
    return props.breweries.map((brewery) => (
      <div className="breweries-layout col-md-3" key={brewery.id}>
        <div className="brewery"
        >
          <Link to={`breweries/${brewery.id}`}>{brewery.name}</Link>
          <div>
            <span className="tooltiptext">
              {brewery.city}, {brewery.state} -
              {brewery.type}
            </span>
          </div>
        </div>
      </div>
    ));
  }
  return <div>No breweries</div>
}

export default Breweries;