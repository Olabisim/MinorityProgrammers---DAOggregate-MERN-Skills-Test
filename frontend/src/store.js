import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    dataListReducer,
    dataDetailsReducer,
} from "./reducers/dataReducers";

const reducer = combineReducers({
    dataList: dataListReducer,
    dataDetails: dataDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
