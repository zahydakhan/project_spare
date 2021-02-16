import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { delSitesStart } from '../../../redux/sites/sites.actions';

const validationSchema = yup.object({});

const WithMaterialUI = ({ setOpen, row }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const formik = useFormik({
		initialValues: {},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			dispatch(delSitesStart(row.id));
			setOpen(false);
		},
	});

	return (
		<div>
			<Typography variant='h4' style={{ color: 'red' }}>
				{' '}
				Are You Sure?{' '}
			</Typography>
			<br />
			<Typography variant='h6'> Please confirm you want to delete</Typography>
			<br />
			<br />
			<Divider />
			<form onSubmit={formik.handleSubmit}>
				<Button color='primary' variant='contained' fullWidth type='submit'>
					Confirm Delete
				</Button>
			</form>
		</div>
	);
};

export default WithMaterialUI;
