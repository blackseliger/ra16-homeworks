import React from 'react'
import Card from './Card'

function ListCardsCrud(props) {
    
    
    return (
        <div>
        {props.list.map(card => <Card key={card.id} card={card.content}></Card> )}       
        </div>
    )
}

export default ListCardsCrud
