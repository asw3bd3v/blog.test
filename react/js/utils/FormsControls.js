import React from 'react';
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={'formControl' + ' ' + (hasError ? 'error' : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const animatedComponents = makeAnimated();

export const SelectCustom = (props) => {
    const {input, meta, child, ...restProps} = props;
    //let options = props.category.map( opt => <option>...</option>)
    return (
        <FormControl {...props}>
            <Select
                options={options}
            >
            </Select>
        </FormControl>
    )
}
export const SelectMulti = (props) => {
    const {input, meta, child, ...restProps} = props;
    //let options = props.category.map( opt => <option>...</option>)
    return (
        <FormControl {...props}>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}

                isMulti
                options={options}
            >
            </Select>
        </FormControl>
    )
}
