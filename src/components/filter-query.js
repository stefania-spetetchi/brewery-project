import React from 'react';
import Select from 'react-select';

const typesOfBreweries = [
  { label: '---All---', value: '' },
  { label: 'Micro', value: 'micro' },
  { label: 'Nano', value: 'nano' },
  { label: 'Regional', value: 'regional' },
  { label: 'Brewpub', value: 'brewpub' },
  { label: 'Large', value: 'large' },
  { label: 'Planning', value: 'planning' },
  { label: 'Bar', value: 'bar' },
  { label: 'Contract', value: 'contract' },
  { label: 'Proprietor', value: 'proprietor' },
  { label: 'Closed', value: 'closed' },
]
const FilterQuery = (props) => {
  return (
    <div className="FilterQuery">
      <Select
        options={typesOfBreweries}
        query={props.query}
        onChange={opt => {
          props.setQuery(opt.value)
        }}
      />
    </div>
  )
}

export default FilterQuery;
