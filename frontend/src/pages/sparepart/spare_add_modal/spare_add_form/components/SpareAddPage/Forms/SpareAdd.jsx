import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
	InputField,
	CheckboxField,
	SelectField,
	CheckboxField_smpc,
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

export default function SparepartAdd(props) {
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
						Add New Sparepart
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
						name={vendor_status.name}
						label={vendor_status.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						name={sp_type.name}
						label={sp_type.label}
						data={types}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={weight_kg.name}
						label={weight_kg.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={machine.name}
						label={machine.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={model_number.name}
						label={model_number.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={aud.name}
						label={aud.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={usd.name}
						label={usd.label}
						fullWidth
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
