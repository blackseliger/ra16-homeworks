import { CHANGE_SERVICE_FIELD } from '../actions/actionTypes'

const intialState = {
    name: '',
    price: '',
};

export default function  serviceAddReducer(state = intialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: 
            const {name, value} = action.payload;
            return {...state, [name]: value}
        default:
            return state;
    }
}

