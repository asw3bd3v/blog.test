import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import {HashRouter} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "../../redux/store";
import Wrapper from "./Wrapper";
import {getCookie} from "../../utils/cookie";
import {setToken} from "../../redux/actions/authAction";

/* An example React component */
function Main() {

    return (
        <HashRouter>
            <Provider store={store}>
                <Wrapper/>
            </Provider>
        </HashRouter>
    );
}

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
