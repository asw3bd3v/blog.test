import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {categoriesReducer, postsReducer, tagsReducer} from "./reducers/postReducer";
import {authReducer} from "./reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    postsReducer,
    authReducer,
    categoriesReducer,
    tagsReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
