import React from 'react'


function ProjectList(props) {
    const { projects } = props;
    
    
    return (
     <div className="grid-container">
        {projects.map((o) => <img className='card' src={o.img} alt=''  key=" "/>)}
        </div>
    )
}

export default ProjectList;
