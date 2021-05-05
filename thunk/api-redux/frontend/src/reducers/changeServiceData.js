// import {
//     CHANGE_SERVICE_DATA
// } from '../actions/actionTypes'

// const initialState = {
//     item: {
//         id: "",
//         name: "",
//         price: "",
//         content: "",
//     },
//     loading: false,
//     error: null,

// }

// export default function serviceChangeDataReducer(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_SERVICE_DATA:
//             const {item} = action.payload;
//             // const {item} = initialState;
//         return {
//             ...state, item
//         };
//         default: return state;
//     }
// } не сработало