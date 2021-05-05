import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceChangeReducer from "../reducers/serviceChange";
import serviceChangeDataReducer from "../reducers/changeServiceData";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceChange: serviceChangeReducer,
  // serviceChangeData: serviceChangeDataReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
