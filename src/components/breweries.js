import { Link } from "react-router-dom";
import _ from "lodash";

const Breweries = (props) => {
  if (!_.isEmpty(props.breweries)) {
    return props.breweries.map((brewery) => (
      <div className="breweries-layout col-md-3" key={brewery.id}>
        <div className="brewery"
        >
          <br />
          <Link to={`breweries/${brewery.id}`}>{brewery.name}</Link>
          <div>
            <span className="tooltiptext" >
              <span className="iconify" data-icon="cil:flag-alt" data-inline="false"></span>
              <br />
              {brewery.city}, {brewery.state} <br />
              <strong>Type:</strong> {brewery.type}
            </span>
            <br />
            <span className="url">{brewery.website}</span>
          </div>
        </div>
      </div>
    ));
  }
  return <div>No breweries</div>
}


export default Breweries;