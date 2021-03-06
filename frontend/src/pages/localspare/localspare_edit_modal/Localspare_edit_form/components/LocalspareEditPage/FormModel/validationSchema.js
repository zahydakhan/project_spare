import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        part_number,
        description,
        vendor_name,
        vendor_status,
        sp_type,
        weight_kg,
        machine,
        model_number,
        aud,
        usd,
    }
} = checkoutFormModel;


export default [
    Yup.object().shape({

        [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
        [vendor_name.name]: Yup.string().required(`${vendor_name.requiredErrorMsg}`),
        [sp_type.name]: Yup.string().required(`${sp_type.requiredErrorMsg}`),
        [weight_kg.name]: Yup.string().required(`${weight_kg.requiredErrorMsg}`),
        [machine.name]: Yup.string().required(`${machine.requiredErrorMsg}`),
        [model_number.name]: Yup.string().required(`${model_number.requiredErrorMsg}`),
        [aud.name]: Yup.number().required(`${aud.requiredErrorMsg}`),
        [usd.name]: Yup.number().required(`${usd.requiredErrorMsg}`),
    }),
];