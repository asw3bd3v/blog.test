import React from 'react';
import {Input} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";
import {AuthAPI} from "../../api";
import {setIsAuth} from "../../redux/auth-reducer";
import {deleteCookie, setCookie} from "../../utils/cookie/cookie";

const LoginForm = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <form className={'form'} onSubmit={props.handleSubmit}>
                <div><Field type={'text'} component={Input} name={'email'} placeholder={'email'}/></div>
                <div><Field component={Input} name={'password'} type={'password'} placeholder={'password'}/></div>
                <label className={'remember-me'}><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</label>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        AuthAPI.login(formData.email, formData.password)
            .then(response => {
                console.log(document.cookie)
                if(response.data.data.api_token.length > 0){
                    const token = response.data.data.api_token;
                    setCookie('token', token,{'max-age': 3600});
                    setIsAuth(token);
                    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                }else{
                    setIsAuth(null);
                    deleteCookie('token')
                }
            })
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}
export default Login;


