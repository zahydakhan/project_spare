import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
	InputField,
	SelectField,
} from '../../FormFields';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const types = [
	{
		value: undefined,
		label: 'None',
	},
	{
		value: 'Ground Engaging Tools',
		label: 'Ground Engaging Tools',
	},
	{
		value: 'Manganese Liners',
		label: 'Manganese Liners',
	},
	{
		value: 'Mechanical Parts',
		label: 'Mechanical Parts',
	},
];

const months = [
	{
		value: undefined,
		label: 'None',
	},
	{
		value: 'January',
		label: 'January',
	},
	{
		value: 'February',
		label: 'February',
	},
	{
		value: 'March',
		label: 'March',
	},
	{
		value: 'April',
		label: 'April',
	},
	{
		value: 'May',
		label: 'May',
	},
	{
		value: 'June',
		label: 'June',
	},
	{
		value: 'July',
		label: 'July',
	},
	{
		value: 'August',
		label: 'August',
	},
	{
		value: 'September',
		label: 'September',
	},
	{
		value: 'October',
		label: 'October',
	},
	{
		value: 'November',
		label: 'November',
	},
	{
		value: 'December',
		label: 'December',
	},
];

export default function SparepartEdit(props) {
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
		},
	} = props;
	return (
		<React.Fragment>
			<Grid container alignItems='center' style={{ marginBottom: '0.7em' }}>
				<Grid item style={{ marginRight: '0.5em' }}>
					<AccountCircleRoundedIcon fontSize='large' />
				</Grid>
				<Grid item>
					<Typography
						variant='h6'
						style={{ fontSize: '1.5em', fontWeight: 'bolder' }}
					>
						Edit Sites Purchase Request
					</Typography>
				</Grid>
			</Grid>
			<br />

			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={part_number.name}
						label={part_number.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={description.name}
						label={description.label}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={vendor_name.name}
						label={vendor_name.label}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={quantity.name}
						label={quantity.label}
						fullWidth
					/>
				</Grid>
				
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={unit_price.name}
						label={unit_price.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={line_number.name}
						label={line_number.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={pr_number.name}
						label={pr_number.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={total_price.name}
						label={total_price.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={site_name.name}
						label={site_name.label}
						disabled
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						name={month.name}
						label={month.label}
						data={months}
						fullWidth
					/>
				</Grid>
				
			</Grid>
		</React.Fragment>
	);
}
