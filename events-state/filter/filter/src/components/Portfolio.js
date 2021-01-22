import React, { useState } from 'react';
import FiltersModel from '../models/FiltersModel';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar'
// import PropTypes from 'prop-types';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All"
        };
        this.filters = props.filters;
        this.projects = props.projects;
    }

    onSelectFilter = (state) => {
        this.setState({selected: state});
    }

    render() {
        return (
            <div>
                {<Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter}></Toolbar>}
                {<ProjectList projects={(this.state.selected === "All") ? this.projects : this.projects.filter( (el) => el.category === this.state.selected)}></ProjectList>}
            </div>
        )
    }
}

export default Portfolio;

















// function PortFolio(props) {
//     const [filter, setState] = useState([
//         new FiltersModel(1, 'All', true), new FiltersModel(2, 'Websites'), 
//         new FiltersModel(3, 'Flayers'), new FiltersModel(4, 'Business Cards'),
//     ])
    
//     const onSelectFilter = item => {setState(prevItems => prevItems.map(o => console.log(o))
//         )
//     }

//     return (
//         <>{filter.map(el => <Toolbar key={el.id} item = {el} onSelectFilter={onSelectFilter}></Toolbar>)}</>
//         // <Toolbar filters = {filters}></Toolbar>
//     )
// }


// export default PortFolio;