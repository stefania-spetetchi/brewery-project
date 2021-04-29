import React from 'react';

const FilterQuery = (props) => {
  return (
    <div>
      <input
        query={props.query}
        onChange={event => {
          props.setQuery(event.target.value)
        }}
        type="text center" id="filter-query" className="text-center input-group input-group-sm col-sm-3 filter" placeholder="filter by type"></input>
      {/* < div className="btn-group dropright" >
        <button type="button" className="btn btn-warning ">Filter by Type</button>
      </div> */}
    </div>
  )
}

export default FilterQuery;