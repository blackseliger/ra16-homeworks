import React from 'react'


function ProjectList(props) {
    const { projects } = props;
    
    
    return (
     <div className="grid-container">
        {projects.map((o) => <img className='card' src={o.img} alt=''  key=" "/>)}
        </div>

        // Вопрос
        // Здравствуйте, скажите, что сделал не так, по какой-то причине блок с картинками не появляется. Кнопки появляются.
        // Блок только реагирует на кнопку All, но появляется только блок div, внутри ничего нет. 
    )
}

export default ProjectList;
