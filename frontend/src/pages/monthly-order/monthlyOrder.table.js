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

import { fetchMonthlyOrderStart, fetchMainOrderStart } from '../../redux/main-order/main_order.actions';
import { selectMonthlyOrderList } from '../../redux/main-order/main_order.selector';


import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
//Icon import
import BusinessIcon from '@material-ui/icons/Business';
import CalenderIcon from '../../assets/Images/annual.png';

const columns = [
	{ id: 'vendor_name', label: 'Vendor Name', minWidth: 100 },
	{ id: 'part_number', label: 'Part Number', minWidth: 70 },
	{ id: 'description', label: 'Description', minWidth: 100 },
	{ id: 'site_name', label: 'Site Name', minWidth: 100 },
	{ id: 'quantity', label: 'Quantity', minWidth: 100 },
	{ id: 'unit_price', label: 'Unit Price', minWidth: 100 },
	{ id: 'total_price', label: 'Total Price', minWidth: 100 },
	{ id: 'pr_number', label: 'PR Number', minWidth: 100 },
	{ id: '​​​line_number', label: '​​​Line Number', minWidth: 100 },
    { id: 'month', label: 'Month', minWidth: 100 },
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

	useEffect(() => {
		dispatch(
			fetchMonthlyOrderStart({
				pageNo: page,
				rowsPerPage: rowsPerPage,
				searchstr: search,
			})
		);
	}, [page, rowsPerPage, search]);

    const monthlyOrderData = useSelector((state) => selectMonthlyOrderList(state));
	console.log('this is the data i am getting', monthlyOrderData);


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
					<img src={CalenderIcon} alt="roller-logo" style={{width: "3em",}} />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Monthly Orders List
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
							{monthlyOrderData.results
								? monthlyOrderData.results.map((row) => {
										return (
											<TableRow hover key={row.id}>
												<TableCell>{row.vendor_name}</TableCell>
												<TableCell>{row.part_number}</TableCell>
												<TableCell>{row.description}</TableCell>
												<TableCell>{row.site_name.site}</TableCell>
												<TableCell>{row.quantity}</TableCell>
												<TableCell>{row.unit_price}</TableCell>
												<TableCell>{row.total_price}</TableCell>
												<TableCell>{row.pr_number}</TableCell>
												<TableCell>{row.line_number}</TableCell> 
                                                <TableCell>{row.month}</TableCell>
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
					count={monthlyOrderData.count}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</React.Fragment>
	);
}
