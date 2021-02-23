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
import { fetchMainOrderStart, fetchFullMainOrderStart } from '../../redux/main-order/main_order.actions';
import { selectMainOrderList, selectCompleteOrderList } from '../../redux/main-order/main_order.selector';
import MainOrderComponent from './main_order.component';

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

  useEffect(() => {
    console.log("Running useeffect fetch main order start", selectedSite);

    dispatch(
      fetchFullMainOrderStart()
    );
    
    // dispatch(
    //   fetchSitesStart()
    // );

  }, []);

  // dispatch(
  //   fetchMainOrderStart({site:selectedSite, vendor_name:selectedVendor, month:selectedMonth})
  // );


  const handleChangeSite = async (event) => {
    await setSelectedSite(event.target.value);
    console.log("selectedSite in handleChange", selectedSite)
  };

  const handleChangeVendor = (event) => {
    setSelectedVendor(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    console.log("Running generate function")
     dispatch(
     fetchMainOrderStart({site:selectedSite, vendor_name:selectedVendor, month:selectedMonth})
   );
  }

  

  
  //Selectors
  const mainOrderList = useSelector((state) => selectMainOrderList(state));
  const completeOrderList = useSelector((state) => selectCompleteOrderList(state));

  console.log("completeOrderList", completeOrderList)
  
  const dropListSite = [...new Set(completeOrderList.map(order => order.site_name.site))];
  console.log("dropListSite", dropListSite)

  const dropListVendor = [...new Set(completeOrderList.map(order => order.vendor_name))];
  const dropListMonth = [...new Set(completeOrderList.map(order => order.month))];
  

  //const dropList = useSelector((state) => dropdownList(state));
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

 

  
  console.log('Selected', selectedSite, selectedVendor, selectedMonth);
  //console.log('this is filtered data', filteredData);

  // const site_dropdown = [...new Set(dropList.map(item => item.site_name))]
  // const vendor_dropdown = [...new Set(filterSiteData.map(item => item.vendor_name))]
  // const month_dropdown = [...new Set(filterVendorData.map(item => item.month))]
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
              {dropListSite.map((name1) => (
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
              {dropListVendor.map((name) => (
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
              {dropListMonth.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedMonth.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button onClick={handleGenerate} variant="contained" color="primary" >Generate</Button>
        </Grid>
      </Grid>
      {mainOrderList && 
       <MainOrderComponent mainOrderList={mainOrderList} ref={componentRef} selectedSite={selectedSite} /> 
      }
    </React.Fragment>
  );
}
