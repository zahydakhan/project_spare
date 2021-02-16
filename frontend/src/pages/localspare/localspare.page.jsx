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

import { fetchLocalspareStart } from '../../redux/localspare/localspare.actions';
import { fetchSparepartFullStart } from '../../redux/spareparts/spareparts.actions';
import { selectLocalspareList } from '../../redux/localspare/localspare.selector';

import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextField from '@material-ui/core/TextField';
//Icon import
import BusinessIcon from '@material-ui/icons/Business';

//Modal Import
import LocalspareAddModal from './localspare_add_modal/LocalSpareAddModal';
import LocalspareDeleteModal from './localspare_delete_modal/LocalspareDeleteModal';
import LocalspareEditModal from './localspare_edit_modal/LocalspareEditModal';

const columns = [
	{ id: 'part_number', label: 'Part Number', minWidth: 100 },
	{ id: 'description', label: 'Description', minWidth: 100 },
	{ id: 'vendor_name', label: 'Vendor Name', minWidth: 100 },
	{ id: 'vendor_status', label: 'Vendor Status', minWidth: 100 },
	{ id: 'sp_type', label: 'Sparepart Type', minWidth: 100 },
	{ id: 'weight_kg', label: 'Weight (kg)', minWidth: 100 },
	{ id: 'machine', label: 'Machine', minWidth: 100 },
	{ id: 'model_number', label: 'Model Number', minWidth: 100 },
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

	dispatch(fetchSparepartFullStart());

	useEffect(() => {		
		dispatch(
			fetchLocalspareStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

	const LocalSpareData = useSelector((state) => selectLocalspareList(state));
	console.log(LocalSpareData);
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
					<BusinessIcon fontSize='large' />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Local Spare Part List
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
				<Grid item>
					<LocalspareAddModal />
				</Grid>
			</Grid>
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
							{LocalSpareData.results
								? LocalSpareData.results.map((row) => {
										return (
											<TableRow hover key={row.id}>
												<TableCell>{row.part_number.part_number}</TableCell>
												<TableCell>{row.description}</TableCell>
												<TableCell>{row.vendor_name}</TableCell>
												<TableCell>{row.vendor_status}</TableCell>
												<TableCell>{row.sp_type}</TableCell>
												<TableCell>{row.weight_kg}</TableCell>
												<TableCell>{row.machine}</TableCell>
												<TableCell>{row.model_number}</TableCell>
												<TableCell>{row.aud}</TableCell>
												<TableCell>{row.usd}</TableCell>
												<TableCell>
													<Grid container>
														<Grid item>
															<LocalspareEditModal row={row} />
														</Grid>
														<Grid item>
															<LocalspareDeleteModal row={row} />
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
					count={LocalSpareData.count}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</React.Fragment>
	);
}
