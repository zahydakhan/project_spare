import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        site,
        address,
        state,
        manager_name,
        manager_email,
        manager_phone,
        supervisor_name,
        supervisor_email,
        supervisor_phone,
    }
} = checkoutFormModel;

export default {
    [site.name]: '',
    [address.name]: '',
    [state.name]: '',
    [manager_name.name]: '',
    [manager_email.name]: '',
    [manager_phone.name]: '',
    [supervisor_name.name]: '',
    [supervisor_email.name]: '',
    [supervisor_phone.name]: '',
};