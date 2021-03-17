import React from 'react'
import PropTypes from 'prop-types'
import Watch from './Watch'

function WatchList(props) {

    return (
        <div>
            {
                props.watches.map((watch) => <Watch {...watch} key={watch.id}></Watch>
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

