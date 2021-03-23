import React from 'react'
import Card from './Card'

function ListCardsCrud(props) {
    
    const handleDelete = (id) => {
        props.handleDelete(id)
    }
    
    return (
        <div>
        {props.list.map(card => <Card key={card.id} cardID={card.id} card={card.content} handleDelete={handleDelete}></Card> )}       
        </div>
    )
}

export default ListCardsCrud
