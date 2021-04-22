import { FILTER_SERVICE } from '../actions/actionTypes'


const intialState = {
    filter: '',
}

export default function serviceFilterReducer(state = intialState, action) {
    switch (action.type) {
        case FILTER_SERVICE: {
            const { value } = action.payload;
            
            return {...state, filter: value.trim().toLowerCase()}
            // исправлено
        }
        default:
            return state;
    }
}