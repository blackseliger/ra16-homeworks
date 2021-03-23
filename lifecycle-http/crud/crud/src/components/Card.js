import React from 'react'

function Card(props) {

  const handleDelete = (id) => {
    props.handleDelete(id)
  }

    return (
        <div>
          <span>{props.card}</span>
          <span>{props.cardID}</span>
          <button onClick={() => handleDelete(props.cardID)}>X</button>
        </div>
    )
}

export default Card
