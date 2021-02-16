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
    },
} = checkoutFormModel;

export default {
    [description.name]: '',
    [roller_diameter.name]: '',
    [wall_thickness.name]: '',
    [roller_length.name]: '',
    [shaft_diameter.name]: '',
    [bearing.name]: '',
    [aud.name]: '',
    [usd.name]: '',
    [vendor_name.name]: '',
};