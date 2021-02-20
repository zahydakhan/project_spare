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
        month
    }
} = checkoutFormModel;

export default {
    [part_number.name]: '',
    [description.name]: '',
    [vendor_name.name]: '',
    [quantity.name]: '',
    [unit_price.name]: '',
    [line_number.name]: '',
    [pr_number.name]: '',
    [total_price.name]: '',
    [site_name.name]: '',
    [month.name]: '',
};