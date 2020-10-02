import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../utils/FormsControls";
import './subscribe.css';

const SubscribeForm = (props) => {
    return (
        <div className={'subscribe'}>
            <div className="subscribe-title">GET NEWSLETTER</div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={'email'} placeholder={'Your email adress'}/></div>
                {/*<Field component={Input} />*/}
                <button>Subscribe now</button>
            </form>
        </div>
    )
}
const SubscribeReduxForm = reduxForm({
    form: 'subscribe'
})(SubscribeForm)

const Subscribe = () => {
    return(
        <SubscribeReduxForm />
    )
}

export default Subscribe;
