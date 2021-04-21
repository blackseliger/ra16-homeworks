
import {ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';
import {nanoid} from "nanoid";

const intialState = [
    {id: nanoid(), name: 'Замена стелка', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = intialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
        {
           const {id, name, price} = action.payload;
            if (id) {
                const Nstate = [...state];
                const item = Nstate.find(item => item.id === id)
                item.price = price;
                item.name = name;
                return Nstate;
            }
            return [...state, {id: nanoid(), name, price: Number(price)}];
        }
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return state.filter(service => service.id !== id);
        default:
            return state;
    }
}