import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {putProfile} from "../redux/actions/authAction";

const Profile = ({token, userData}) => {
    console.log(userData)
    let srcAvatar = 'uploads/' + userData.avatar;
    console.log(userData.name)
    return (
        <React.Fragment>
            {!token ?
                <Redirect from={'/profile'} to="/profile"/>
                :
                <div className={'login-form'}>
                    <h1>Профиль</h1>
                    <Formik enableReinitialize={true}
                        initialValues={{
                            name: userData.name,
                            email: userData.email,
                            password: '',
                            avatar: null,
                        }}

                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            let formData = new FormData();
                            formData.append('name', values.name)
                            formData.append('password', values.password)
                            if (values.avatar !== null) {
                                formData.append('avatar', values.avatar)
                            }
                            formData.append('email', values.email)
                            formData.append('_method', 'put')
                            putProfile(userData.id, formData);
                        }}
                    >
                        {({values, setFieldValue}) => (
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="name">Имя пользователя</label>
                                    <Field id={'name'} name={'name'} placeholder={'Введите имя пользователя'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Email</label>
                                    <span id={'email'} name={'email'}>{userData.email}</span>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password ">Новый пароль</label>
                                    <Field id={'password '} name={'password '}
                                           placeholder={'Введите новый пароль'}/>
                                </div>
                                <div className="form-row form-row__img">
                                    <label htmlFor="avatar">Аватар</label>
                                    <input id={'avatar'} type={'file'} name={'avatar'} onChange={(event) => {
                                        setFieldValue("avatar", event.currentTarget.files[0]);
                                        let fr = new FileReader();
                                        fr.addEventListener("load", function (e) {
                                            document.querySelector('#avatar-img').src = e.target.result
                                        }, false);
                                        fr.readAsDataURL(event.currentTarget.files[0]);
                                    }}/>
                                    <img src={srcAvatar} id={'avatar-img'}/>
                                </div>

                                <button type={'subscribe'}>Изменить</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            }
        </React.Fragment>
    );
};

export default Profile;