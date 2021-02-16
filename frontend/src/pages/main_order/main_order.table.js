import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { withStyles } from "@material-ui/core/styles";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

function CustomizedTableDemo({ order_data, site_data }) {
  console.log(order_data, site_data);

  return (
    <Card mb={6}>
      <CardContent pb={1}>
        <Typography variant='h6' gutterBottom>
          Site Name : {site_data.length ? site_data[0].site : ""}
        </Typography>
        <Typography variant='h6' gutterBottom>
          Site Adress : {site_data.length ? site_data[0].address : ""}
        </Typography>

        <Grid container direction='row'>
          <Grid item>
            <Card mb={6}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Manager Name :{" "}
                  {site_data.length ? site_data[0].manager_name : ""}
                </Typography>
                Manager Email :{" "}
                {site_data.length ? site_data[0].manager_email : ""}
                <Typography mb={4} component='p'>
                  Manager Phone :{" "}
                  {site_data.length ? site_data[0].manager_phone : ""}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card mb={6}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Supervisor Name :{" "}
                  {site_data.length ? site_data[0].supervisor_name : ""}
                </Typography>
                Supervisor Email :{" "}
                {site_data.length ? site_data[0].supervisor_email : ""}
                <Typography mb={4} component='p'>
                  Supervisor Phone :{" "}
                  {site_data.length ? site_data[0].supervisor_phone : ""}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
      <Paper>

        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Part Number </CustomTableCell>
              <CustomTableCell align='right'>Description</CustomTableCell>
              <CustomTableCell align='right'>Vendor Name</CustomTableCell>
              <CustomTableCell align='right'>Month</CustomTableCell>
              <CustomTableCell align='right'>Quantity</CustomTableCell>
            </TableRow>
          </TableHead>
          {order_data.map((row) => (
            <CustomTableRow key={row.id}>
              <CustomTableCell component='th' scope='row'>
                {row.part_number}
              </CustomTableCell>
              <CustomTableCell align='right'>{row.description}</CustomTableCell>
              <CustomTableCell align='right'>{row.vendor_name}</CustomTableCell>
              <CustomTableCell align='right'>{row.month}</CustomTableCell>
              <CustomTableCell align='right'>{row.quantity}</CustomTableCell>
            </CustomTableRow>
          ))}
        </Table>
      </Paper>
    </Card>
  );
}

export default CustomizedTableDemo;
