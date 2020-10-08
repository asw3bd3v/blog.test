import React from 'react';
import {Input, renderSelectField} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";



const AddPostForm = (props) => {
    return (
        <div>
            <h2>Add Post</h2>
            <form className={'form'} onSubmit={props.handleSubmit}>
                <div className={'form-row'}><Field component={Input} name={'name'} type={'text'} placeholder={'name'} /></div>
                <div className={'form-row'}><Field component={Input} name={'img'} type={'file'} /></div>
                <div className={'form-row'}><Field component={renderSelectField} name={'category'}>
                    <option value={'ff0000'}>Red</option>
                    <option value={'00ff00'}>Green</option>
                    <option value={'0000ff'}>Blue</option>
                </Field></div>
                <div className={'form-row'}>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)

const AddPost = () => {
    return (
        <AddPostReduxForm/>
    )
}
export default AddPost;
