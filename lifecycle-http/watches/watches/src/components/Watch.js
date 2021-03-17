import React, { Component } from 'react'
import moment from 'moment'

export class Watch extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: moment().utcOffset(this.props.timezone)
        }
    }

    handleRemove = () => this.props.onRemove(this.props.name_time)


    componentDidMount() {
        this.interval = setInterval(this.updateTime, 50);
        }

    updateTime = () => {
        this.setState({
            time: moment().utcOffset(this.props.timezone)
        })
    }
    
        
    tick(time) {
            let hours = time.hour();
            let minutes = time.minute();
            let seconds = time.second();
            let watch = `${hours}:${minutes}:${seconds}`;
            return watch;
        }

    render() {
        const time = this.tick(this.state.time);
        return (
            <div className='watch'>
                <span>{this.props.name_time}</span>
                <span>{time}</span>
                <button onClick={this.handleRemove}>Удалить часы</button>
            </div>
        )
    }
}


Watch.defaultProps = {
    timezone: 0,
}

export default Watch
