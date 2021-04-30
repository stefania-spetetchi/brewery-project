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

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? '#c66b3d' : '#fca311',
    padding: 5,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200
  }),
  base: () => ({
    borderBottom: "c66b3d",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
const FilterQuery = (props) => {
  return (
    <div className="filterQuery col-sm-12">
      <Select
        styles={customStyles}
        options={typesOfBreweries}
        query={props.query}
        onChange={opt => {
          props.setQuery(opt.value)
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            text: 'orangered',
            primary25: '#14213d',
            primary: '#14213d',
            color: '#fca311',
          },
        })}
      />
    </div>
  )
}

export default FilterQuery;
