import React from 'react'
import PropTypes from 'prop-types'
import Watch from './Watch'

function WatchList(props) {
    const onRemove = (name) => {
        props.onRemove(name);
    }
    return (
        <div>
            {
                props.watches.map((watch) => <Watch {...watch} onRemove={onRemove} key={watch.id}></Watch>
                )
            }
        </div>
    )
}

WatchList.defaultProps = {
    watches: []
}

WatchList.propTypes = {

}

export default WatchList

