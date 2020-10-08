import React from 'react';
import {Input, SelectCustom, SelectMulti} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const AddPostForm = (props) => {
    let colors = ['orange', 'red', 'blue', 'purple']
    return (
        <div>
            <h2>Add Post</h2>
            <form className={'form'} onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={'name'} type={'text'} placeholder={'name'} /></div>
                <div><Field component={Input} name={'img'} type={'file'} /></div>
                <div><Field component={SelectCustom} name={'category'}/></div>
                <div><Field component={SelectMulti}></Field></div>
                <div><Field component={Input} name={'password'} type={'password'} placeholder={'password'}/></div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'login'
})(AddPostForm)

const AddPost = () => {
    return (
        <AddPostReduxForm/>
    )
}
export default AddPost;
