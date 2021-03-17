import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WatchesModel from '../models/WatchesModel';
import { nanoid } from 'nanoid'
import Watch from './Watch';
import WatchList from './WatchList';


export default class Watches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchName: {name_time: '', timezone: ''},
            watches: [],
        }
    }

    removeWatch = (name) => {
        this.setState((prevState) => ({
            watches: prevState.watches.filter((watch) => watch.name_time !== name),
            })
        )
    }


    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.type === 'name_time' ? evt.target.value : evt.target.value;
        this.setState(prevWatchName => ({watchName: {...prevWatchName.watchName, [name]: value }}));
    }


    handleSubmit = evt => {
        evt.preventDefault();
        const watch = new WatchesModel(nanoid(), this.state.watchName.name_time, this.state.watchName.timezone)
        this.setState(prevWatches => ({watches: [...prevWatches.watches, watch]}))
    };

    render() {
        const { watchName } = this.state
        const watchList = {
            watches: this.state.watches,
            onRemove: this.removeWatch,
        }
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name_time'>Название</label>
                    <input type='name_time' name='name_time' value={watchName.name_time} onChange={this.handleChange}></input> 
                    <label htmlFor='timezone'>Временная зона</label>
                    <input type='timezone' name='timezone' value={watchName.timezone} onChange={this.handleChange}></input>
                    <button type='submit'>OK</button> 
         </form> 
            <WatchList {...watchList}></WatchList>
            </div>
        )
    }
}

Watches.defaultProps = {
    watchName : {name_time: 'name', timezone: '6'}
}

Watches.propTypes = {

}

// export default Watches

