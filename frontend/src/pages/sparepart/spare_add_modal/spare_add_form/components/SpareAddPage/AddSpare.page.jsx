import React, { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { addSparepartStart } from '../../../../../../redux/spareparts/spareparts.actions';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import { spacing } from '@material-ui/system';
const Alert = styled(MuiAlert)(spacing);

import SparepartAdd from './Forms/SpareAdd';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const { formId, formField } = checkoutFormModel;

export default function AddSpares({ setOpen }) {
	const classes = useStyles();
	const [submitError, setSubmitError] = useState('');
	const [errorCheck, setErrorCheck] = useState();

	const dispatch = useDispatch();

	const history = useHistory();

	async function _submitForm(values, actions) {
		console.log(values);
		let post_data = { ...values };
		post_data = JSON.stringify(post_data, null, 2);

		dispatch(addSparepartStart(post_data));
		setSubmitError(''),
			console.log('No Error'),
			actions.setSubmitting(false),
			//history.push('/admin/spare/');
		setOpen(false);
	}

	function _handleReset() {
		console.log('Fired Reset');
		console.log(formInitialValues);
	}

	return (
		<React.Fragment>
			<Formik
				initialValues={formInitialValues}
				validationSchema={validationSchema[0]}
				onSubmit={_submitForm}
				enableReinitialize
			>
				{({ isSubmitting }) => (
					<Form id={formId}>
						<SparepartAdd formField={formField} />

						<div className={classes.buttons}>
							<Button
								type='reset'
								onClick={_handleReset}
								className={classes.button}
							>
								Reset
							</Button>
							<div className={classes.wrapper}>
								<Button
									disabled={isSubmitting}
									type='submit'
									variant='contained'
									color='primary'
									className={classes.button}
								>
									Add Site
								</Button>

								{isSubmitting && (
									<CircularProgress
										size={24}
										className={classes.buttonProgress}
									/>
								)}
							</div>
						</div>
						{submitError ? (
							<div>
								<Alert mb={4} severity='error'>
									{submitError}
								</Alert>
							</div>
						) : (
							''
						)}
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
}
