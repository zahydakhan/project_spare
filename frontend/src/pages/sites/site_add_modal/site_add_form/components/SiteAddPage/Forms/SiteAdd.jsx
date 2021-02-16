import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
	InputField,
	CheckboxField,
	SelectField,
	CheckboxField_smpc,
} from '../../FormFields';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const states = [
	{
		value: undefined,
		label: 'None',
	},
	{
		value: 'VIC',
		label: 'VIC',
	},
	{
		value: 'NSW',
		label: 'NSW',
	},
	{
		value: 'SA',
		label: 'SA',
	},
	{
		value: 'NT',
		label: 'NT',
	},
	{
		value: 'QLD',
		label: 'QLD',
	},
	{
		value: 'TAS',
		label: 'TAS',
	},
	{
		value: 'WA',
		label: 'WA',
	},
];

export default function SiteAdd(props) {
	const {
		formField: {
			site,
			address,
			state,
			manager_name,
			manager_email,
			manager_phone,
			supervisor_name,
			supervisor_email,
			supervisor_phone,
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
						Add New Site
					</Typography>
				</Grid>
			</Grid>
			<br />

			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={site.name}
						label={site.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={address.name}
						label={address.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						name={state.name}
						label={state.label}
						data={states}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={manager_name.name}
						label={manager_name.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={manager_email.name}
						label={manager_email.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={manager_phone.name}
						label={manager_phone.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={supervisor_name.name}
						label={supervisor_name.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={supervisor_email.name}
						label={supervisor_email.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						variant='outlined'
						name={supervisor_phone.name}
						label={supervisor_phone.label}
						fullWidth
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
