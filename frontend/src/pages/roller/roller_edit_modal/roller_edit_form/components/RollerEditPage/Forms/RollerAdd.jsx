import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
	InputField,
	CheckboxField,
	SelectField,
	CheckboxField_smpc,
} from '../../FormFields';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const roller_options = [
	{
		value: 'Steel Trough Roller',
		label: 'Steel Trough Roller',
	},
	{
		value: 'Steel Return Roller',
		label: 'Steel Return Roller',
	},
	{
		value: 'HDPE Trough Roller',
		label: 'HDPE Trough Roller',
	},
	{
		value: 'HDPE Return Roller',
		label: 'HDPE Return Roller',
	},
	{
		value: 'Impact Roller',
		label: 'Impact Roller',
	},
];

export default function RollerAdd(props) {
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
	} = props;
	return (
		<React.Fragment>
			<Grid container alignItems='center' style={{ marginBottom: '0.7em' }}>
				<Grid item style={{ marginRight: '0.5em' }}>
					<AddCircleRoundedIcon color='primary' fontSize='large' />
				</Grid>
				<Grid item>
					<Typography
						variant='h6'
						style={{ fontSize: '1.5em', fontWeight: 'bolder' }}
					>
						Edit New Roller Sparepart
					</Typography>
				</Grid>
			</Grid>
			<br />

			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<SelectField
						name={description.name}
						label={description.label}
						data={roller_options}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={roller_diameter.name}
						label={roller_diameter.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={wall_thickness.name}
						label={wall_thickness.label}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={roller_length.name}
						label={roller_length.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={shaft_diameter.name}
						label={shaft_diameter.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={bearing.name}
						label={bearing.label}
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
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={vendor_name.name}
						label={vendor_name.label}
						fullWidth
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
