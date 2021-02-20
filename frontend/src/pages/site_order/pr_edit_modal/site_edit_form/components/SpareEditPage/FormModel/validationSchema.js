import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        part_number,
        description,
        vendor_name,
        quantity,
        unit_price,
        line_number,
        pr_number,
        total_price,
        site_name,
        month,
    }
} = checkoutFormModel;


export default [
    Yup.object().shape({
        [part_number.name]: Yup.string().required(`${part_number.requiredErrorMsg}`),
        [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
        [vendor_name.name]: Yup.string().required(`${vendor_name.requiredErrorMsg}`),
        [quantity.name]: Yup.string().required(`${quantity.requiredErrorMsg}`),
        [unit_price.name]: Yup.string().required(`${unit_price.requiredErrorMsg}`),
        [line_number.name]: Yup.string().required(`${line_number.requiredErrorMsg}`),
        [pr_number.name]: Yup.string().required(`${pr_number.requiredErrorMsg}`),
        [total_price.name]: Yup.string().required(`${total_price.requiredErrorMsg}`),
        [site_name.name]: Yup.string().required(`${site_name.requiredErrorMsg}`),
        [month.name]: Yup.string().required(`${month.requiredErrorMsg}`),
    }),
];