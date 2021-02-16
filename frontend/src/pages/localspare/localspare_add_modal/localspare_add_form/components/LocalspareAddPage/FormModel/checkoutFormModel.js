export default {
    formId: 'siteAddForm',
    formField: {
        part_number: {
            name: 'part_number',
            label: 'Part Number*',
            requiredErrorMsg: 'Part Number is required'
        },
        description: {
            name: 'description',
            label: 'Description*',
            requiredErrorMsg: 'description is required'
        },
        vendor_name: {
            name: 'vendor_name',
            label: 'Vendor Name*',
            requiredErrorMsg: 'Vendor Name is required'
        },
        vendor_status: {
            name: 'vendor_status',
            label: 'Vendor Status*',
            requiredErrorMsg: 'Vendor Status is required'
        },
        sp_type: {
            name: 'sp_type',
            label: 'Spare Part Type*',
            requiredErrorMsg: 'Spare Part Type is required'
        },
        weight_kg: {
            name: 'weight_kg',
            label: 'Weight Kg*',
            requiredErrorMsg: 'Weight Kg is required'
        },
        machine: {
            name: 'machine',
            label: 'Machine',
            requiredErrorMsg: 'Machine is required'
        },
        model_number: {
            name: 'model_number',
            label: 'Model Number',
            requiredErrorMsg: 'Model Number is required'
        },
        aud: {
            name: 'aud',
            label: 'Price (AUD)*',
            requiredErrorMsg: 'Price (AUD) is required'
        },
        usd: {
            name: 'usd',
            label: 'Price (USD)*',
            requiredErrorMsg: 'Price (USD) is required'
        },
    }
};