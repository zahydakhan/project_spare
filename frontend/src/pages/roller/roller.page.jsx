import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { fetchRollerStart } from '../../redux/roller/roller.actions';
import { selectRollerList } from '../../redux/roller/roller.selector';

import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextField from '@material-ui/core/TextField';
//Icon import
import BusinessIcon from '@material-ui/icons/Business';
import RollerIcon from '../../assets/Images/123.jpg';

//Modal Import
import RollerAddModal from './roller_add_modal/RollerAddModal';
import RollerDeleteModal from './roller_delete_modal/RollerDeleteModal';
import RollerEditModal from './roller_edit_modal/RollerEditModal';

import {Error} from '../../utils/error.component';

const columns = [
	{ id: 'vendor_name', label: 'Vendor Name', minWidth: 100 },
	{ id: 'description', label: 'Description', minWidth: 100 },
	{ id: 'roller_diameter', label: 'Roller Diameter', minWidth: 100 },
	{ id: 'wall_thickness', label: 'Wall Thickness', minWidth: 100 },
	{ id: 'roller_length', label: 'Roller Length', minWidth: 100 },
	{ id: 'shaft_diameter', label: 'Shaft Diameter', minWidth: 100 },
	{ id: 'bearing', label: 'Bearing', minWidth: 100 },
	{ id: 'aud', label: 'AUD', minWidth: 100 },
	{ id: 'usd', label: 'USD', minWidth: 100 },
	{ id: 'actions', label: 'Actions', minWidth: 130 },
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
	customTable: {
		'& .MuiTableCell-stickyHeader': {
			backgroundColor: theme.palette.primary.main,
		},
	},
}));

export default function StickyHeadTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const dispatch = useDispatch();
	const [search, setSearch] = React.useState('');

	const handleBlur = (event) => {
		console.log(event.target.value);
		setSearch(event.target.value);
	};

	const rollerData = useSelector((state) => selectRollerList(state));
	console.log(rollerData);

	const submitError = useSelector((state) => state.rollerReducer.errorRollerMessage);

	useEffect(() => {
		dispatch(
			fetchRollerStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<React.Fragment>
			<Grid container align='center' style={{ marginBottom: '1em' }}>
				<Grid item>
					<img src={RollerIcon} alt="roller-logo" style={{width: "3em",}} />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Roller Spare Part List
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
						label='Search Roller Sparepart'
						type='search'
						variant='outlined'
						onBlur={handleBlur}
					/>
				</Grid>
				<Grid item>
					<RollerAddModal />
				</Grid>
			</Grid>
			<Error message={submitError} />
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table
						stickyHeader
						aria-label='sticky table'
						classes={{ root: classes.customTable }}
					>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth, color: '#ffff' }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rollerData.results
								? rollerData.results.map((row) => {
										return (
											<TableRow hover key={row.id}>
												<TableCell>{row.vendor_name}</TableCell>
												<TableCell>{row.description}</TableCell>
												<TableCell>{row.roller_diameter}</TableCell>
												<TableCell>{row.wall_thickness}</TableCell>
												<TableCell>{row.roller_length}</TableCell>
												<TableCell>{row.shaft_diameter}</TableCell>
												<TableCell>{row.bearing}</TableCell>
												<TableCell>{row.aud}</TableCell>
												<TableCell>{row.aud}</TableCell>
												<TableCell>
													<Grid container>
														<Grid item>
															<RollerDeleteModal row={row} />
														</Grid>
														<Grid item>
															<RollerEditModal row={row} />
														</Grid>
													</Grid>
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
					count={rollerData.count}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</React.Fragment>
	);
}
