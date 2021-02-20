import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useReactToPrint } from "react-to-print";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fetchMainOrderStart } from '../../redux/main-order/main_order.actions';
import { selectMainOrderList, dropdownList } from '../../redux/main-order/main_order.selector';
import MainOrderComponent from './main_order.component';
import { selectSiteList } from '../../redux/sites/sites.selector';
import { fetchSitesStart } from '../../redux/sites/sites.actions';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    tableContainer: {
      paddingBottom: "2em",
    },
  }));
  
  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 1;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
        width: 190,
      },
    },
  };

export default function MainOrderPage() {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [siteName, setSiteName] = React.useState([]);
  const [VendorName, setVendorName] = React.useState([]);
  const [month, setMonth] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [filterDropData, setFilterDropData] = React.useState([]);
  const [filterSiteData, setFilterSiteData] = React.useState([]);
  const [filterVendorData, setFilterVendorData] = React.useState([]);
  /* Selected Iputs */
  const [selectedSite, setSelectedSite] = React.useState([]);
  const [selectedVendor, setSelectedVendor] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState([]);

  const handleChangeSite = (event) => {
    setSelectedSite(event.target.value);
  };

  const handleChangeVendor = (event) => {
    setSelectedVendor(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  
  //Selectors
  //const allSitesList = useSelector((state) => selectSiteList(state));
  const mainOrderList = useSelector((state) => selectMainOrderList(state));
  const dropDownList = mainOrderList.map((order) => ({site_name: order.site_name, vendor_name: order.vendor_name, month: order.month}))
  //const dropList = useSelector((state) => dropdownList(state));
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {

    dispatch(
      fetchMainOrderStart({site:selectedSite, vendor_name:selectedVendor, month:selectedMonth})
    );
    
        // const data_site_fill = selectedSite.length ? (dropList.filter((order) => (selectedSite.includes(order.site_name)))) : dropList
        // const data_vendor_fill = selectedVendor.length ? (data_site_fill.filter((order) => (selectedVendor.includes(order.vendor_name)))) : data_site_fill
        // const data_month_fill = selectedMonth.length ? (data_site_fill.filter((order) => (selectedMonth.includes(order.month)))) : data_vendor_fill
        // setFilterSiteData(data_site_fill)
        // setFilterVendorData(data_vendor_fill)
        // setFilterDropData(data_month_fill)
        // console.log('data_site_fill', data_month_fill)

  }, [selectedSite, selectedVendor, selectedMonth]);

  console.log('Selected', selectedSite, selectedVendor, selectedMonth);
  //console.log('this is filtered data', filteredData);

  const site_dropdown = [...new Set(dropList.map(item => item.site_name))]
  const vendor_dropdown = [...new Set(filterSiteData.map(item => item.vendor_name))]
  const month_dropdown = [...new Set(filterVendorData.map(item => item.month))]
  console.log('main order list', mainOrderList)

  return (
    <React.Fragment>
      <Button
        onClick={handlePrint}
        variant='contained'
        color='primary'
        size='large'
      >
        Print this out!
      </Button>

        <Grid
        container
        justify='center'
        direction='row'
        className={classes.tableContainer}
        spacing={10}
      >
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-mutiple-checkbox-label'>Site Name</InputLabel>
            <Select
              labelId='demo-mutiple-checkbox-label'
              id='demo-mutiple-checkbox'
              multiple
              value={selectedSite}
              onChange={handleChangeSite}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {site_dropdown.map((name1) => (
                <MenuItem key={name1} value={name1}>
                  <Checkbox checked={selectedSite.indexOf(name1) > -1} />
                  <ListItemText primary={name1} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-mutiple-checkbox-label'>
              Vendor Name
            </InputLabel>
            <Select
              labelId='demo-mutiple-checkbox-label'
              id='demo-mutiple-checkbox'
              multiple
              value={selectedVendor}
              onChange={handleChangeVendor}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {vendor_dropdown.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedVendor.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-mutiple-checkbox-label'>Month</InputLabel>
            <Select
              labelId='demo-mutiple-checkbox-label'
              id='demo-mutiple-checkbox'
              multiple
              value={selectedMonth}
              onChange={handleChangeMonth}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {month_dropdown.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedMonth.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <MainOrderComponent sitesList={allSitesList} mainOrderList={mainOrderList} ref={componentRef} selectedSite={selectedSite} selectedVendor={selectedVendor} selectedMonth={selectedMonth} />  
    </React.Fragment>
  );
}
