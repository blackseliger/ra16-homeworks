
import React from 'react';

function Toolbar(props) {
    const { filters, selected   } = props;
    const onSelectFilter = (selectedFilter) => {
        props.onSelectFilter(selectedFilter);
    }
    return (
        <div className="buttons">{
       filters.name.map( (filterName) => (<button className={filterName} onClick={() => (onSelectFilter(filterName))} key={filterName}>{filterName}</button>))}
        </div>
    )
}

export default Toolbar;