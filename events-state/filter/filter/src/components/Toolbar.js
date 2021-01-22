
import React from 'react';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
debugger
    return (
        <div>{
       filters.name.map( (o) => (<button>{o}</button>))}
        </div>
    )
}

export default Toolbar;