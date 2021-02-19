import React from 'react';
import {Field, Form, Formik} from "formik";
import {registration} from "../redux/actions/authAction";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

const Registration = ({token}) => {
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
                            name: '',
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            dispatch(registration(values));
                            //dispatch(loginAuth(values));
                        }}
                    >
                        <Form>
                            <div className="form-row">
                                <label htmlFor="name">Имя</label>
                                <Field id={'name'} name={'name'} placeholder={'Введите имя'}/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
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

export default Registration;
