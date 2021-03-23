import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddForm from './AddForm'
import ListCardsCrud from './ListCardsCrud'

const { REACT_APP_CURRENCY_URL } = process.env

/**
 * this.setState(prevCrudCards => ({crud_cards: [...prevCrudCards.crud_cards, crudCard]}))
 *  памятка
 */

// добавить CSS

export class Crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            crud_content : {"content": ""},
            crud_cards: []
        }
    }


    componentDidMount() {
        this.updateCrudCards()
    }

    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState(prevCrudContent => ({crud_content: {...prevCrudContent.crud_content, [name]: value}}))
    }

    updateCrudCards = () => {
        fetch(REACT_APP_CURRENCY_URL)
                    .then(responce => responce.json())
                    .then(notes => this.setState({ crud_cards: notes}))
    }

    handleDelete = (id) => {
        fetch(`${REACT_APP_CURRENCY_URL}/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            this.updateCrudCards()
        })
    }


    handleSubmit = evt => {
        evt.preventDefault();
        const content = this.state.crud_content;
        console.log(content)
            
        fetch(REACT_APP_CURRENCY_URL, {
                method: 'POST',
                body: JSON.stringify(content),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            .then(() => {
               this.updateCrudCards()
               this.setState({crud_content: {content: ''}})
            })
    }

    static propTypes = {

    }

    render() {
        const { crud_content, crud_cards } = this.state;
        const curdList = {
            list: crud_cards,
            handleDelete: this.handleDelete
        }
        return (
            <div>
               <AddForm {...crud_content} handleSubmit={this.handleSubmit} handleChange={this.handleChange}></AddForm>
               <ListCardsCrud {...curdList}></ListCardsCrud>
            </div>
        )
    }
}

export default Crud
