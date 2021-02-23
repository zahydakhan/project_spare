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
import { fetchRollerStart } from '../../../redux/roller/roller.actions';
import { selectRollerList } from '../../../redux/roller/roller.selector';
import SettingsIconPNG from '../../../assets/Images/settings2.png';

import Box from '@material-ui/core/Box';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import ReorderIcon from '@material-ui/icons/Reorder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
//Alerts imports
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import { spacing } from "@material-ui/system";
import styled from "styled-components";
//imports for cart
import {addCartItems} from '../../../redux/cart/cart.actions';
import BuildIcon from '@material-ui/icons/Build';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
	Avatar as MuiAvatar,
	SvgIcon,
  } from "@material-ui/core";
  

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
		fontSize: 18,
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
			fetchRollerStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

	const spareRollerData = useSelector((state) => selectRollerList(state));

	console.log('Here is rollers data', spareRollerData);

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
	  
		  
		  const row1 = {};
		  row1.quantity = rowQuantity.quantity;
		  row1.aud = row.aud;
		  row1.created_at = row.created_at;
		  row1.description = row.description;
		  row1.id = row.id;
		  row1.machine = "";
		  row1.model_number = "";
    	row1.part_number = row.description +
      "X" +
      row.roller_diameter +
      "X" +
      row.roller_length +
      "X" +
      row.shaft_diameter;
    row1.sp_type = "Roller";
    row1.usd = row.usd;
    row1.vendor_name = row.vendor_name;
    row1.vendor_status = "International";
    row1.weight_kg = "";

		  dispatch(addCartItems(row1));
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

	const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.primary.main};
`;

	return (
		<React.Fragment>
			<Grid container align='center' style={{ marginBottom: '1em' }}>
				<Grid item>
					<img src={SettingsIconPNG} alt="roller-logo" style={{width: "3em",}} />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Roller Sparepart List
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
						{spareRollerData.results
							? spareRollerData.results.map((row) => {
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
																				Description:
																			</span>
																			<span style={{fontSize: 16, marginLeft: '0.3em', }}>
																				{row.description}
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
																	<Grid item alignItems='center'>
																		<span className={classes.subtitleRed}>
																			(AUD): {row.aud ? row.aud : (
                              													parseFloat(row.usd) * parseFloat(audToUsd)
                            												).toFixed(2)}
																		</span>{' '}
																	
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
																	<ListItemAvatar>
																		<Avatar>
																		<SvgIcon style={{ fontSize: 25 }}>
																		<AssignmentIcon />
																		</SvgIcon>
																		</Avatar>
																	</ListItemAvatar>
																	</ListItemIcon>
																	<ListItemText
																		primary='Bearing'
																		secondary={
																			<Typography
																				component='span'
																				color='textSecondary'
																			>
																				{row.bearing}
																			</Typography>
																		}
																	/>
																</ListItem>
															</Grid>
															<Grid item sm={6}>
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
																			<Grid container spacing={4}>
																				<Grid item>
																				<span className={classes.subtitleBlack}>
																				Roller Diameter:{' '}
																			</span>
																			{row.roller_diameter}
																			<br />
																			<span className={classes.subtitleBlack}>
																				Roller Length:{' '}
																			</span>
																			{row.roller_length}
																		
																			
																				</Grid>
																				<Grid item>
																				<span className={classes.subtitleBlack}>
																				Shaft Diameter:{' '}
																			</span>
																			{row.shaft_diameter} <br />
																			<span className={classes.subtitleBlack}>
																				Wall Thickness:{' '}
																			</span>
																			{row.wall_thickness}
																				</Grid>
																			</Grid>
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
				count={spareRollerData.count ? spareRollerData.count : 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</React.Fragment>
	);
}
