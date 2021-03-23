import React from 'react'
import Card from './Card'

function ListCardsCrud(props) {
    
    const handleDelete = (id) => {
        props.handleDelete(id)
    }

    const handleUpdate = () => {
        props.handleUpdate()
    }
    
    return (
        <div>
            <div>
                <button onClick={() => handleUpdate()}>Обновление списка с сервера</button>
            </div>
        {props.list.map(card => <Card key={card.id} cardID={card.id} card={card.content} handleDelete={handleDelete}></Card> )}       
        </div>
    )
}

export default ListCardsCrud
