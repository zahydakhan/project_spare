import * as Yup from 'yup';
import moment from 'moment';
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


export default [
    Yup.object().shape({
        [site.name]: Yup.string().required(`${site.requiredErrorMsg}`),
        [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
        [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
        [manager_name.name]: Yup.string().required(`${manager_name.requiredErrorMsg}`),
        [manager_email.name]: Yup.string().email().required(`${manager_email.requiredErrorMsg}`),
        [manager_phone.name]: Yup.string().required(`${manager_phone.requiredErrorMsg}`),
        [supervisor_name.name]: Yup.string().required(`${manager_name.requiredErrorMsg}`),
        [supervisor_email.name]: Yup.string().email().required(`${manager_email.requiredErrorMsg}`),
        [supervisor_phone.name]: Yup.string().required(`${manager_phone.requiredErrorMsg}`),
    }),
];