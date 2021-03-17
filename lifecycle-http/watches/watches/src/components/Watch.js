import React, { Component } from 'react'
import moment from 'moment'

export class Watch extends Component {
    constructor({watch}) {
        super({watch})
        this.watch = watch
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 50);
        }

        
    updateTime() {
            let testTime = moment().utcOffset(this.watch.timezone)
            let hours = testTime.hours();
            let minutes = testTime.minute();
            let seconds = testTime.second();
            let time = `${hours}:${minutes}:${seconds}`;
            return time;
        }

    render() {
        const time = this.updateTime()
        return (
            <div className='watch'>
                <div>{this.props.watch.name_zone}</div>
                <div>{time}</div>
            </div>
        )
    }
}

export default Watch
