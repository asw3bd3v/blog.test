export function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}
export const validatePassword = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    }else if(value.length < 6){
        error = 'Min length 6 sym';
    }
    return error;
};
export const validateRequired = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
};