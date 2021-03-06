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
import { fetchSparepartGETStart } from '../../../redux/catalogue/catalogue.actions';
import { selectGETList } from '../../../redux/catalogue/catalogue.selector';

import Box from '@material-ui/core/Box';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';

import SettingsIconPNG from '../../../assets/Images/settings.png';
import BuildIcon from '@material-ui/icons/Build';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
	Avatar as MuiAvatar,
	SvgIcon,
  } from "@material-ui/core";

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
		fontSize: 16,
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
	subtitleBlue: {
		color: theme.palette.primary.main,
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
		backgroundColor: '#4caf50',
		color: '#fff',
		padding: '0.6em 0.8em',
		borderColor: '#4caf50',
	},
}));

const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.primary.main};
`;


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
			fetchSparepartGETStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

	const spareGETData = useSelector((state) => selectGETList(state));

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
			rowQuantity.quantity.indexOf('.') !== -1 ||
			rowQuantity.quantity.length == 0
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
					<img src={SettingsIconPNG} alt="roller-logo" style={{width: "3em",}} />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Ground Engaging Tools List
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
						{spareGETData.results
							? spareGETData.results.map((row) => {
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
																			<SettingsIcon
																				fontSize='large'
																				style={{ marginRight: '0.3em' }}
																			/>
																		</Grid>
																		<Grid item>
																			<span className={classes.subtitle}>
																				Part Number:
																			</span>
																			<span style={{fontSize: 16}}>
																				{row.part_number}
																			</span>
																			 <br />
																			<span className={classes.subtitle}>
																				Vendor Name:{' '}
																			</span>
																			<span style={{fontSize: 16}}>
																			{row.vendor_name} 
																			</span><br />
																		</Grid>
																	</Grid>
																</Box>
															</Grid>
															<Grid item sm={4}>
																<Grid
																	container
																	direction='row'
																	spacing={2}
																	justify='center'
																>
																	<Grid item>
																		<MonetizationOnIcon fontSize='large' />
																	</Grid>
																	<Grid item>
																		<span className={classes.subtitleRed}>
																			(AUD): {row.aud ? row.aud : (
                              													parseFloat(row.usd) * parseFloat(audToUsd)
                            												).toFixed(2)}
																		</span>{' '}
																		<br />
																		<span className={classes.subtitleGreen}>
																			Saving (AUD):{' '}
																			{row.comparison_sparepart[0]
																				? (row.aud ? (row.comparison_sparepart[0].aud - row.aud).toFixed(2) 
																				: ( (parseFloat(row.comparison_sparepart[0].usd) * parseFloat(audToUsd)).toFixed(2) - (parseFloat(row.usd) * parseFloat(audToUsd)).toFixed(2)).toFixed(2)) 
																				: 0}

																		</span>
																	</Grid>
																</Grid>

															</Grid>
														</Grid>
														<Grid container spacing={1}>
															<Grid item sm={4}>
																<ListItem
																	style={{
																		border: '2px solid #eee',
																		height: '100%',
																	}}
																>
																	<ListItemIcon>
																	<ListItemAvatar>
																		<Avatar>
																		<SvgIcon style={{ fontSize: 25 }}>
																		<AssignmentIcon />
																		</SvgIcon>
																		</Avatar>
																	</ListItemAvatar>
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
															<Grid item sm={4}>
																<ListItem style={{ border: '2px solid #eee' }}>
																<ListItemIcon>
																<ListItemAvatar>
																		<Avatar>
																		<SvgIcon style={{ fontSize: 25 }}>
																		<BuildIcon />
																		</SvgIcon>
																		</Avatar>
																	</ListItemAvatar>

																	</ListItemIcon>
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
															<Grid item sm={4}>
																<ListItem
																	style={{
																		border: '2px solid #eee',
																		height: '100%',
																	}}
																>
																	<ListItemIcon>
																	<ListItemAvatar>
																		<Avatar>
																		<SvgIcon style={{ fontSize: 25 }} >
																		<LanguageIcon />
																		</SvgIcon>
																		</Avatar>
																	</ListItemAvatar>
	  
																	</ListItemIcon>
																	<ListItemText>
																		<Typography>
																		 <span className={classes.subtitleBlack} >Local Supplier Information </span> <br />
																				<span className={classes.subtitleBlack}>Vendor Name:</span> 
																				{row.comparison_sparepart[0]
																				? row.comparison_sparepart[0]
																						.vendor_name
																				: ''} <br />
																				<span className={classes.subtitleBlack}>Price:</span> 
																				{row.comparison_sparepart[0]
																				? (row.comparison_sparepart[0].aud ? row.comparison_sparepart[0].aud : (parseFloat(row.comparison_sparepart[0].usd) * parseFloat(audToUsd)).toFixed(2))
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
				count={spareGETData.count ? spareGETData.count : 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</React.Fragment>
	);
}
