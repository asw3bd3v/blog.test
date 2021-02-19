import React from 'react';
import './main.css'
import Header from "../../components/Header";
import Home from "../../pages/Home";
import {useSelector} from "react-redux";

import {logout} from "../../redux/actions/authAction";

/* An example React component */
function Wrapper() {
    const token = useSelector(({authReducer}) => authReducer.userData.api_token);
    return (
        <div className="wrapper">
            <div className="content">
                <div className="header-wrapper">
                    <div className="container">
                        <Header logout={logout} token={token}/>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <Home token={token}/>
                    </div>
                </div>
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

export default Wrapper;
