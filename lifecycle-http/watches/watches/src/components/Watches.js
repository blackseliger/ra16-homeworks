import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WatchesModel from '../models/WatchesModel';
import { nanoid } from 'nanoid'


export default class Watches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watcheName: {name_time: '', timezone: ''},
            watches: [],
        }
    }

    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.type === 'name_time' ? evt.target.value : evt.target.value;
        this.setState({
            watcheName: {[name]: value}})
    }

    componentDidMount() {
        if (this.state.watches !== null) {
            this.state.watches = [{name_time: 'Moscow', timezone: 0}]
        }
    }
// !!
    handleSubmit = evt => {
        evt.preventDefault();
        const watch = new WatchesModel(nanoid(), this.state.watcheName.name_time, this.state.watcheName.timezone)
        this.setState(prevWatches => ({watches : prevWatches, watch})) // куда мне сохранять предыдущие часы?...
    };

    // сделать в классе
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name_time'>Название</label>
                    <input type='name_time' name='name_time' value={this.state.name_time} onChange={this.handleChange}></input> 
                    <label htmlFor='timezone'>Временная зона</label>
                    <input type='timezone' name='timezone' value={this.state.timezone} onChange={this.handleChange}></input>
                    <button type='submit'>OK</button> 
         </form> 
         <ul>
         { this.state.watches.length >= 0 && this.state.watches.map( watch =>  <li key={watch.id}>
            <span>{watch.timezone}</span>
         </li>
            )}
        </ul> 
            </div>
        )
    }
}



// function Watches(props) {

//     const [ watcheName, setWatcheName ] = useState({name_time: '', timezone: ''});
//     const [ watches, setWatches ] = useState([]);


//     const handleChange = evt => {
//         evt.preventDefault();
//         const name = evt.target.name;
//         const value = evt.target.type === 'name-time' ? evt.target.value : evt.target.value;
//         setWatcheName(prevWatcheName => ({...prevWatcheName, [name]: value}));
//     }

//     const updateTime = () => {
//         let testTime = moment().utcOffset(7)
//         let hours = testTime.hours();
//         let minutes = testTime.minute();
//         let seconds = testTime.second();
//         let time = `${hours}:${minutes}:${seconds}`;
//         return time;
//     }

//     let time = updateTime();
//     // setWatches(prevWatches => [...prevWatches, time]);
//     const handleSubmit = evt => {
//         evt.preventDefault();
//         console.log(moment.locale())
//         console.log(moment().format('LT'))
//         console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//         console.log(moment().format('LTS') )
//         // const testTime = moment().utcOffset(7)
//         // let hours = testTime.hours();
//         // let minutes = testTime.minute();
//         // let seconds = testTime.second();
//         // let time = `${hours}:${minutes}:${seconds}`;
//         // setWatches(prevWatches => [...prevWatches, time]);
//         // console.log(`${hours}:${minutes}: ${seconds}`)
//         // узнал временную зону 

//         const componentDidMount = () => {
//             let timer = setInterval(updateTime, 50);
//           }
        

//         componentDidMount();
//         // в лекции был сетинтвервал, чтоб каждую секунду двигались часы

//     }


//     return (
//     <>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='name_time'>Название</label>
//             <input type='name_time' name='name_time' value={watcheName.name} onChange={handleChange}></input> 
//             <label htmlFor='timezone'>Временная зона</label>
//             <input type='timezone' name='timezone' value={watcheName.timezone} onChange={handleChange}></input>
//             <button type='submit'>OK</button> 
//         </form>
//         <span>{time}</span>

//     </>
//     )
// }

// Watches.propTypes = {

// }

// export default Watches

