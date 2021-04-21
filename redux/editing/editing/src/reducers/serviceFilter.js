import { FILTER_SERVICE } from '../actions/actionTypes'


const intialState = {
    filter: '',
}

export default function serviceFilterReducer(state = intialState, action) {
    switch (action.type) {
        case FILTER_SERVICE: {
            const { value } = action.payload;
            value.trim().toLowerCase()
        }
        default:
            return state;
    }
}