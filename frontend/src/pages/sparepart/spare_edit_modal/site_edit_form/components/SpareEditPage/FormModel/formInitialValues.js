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

export default {
    [part_number.name]: '',
    [description.name]: '',
    [vendor_name.name]: '',
    [vendor_status.name]: 'international',
    [sp_type.name]: '',
    [weight_kg.name]: '',
    [machine.name]: '',
    [model_number.name]: '',
    [aud.name]: '',
    [usd.name]: '',
};