import React, { Component } from 'react'
import moment from 'moment'

export class Watch extends Component {

        state = {
            time: moment().utcOffset(this.props.watch.timezone)
        }

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 50);
        }

    updateTime() {
        this.setState({
            time: moment().utcOffset(this.props.watch.timezone)
        })
    }
    
        
    tick() {
            let testTime = moment().utcOffset(this.time)
            let hours = testTime.hour();
            let minutes = testTime.minute();
            let seconds = testTime.second();
            let time = `${hours}:${minutes}:${seconds}`;
            return testTime;
        }

    render() {
        const time = this.tick()
        console.log(this.props.watch.timezone);
        const { name_zone } = this.props
        return (
            <div className='watch'>
                <div>{name_zone}</div>
                <div>{time}</div>
            </div>
        )
    }
}

export default Watch
