import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceChangeReducer from "../reducers/serviceChange";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchServiceList } from "../epics";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceChange: serviceChangeReducer,
});


const epic = combineEpics(
  fetchServiceList,
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);



export default store;
