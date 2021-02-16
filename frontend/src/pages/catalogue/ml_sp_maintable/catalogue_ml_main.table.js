import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fetchSparepartMLStart } from '../../../redux/catalogue/catalogue.actions';
import { selectMLList } from '../../../redux/catalogue/catalogue.selector';
import BusinessIcon from '@material-ui/icons/Business';
import Box from '@material-ui/core/Box';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';
import ReorderIcon from '@material-ui/icons/Reorder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
//Alerts imports
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import { spacing } from "@material-ui/system";
import styled from "styled-components";
//imports for cart
import {addCartItems} from '../../../redux/cart/cart.actions';

const columns = [
	{
		id: 'globalsupplier',
		label: 'Global Supplier',
		minWidth: 180,
		icon: <PublicIcon />,
	},
	{
		id: 'localsupplier',
		label: 'Local Supplier',
		minWidth: 180,
		icon: <GroupIcon />,
	},
	{ id: 'actions', label: 'Actions', minWidth: 100, icon: <ReorderIcon /> },
];

const useStyles = makeStyles((theme) => ({
	container: {
		maxHeight: 1000,
	},
	root: {
		width: '100%',
	},
	formcard: {
		width: 140,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 12,
	},
	pos: {
		marginBottom: 12,
	},
	subtitleGreen: {
		color: '#388E3C',
		fontWeight: 'bolder',
	},
	subtitle: {
		color: '#fff',
		fontWeight: 'bolder',
	},
	subtitleBlack: {
		color: '#000',
		fontWeight: 'bolder',
	},
	subtitleRed: {
		color: '#e63946',
		fontWeight: 'bolder',
	},
	price: {
		color: '#000',
		fontWeight: 'bolder',
		fontSize: '1.5em',
	},
	input: {
		maxWidth: '8em',
		marginBottom: '0.5em',
	},
	box: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		padding: '0.6em 0.8em',
	},
	box1: {
		backgroundColor: '#4caf50',
		color: '#fff',
		padding: '0.6em 0.8em',
		borderColor: '#4caf50',
	},
}));

