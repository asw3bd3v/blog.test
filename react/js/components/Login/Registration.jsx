import React from 'react';
import {Input} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";

const RegistrationForm = (props) => {
    return (
        <div>
            <h2>Registration</h2>
            <form className={'form'} onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={'name'} type={'text'} placeholder={'name'}/></div>
                <div><Field component={Input} name={'email'} type={'text'} placeholder={'email'}/></div>
                <div><Field component={Input} name={'password'} type={'password'} placeholder={'password'}/></div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

const RegistrationReduxForm = reduxForm({
    form: 'login'
})(RegistrationForm)

const Registration = () => {
    return (
        <RegistrationReduxForm/>
    )
}
export default Registration;
