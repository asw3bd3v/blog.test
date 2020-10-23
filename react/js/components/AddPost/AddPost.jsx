import React from 'react';
import {Input, InputFile, renderSelectField, Textarea} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {savePost} from "../../redux/posts-reducer";


const AddPostForm = (props) => {
    let categories = '',
        tags = '';
    if (props.categories.length) {
        categories = props.categories.map(item => <option key={item.id} value={item.title}>{item.title}</option>);
    }
    if (props.tags.length) {
        tags = props.tags.map(item => <option key={item.id} value={item.title}>{item.title}</option>);
    }

    return (
        <form className={'form'} onSubmit={props.handleSubmit}>
            <div className={'form-row'}><Field component={Input} name={'name'} type={'text'} placeholder={'Имя'}/></div>


            <div className={'form-row'}><Field component={InputFile} name={'img'} onChange={this.handleFileChange}/></div>


            <div className={'form-row'}>
                <Field component={renderSelectField} name={'categories'}>
                    {categories}
                </Field>
            </div>
            <div className={'form-row'}>
                <Field component={renderSelectField} name={'tags'}>
                    {tags}
                </Field>
            </div>
            <div className={'form-row'}><Field component={Input} name={'date'} type={'text'} placeholder={'Дата'}/></div>
            <div className={'form-row'}><Field component={Textarea} name={'descripotion'} type={'text'} placeholder={'Описание'}/></div>
            <div className={'form-row'}>
                <button>Добавить</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPost',
    fields: ['attachments']
})(AddPostForm)

const AddPost = (props) => {

    const onSubmit = (formData) => {
        //console.log(formData)
        let fd = new FormData();
        fd.append('title', formData.name);
        fd.append('date', formData.date,);
        fd.append('content', formData.descripotion);
        fd.append('category_id', 2);
        fd.append('image', formData.img);

        savePost(fd)
    }
    return (
        <div>
            <h2>Add Post</h2>
            <AddPostReduxForm onSubmit={onSubmit} categories={props.categories} tags={props.tags}/>
        </div>
    )
}
export default AddPost;
