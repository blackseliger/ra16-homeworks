import { EDIT_SERVICE } from '../actions/actionTypes'

const initialState = {
  editID: null,
};

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
      const {id} = action.payload;
      return {...state, editID: id};
    default:
      return state;
  }
}