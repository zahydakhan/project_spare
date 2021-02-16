import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
    formField: {
        description,
        roller_diameter,
        wall_thickness,
        roller_length,
        shaft_diameter,
        bearing,
        aud,
        usd,
        vendor_name,
    }
} = checkoutFormModel;


export default [
    Yup.object().shape({
        [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
        [roller_diameter.name]: Yup.number(`${roller_diameter.requiredErrorMsg}`).required(`${roller_diameter.requiredErrorMsg}`),
        [wall_thickness.name]: Yup.number('Must be a valid number').required(`${wall_thickness.requiredErrorMsg}`),
        [roller_length.name]: Yup.number('Must be a valid number').required(`${roller_length.requiredErrorMsg}`),
        [shaft_diameter.name]: Yup.number('Must be a valid number').required(`${shaft_diameter.requiredErrorMsg}`),
        [bearing.name]: Yup.number('Must be a valid number').required(`${bearing.requiredErrorMsg}`),
        [aud.name]: Yup.number('Must be a valid number').required(`${aud.requiredErrorMsg}`),
        [usd.name]: Yup.number('Must be a valid number').required(`${usd.requiredErrorMsg}`),
        [vendor_name.name]: Yup.string().required(`${vendor_name.requiredErrorMsg}`),
    }),
];