export default function StickyHeadTable() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [search, setSearch] = React.useState('');
	const [submitError, setSubmitError] = React.useState();
	const Alert = styled(MuiAlert)(spacing);
	const [rowQuantity, setRowQuantity] = React.useState({
		quantity: '',
		id: '',
	});

	const [audToUsd, setAudToUsd] = React.useState(0.0);

	useEffect(() => {
		fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
		  .then((res) => res.json())
		  .then((rec) => setAudToUsd(rec["rates"]["AUD"]));
	  }, [audToUsd]);

	useEffect(() => {
		dispatch(
			fetchSparepartMLStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

	const spareMLData = useSelector((state) => selectMLList(state));

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChange = (row) => (event) => {
		setRowQuantity({ id: row.id, quantity: event.target.value });
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleBlur = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	const handleFocus = (event) => {
		setSubmitError('');
	};

	const handleSubmit = (row) => (event) => {
		event.preventDefault();
		console.log('values for submit', row, rowQuantity);
		console.log(rowQuantity.quantity.indexOf('.'));
		if (
			parseInt(rowQuantity.quantity) === 0 ||
			rowQuantity.quantity.indexOf('.') !== -1
		  ) {
			setSubmitError("Invalid quantity");
			return "error";
		  }

		if(!row.aud){
			row.aud = (parseFloat(row.usd) * parseFloat(audToUsd)).toFixed(2)
		}
	  
		  row.quantity = rowQuantity.quantity;
		  dispatch(addCartItems(row));
		  setRowQuantity({
			quantity: '',
			id: '',
		});
	};

	const defaultProps = {
		borderColor: '#376fd0',
		m: 1,
		border: 2,
		style: { width: 'auto', height: 'auto' },
	};

	return (
		<React.Fragment>
			<Grid container align='center' style={{ marginBottom: '1em' }}>
				<Grid item>
					<BusinessIcon fontSize='large' />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Manganese Liners Sparepart List
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				align='center'
				justify='space-between'
				style={{ marginBottom: '1em' }}
			>
				<Grid item>
					<TextField
						id='outlined-search'
						label='Search Sparepart'
						type='search'
						variant='outlined'
						onBlur={handleBlur}
					/>
				</Grid>
			</Grid>
			{submitError ? (
          	<Alert mb={4} severity="error">
            {submitError}
          </Alert>
        ) : (
          ""
        )}
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									<Grid container align='center'>
										<Grid item style={{ marginRight: '0.3em' }}>
											{column.icon}
										</Grid>
										<Grid item>
											<Typography variant='h4'>{column.label}</Typography>
										</Grid>
									</Grid>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{spareMLData.results
							? spareMLData.results.map((row) => {
									return (
										<TableRow hover key={row.id}>
											<TableCell>
												<Card className={classes.root}>
													<CardContent>
														<Grid container spacing={2}>
															<Grid item sm={8}>
																<Box
																	borderRadius={5}
																	{...defaultProps}
																	className={classes.box}
																>
																	<Grid
																		container
																		direction='row'
																		style={{ flexWrap: 'nowrap' }}
																	>
																		<Grid item>
																			<PermContactCalendarIcon
																				fontSize='large'
																				style={{ marginRight: '0.3em' }}
																			/>
																		</Grid>
																		<Grid item>
																			<span className={classes.subtitle}>
																				Part Number:
																			</span>{' '}
																			{row.part_number} <br />
																			<span className={classes.subtitle}>
																				Vendor Name:{' '}
																			</span>
																			{row.vendor_name} <br />
																		</Grid>
																	</Grid>
																</Box>
															</Grid>
															<Grid item sm={4}>
																<Grid
																	container
																	direction='row'
																	justify='center'
																>
																	<Grid item>
																		<MonetizationOnIcon />
																	</Grid>
																	<Grid item>
																		<span className={classes.subtitleRed}>
																			(AUD): {row.aud ? row.aud : (
                              													parseFloat(row.usd) * parseFloat(audToUsd)
                            												).toFixed(2)}
																		</span>{' '}
																		<br />
																	</Grid>
																</Grid>
																<span className={classes.subtitleGreen}>
																			Saving (AUD):{' '}
																			{row.comparison_sparepart[0]
																				? (row.aud ? (row.comparison_sparepart[0].aud - row.aud).toFixed(2) 
																				: ( (parseFloat(row.comparison_sparepart[0].usd) * parseFloat(audToUsd)).toFixed(2) - (parseFloat(row.usd) * parseFloat(audToUsd)).toFixed(2)).toFixed(2)) 
																				: 0}
																		</span>
															</Grid>
														</Grid>
														<Grid container spacing={1}>
															<Grid item sm={6}>
																<ListItem
																	style={{
																		border: '2px solid #eee',
																		height: '100%',
																	}}
																>
																	<ListItemIcon>
																		<AssignmentIcon fontSize='large' />
																	</ListItemIcon>
																	<ListItemText
																		primary='Description'
																		secondary={
																			<Typography
																				component='span'
																				color='textSecondary'
																			>
																				{row.description}
																			</Typography>
																		}
																	/>
																</ListItem>
															</Grid>
															<Grid item sm={6}>
																<ListItem style={{ border: '2px solid #eee' }}>
																	<ListItemText>
																		<Typography component='span'>
																			<span className={classes.subtitleBlack}>
																				Weight (kg):{' '}
																			</span>
																			{row.weight_kg}
																			<br />
																			<span className={classes.subtitleBlack}>
																				Machine:{' '}
																			</span>
																			{row.machine}
																			<br />
																			<span className={classes.subtitleBlack}>
																				Model No.:{' '}
																			</span>
																			{row.model_number}
																		</Typography>
																	</ListItemText>
																</ListItem>
															</Grid>
														</Grid>
													</CardContent>
												</Card>
											</TableCell>
											<TableCell>
												<Card className={classes.root}>
													<CardContent>
														<Grid container spacing={2}>
															<Grid item sm={8}>
																<Box
																	borderRadius={5}
																	{...defaultProps}
																	className={classes.box1}
																>
																	<Grid
																		container
																		direction='row'
																		style={{ flexWrap: 'nowrap' }}
																	>
																		<Grid item>
																			<PermContactCalendarIcon
																				fontSize='large'
																				style={{ marginRight: '0.3em' }}
																			/>
																		</Grid>
																		<Grid item>
																			<span className={classes.subtitle}>
																				Part Number:
																			</span>{' '}
																			{row.part_number} <br />
																			<span className={classes.subtitle}>
																				Vendor Name:{' '}
																			</span>
																			{row.comparison_sparepart[0]
																				? row.comparison_sparepart[0]
																						.vendor_name
																				: ''}{' '}
																			<br />
																		</Grid>
																	</Grid>
																</Box>
															</Grid>
															<Grid item sm={4}>
																<Grid container align='center'>
																	<Grid item>
																		<MonetizationOnIcon />
																	</Grid>
																	<Grid>
																		<span className={classes.subtitleRed}>
																			(AUD):{' '}
																			{row.comparison_sparepart[0]
																				? (row.comparison_sparepart[0].aud ? row.comparison_sparepart[0].aud : (parseFloat(row.comparison_sparepart[0].usd) * parseFloat(audToUsd)).toFixed(2))
																				: ''}
																		</span>{' '}
																		<br />
																	</Grid>
																</Grid>
															</Grid>
														</Grid>
														<Grid container spacing={1}>
															<Grid item sm={6}>
																<ListItem
																	style={{
																		border: '2px solid #eee',
																		height: '100%',
																	}}
																>
																	<ListItemIcon>
																		<AssignmentIcon fontSize='large' />
																	</ListItemIcon>
																	<ListItemText
																		primary='Description'
																		secondary={
																			<React.Fragment>
																				<Typography
																					component='span'
																					color='textSecondary'
																				>
																					{row.comparison_sparepart[0]
																						? row.comparison_sparepart[0]
																								.description
																						: ''}
																				</Typography>
																			</React.Fragment>
																		}
																	/>
																</ListItem>
															</Grid>
															<Grid item sm={6}>
																<ListItem style={{ border: '2px solid #eee' }}>
																	<ListItemText>
																		<Typography component='span'>
																			<span className={classes.subtitleBlack}>
																				Weight (kg):{' '}
																			</span>
																			{row.comparison_sparepart[0]
																				? row.comparison_sparepart[0].weight_kg
																				: ''}{' '}
																			<br />
																			<span className={classes.subtitleBlack}>
																				Machine:{' '}
																			</span>
																			{row.comparison_sparepart[0]
																				? row.comparison_sparepart[0].machine
																				: ''}{' '}
																			<br />
																			<span className={classes.subtitleBlack}>
																				Model No.:{' '}
																			</span>
																			{row.comparison_sparepart[0]
																				? row.comparison_sparepart[0]
																						.model_number
																				: ''}
																		</Typography>
																	</ListItemText>
																</ListItem>
															</Grid>
														</Grid>
													</CardContent>
												</Card>
											</TableCell>

											<TableCell>
												<Card className={classes.formcard}>
													<CardContent>
														<form
															className={classes.form}
															onSubmit={handleSubmit(row)}
														>
															<TextField
																id='outlined-basic'
																label='Quantity'
																variant='outlined'
																type='number'
																onChange={handleChange(row)}
																onFocus={handleFocus}
																value={
																	row.id == rowQuantity.id
																		? rowQuantity.quantity
																		: ''
																}
																className={classes.input}
															/>
															<br />
															<Button
																type='submit'
																variant='contained'
																className={classes.button}
																color='primary'
															>
																Add
															</Button>
														</form>
													</CardContent>
												</Card>
											</TableCell>
										</TableRow>
									);
							  })
							: ''}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component='div'
				count={spareMLData.count ? spareMLData.count : 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</React.Fragment>
	);
}
