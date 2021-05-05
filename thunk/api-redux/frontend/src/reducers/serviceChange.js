import { CHANGE_SERVICE_FIELD, CHANGE_SERVICE_REQUEST, CHANGE_SERVICE_FAILURE,
  CHANGE_SERVICE_SUCCESS,
  CHANGE_SERVICE_DATA,
} from '../actions/actionTypes';


const initialState = {
  item: {
    id: '',
    name: '',
    price: '',
    content: '',
  },
  loadingChange: false,
  errorChange: null
}

export default function serviceChangeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_DATA:
      console.log(action.payload)
      const {id, name, price, content} = action.payload;
     return {
       ...state, 
       item: {
         id, name, price, content,
       }, 
       loadingChange: false, errorChange: null,
     };
    case CHANGE_SERVICE_FIELD:
       const {nameField, value} = action.payload;
       const { item } = state; 
      return {
        ...state, item: {
          ...item, [nameField]: value,
        }
      }; case CHANGE_SERVICE_REQUEST: 
      return {
        ...state, 
        loadingChange: true,
        errorChange: null
      }; case CHANGE_SERVICE_FAILURE:
        const { error } = action.payload;
        return {
          ...state, loadingChange: false, errorChange: error
      }; 
      case CHANGE_SERVICE_SUCCESS:
      return {...initialState};
         default: 
          return state; 
  }      
}