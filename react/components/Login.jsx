import React from 'react';
import {Field, Form, Formik} from "formik";
import {loginAuth} from "../redux/actions/authAction";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = ({token}) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            {token ?
                    <Redirect from={'/login'} to="/"/>
                    :
                    <div className={'login-form'}>
                        <h1>Авторизация</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                //console.log(values)
                                dispatch(loginAuth(values));
                            }}
                        >
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="email">email</label>
                                    <Field id={'email'} name={'email'} placeholder={'Введите email'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Пароль</label>
                                    <Field id={'password'} name={'password'} placeholder={'Введите пароль'}/>
                                </div>


                                <button type={'subscribe'}>Войти</button>
                            </Form>
                        </Formik>
                    </div>
            }
        </React.Fragment>
    );
};

export default Login;
