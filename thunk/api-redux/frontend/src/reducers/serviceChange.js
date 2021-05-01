import { CHANGE_SERVICE_FIELD, CHANGE_SERVICE_REQUEST, CHANGE_SERVICE_FAILURE,
  CHANGE_SERVICE_SUCCESS,
  CHANGE_SERVICE_DATA,
} from '../actions/actionTypes';


const initialState = {
  item: {
    id : '', 
    name: '', 
    price: '', 
    content: '',
  },
  loading: false,
  error: null
}

export default function serviceChangeReducer(state = initialState, action) {
  switch (action.type) {
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
        loading: true,
        error: null
      }; case CHANGE_SERVICE_FAILURE:
        const { error } = action.payload;
        return {
          ...state, loading: false, error
      }; case CHANGE_SERVICE_SUCCESS:
      return {...initialState};
         case CHANGE_SERVICE_DATA:
           console.log(`${action.payload} this`);
           const {id, name, price, content} = action.payload;
          return {
            ...state, 
            item: {
              id, name, price, content,
            }, 
            loading: false, error: null,
          };
         default: 
          return state; 
  }      
}