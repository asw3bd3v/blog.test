import React from 'react';


// material ui
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'


const FormControlCustom = ({input, meta: {touched, error}, children}) => {
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
        <FormControlCustom {...props}><textarea {...input} {...restProps}></textarea></FormControlCustom>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControlCustom {...props}><input {...input} {...restProps}></input></FormControlCustom>
    )
}

// export const renderSelectField = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return (
//         <FormControl {...props}>
//             <InputLabel htmlFor="age-native-simple">Category</InputLabel>
//             <Select
//                 native
//                 {...input}
//                 {...restProps}
//                 inputProps={{
//                     name: 'age',
//                     id: 'age-native-simple'
//                 }}
//             >
//                 {child}
//             </Select>
//         </FormControl>
//     )
// }
export const renderSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'category',
                id: 'age-native-simple'
            }}
        >
            {children}
        </Select>

    </FormControl>
)



