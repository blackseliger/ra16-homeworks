import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CrudModel from '../models/CrudCards'
import { nanoid } from 'nanoid'
import AddForm from './AddForm'
import ListCardsCrud from './ListCardsCrud'




export class Crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            crud_content : {content: ''},
            crud_cards: []
        }
    }

    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState(prevCrudContent => ({crud_content: {...prevCrudContent.crud_content, [name]: value}}))
    }


    handleSubmit = evt => {
        evt.preventDefault();
        const crudCard = new CrudModel(nanoid(), this.state.crud_content.content);
        this.setState(prevCrudCards => ({crud_cards: [...prevCrudCards.crud_cards, crudCard]}))
    }

    static propTypes = {

    }

    render() {
        const { crud_content, crud_cards } = this.state;
        const curdList = {
            list: crud_cards
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
