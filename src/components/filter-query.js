import React from 'react';

const FilterQuery = (props) => {
  console.log(props.query);

  return (
    <div>
      < div className="btn-group dropright" >
        <button type="button" className="btn btn-warning ">Filter by Type</button>
      </div>
      <input
        query={props.query}
        onChange={event => {
          props.setQuery(event.target.value)
        }}
        type="text center" id="filter-query" className="text-center input-group input-group-sm col-sm-3" placeholder="type in the filter word"></input>
    </div>
  )
}

export default FilterQuery;