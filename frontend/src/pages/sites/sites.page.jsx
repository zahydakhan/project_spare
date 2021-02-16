import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectSiteList } from '../../redux/sites/sites.selector';

import { fetchSitesStart } from '../../redux/sites/sites.actions';

//Icon import
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BusinessIcon from '@material-ui/icons/Business';

//Modal Import
import SiteAddModal from './site_add_modal/SiteAddModal';
import SiteDeleteModal from './site_delete_modal/SiteDeleteModal';
import SiteEditModal from './site_edit_modal/SiteEditModal';

const useRowStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
	innerHead: {
		backgroundColor: theme.palette.primary.main,
		textAlign: 'right',
	},
	innerHeadtext: {
		color: '#ffff',
	},
}));

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.address}
				</TableCell>
				<TableCell align='center'>{row.site}</TableCell>
				<TableCell align='center'>{row.id}</TableCell>
				<TableCell align='center'>{row.state}</TableCell>
				<TableCell align='center'>
					<Grid container align='center' justify='flex-end'>
						<Grid item>
							<SiteDeleteModal row={row} />
						</Grid>
						<Grid item>
							<SiteEditModal row={row} />
						</Grid>
					</Grid>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: '0em', paddingTop: '0em' }}
					colSpan={6}
				>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Grid container align='center'>
								<Grid item>
									<ContactMailIcon />
								</Grid>
								<Grid item style={{ marginLeft: '0.5em' }}>
									<Typography variant='h6' gutterBottom component='div'>
										Contact Info
									</Typography>
								</Grid>
							</Grid>

							<Table
								size='small'
								aria-label='purchases'
								style={{ marginBottom: '2.5em', marginTop: '0.5em' }}
							>
								<TableHead className={classes.innerHead}>
									<TableRow>
										<TableCell className={classes.innerHeadtext}>
											Manager Name
										</TableCell>
										<TableCell className={classes.innerHeadtext}>
											Manager Email
										</TableCell>
										<TableCell className={classes.innerHeadtext}>
											Manager Phone
										</TableCell>
										<TableCell className={classes.innerHeadtext}>
											Supervisor Name
										</TableCell>
										<TableCell className={classes.innerHeadtext}>
											Supervisor Email
										</TableCell>
										<TableCell className={classes.innerHeadtext}>
											Supervisor Phone
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow key={row.id}>
										<TableCell component='th' scope='row'>
											{row.manager_name}
										</TableCell>
										<TableCell>{row.manager_email}</TableCell>
										<TableCell>{row.manager_phone}</TableCell>
										<TableCell>{row.supervisor_name}</TableCell>
										<TableCell>{row.supervisor_email}</TableCell>
										<TableCell>{row.supervisor_phone}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		calories: PropTypes.number.isRequired,
		carbs: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			})
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};

export default function CollapsibleTable() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSitesStart());
	}, []);

	const SiteList = useSelector((state) => selectSiteList(state));
	console.log(SiteList);
	return (
		<React.Fragment>
			<Grid container align='center' style={{ marginBottom: '1em' }}>
				<Grid item>
					<BusinessIcon fontSize='large' />
				</Grid>
				<Grid item>
					<Typography variant='h2' style={{ marginLeft: '0.5em' }}>
						{' '}
						Site Lists
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				align='center'
				justify='flex-end'
				style={{ marginBottom: '1em' }}
			>
				<Grid item>
					<SiteAddModal />
				</Grid>
			</Grid>

			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Site Address</TableCell>
							<TableCell align='center'>Site</TableCell>
							<TableCell align='center'>Site ID </TableCell>
							<TableCell align='center'>State</TableCell>
							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{SiteList.map((row) => (
							<Row key={row.name} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</React.Fragment>
	);
}
