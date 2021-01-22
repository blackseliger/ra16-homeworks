
import React from 'react';

function Toolbar(props) {
    const { filters, selected   } = props;
    const onSelectFilter = (el) => {
        props.onSelectFilter(el);
    }
    return (
        <div className="buttons">{
       filters.name.map( (o) => (<button className={o} onClick={() => (onSelectFilter(o))} key={o}>{o}</button>))}
        </div>
    )
}

export default Toolbar;