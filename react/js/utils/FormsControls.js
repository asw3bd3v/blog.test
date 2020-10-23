import React from 'react';


// material ui
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
//import FormControlLabel from '@material-ui/core/FormControlLabel'
//import InputM from '@material-ui/core/Input';
//import Chip from '@material-ui/core/Chip';
//import FormHelperText from '@material-ui/core/FormHelperText'
//import Radio from '@material-ui/core/Radio'
//import RadioGroup from '@material-ui/core/RadioGroup'
//import {makeStyles, useTheme} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//         maxWidth: 300,
//     },
//     chips: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     chip: {
//         margin: 2,
//     },
//     noLabel: {
//         marginTop: theme.spacing(3),
//     },
// }));

//
// const FormControlCustom = ({input, meta: {touched, error}, children}) => {
//     const hasError = touched && error;
//     return (
//         <div className={'formControl' + ' ' + (hasError ? 'error' : '')}>
//             <div>
//                 {children}
//             </div>
//             {hasError && <span>{error}</span>}
//
//         </div>
//     )
// }

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


export const InputFile = ({ input, resetKey }) => {
    const { value, ...inputProps } = input

    const handleChange = (e) => {
        input.onChange(e.target.files[0])
    }

    return (
        <input {...inputProps} key={resetKey} type="file" onChange={handleChange} onBlur={() => {}} />
    )
}

export const renderSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
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
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };
// export const renderSelectFieldMulti = ({input, label, meta: {touched, error}, children, ...custom}) => {
//     const classes = useStyles();
//     const theme = useTheme();
//     return (
//         <FormControl error={touched && error}>
//             <InputLabel htmlFor="tags-native-simple">tags</InputLabel>
//             <Select
//                 labelId="demo-mutiple-chip-label"
//                 id="demo-mutiple-chip"
//                 //multiple
//                 {...input}
//                 {...custom}
//                 inputProps={{
//                     name: 'tags',
//                     id: 'tags-native-simple'
//                 }}
//                 input={<InputM id="select-multiple-chip"/>}
//                 renderValue={(selected) => (
//                     <div className={classes.chips}>
//                         {selected.map((value) => (
//                             <Chip key={value} label={value} className={classes.chip}/>
//                         ))}
//                     </div>
//                 )}
//                 MenuProps={MenuProps}
//             >
//                 {children}
//             </Select>
//
//         </FormControl>
//     )
//
// }



