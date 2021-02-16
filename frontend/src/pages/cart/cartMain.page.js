import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import BasicTable from "./cart.table";
//Cart Imports
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { delCartItems } from "../../redux/cart/cart.actions";
import { selectSiteList } from '../../redux/sites/sites.selector';
import { fetchSitesStart } from '../../redux/sites/sites.actions';
import { addSiteOrderStart } from '../../redux/site-orders/site_order.actions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: "0.5em",
  },
  sitename: {
    fontWeight: "bold",
    paddingLeft: "0.6em",
    fontSize: "1.2em",
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 120,
    fontWeight: "bold",
  },
}));
const Alert = styled(MuiAlert)(spacing);
const CheckoutPage = () => {
  const [filteredQuary, setFilteredQuary] = useState({
    0: {
      id: '',
      site: "",
      address: "",
      state: "",
      manager_name: "",
      manager_email: "",
      manager_phone: "",
      supervisor_name: "",
      supervisor_email: "",
      supervisor_phone: "",
      created_at: "",
    },
  });
  const [inputSite, setInputSite] = useState('');
  const [submitError, setSubmitError] = useState();
  const [submitSuccess, setSubmitSuccess] = useState();

  var pr_num = "PR" + Math.floor(1000 + Math.random() * 90000000);

  const cartItems = useSelector((state) => selectCartItems(state));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputSite){
        console.log('selected site', inputSite);
        cartItems.forEach((crt, index) => {
            dispatch(addSiteOrderStart({
                part_number: crt.part_number,
                description: crt.description,
                vendor_name: crt.vendor_name,
                unit_price: crt.aud,
                quantity: crt.quantity,
                total_price: crt.aud * crt.quantity,
                pr_number: pr_num,
                line_number: index + 1,
                site_name: inputSite,
              }))
            setSubmitSuccess('Submitted successfully');
            dispatch(delCartItems(crt));
        })

    }
    else{
        setSubmitError('Please select site');
    }
    
    
  };

  //fetch Sites
  useEffect(() => {
    dispatch(fetchSitesStart());
  }, []);

  //Handle Change
  const handleChange = (event) => {
    const sitee = event.target.value;
    setInputSite(event.target.value);
    setFilteredQuary(sites.filter((site) => site.site == sitee));
    setSubmitError('');
  };

  

  const classes = useStyles();
  const sites = useSelector((state) => selectSiteList(state));

  const dispatch = useDispatch();
  return (
    <Container
      container
      fixed
      //minWidth="md"
      component='main'
      className={classes.mainContainer}
    >
      <Grid container item>
        <Grid container item xs={6}>
          <Grid container alignItems='center'>
            <Grid item className={classes.sitename}>
              Please Select Your Site :
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={inputSite}
                  onChange={handleChange}
                >
                  {sites.map((site) => (
                    <MenuItem key={site.id} value={site.site}>
                      {site.site}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <Typography>
              <br />
              <span className={classes.sitename}>Selected : </span>

              {filteredQuary[0].site ? filteredQuary[0].site : ''}
            </Typography>
            <br />
          </Grid>
        </Grid>

        <Grid container>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.button}
            type='submit'
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
          >
            Save Order
          </Button>

          {submitError ? (
            <Alert mb={4} variant='outlined' severity='error'>
              {submitError}
            </Alert>
          ) : submitSuccess ? (
            <Alert mb={4} variant='outlined' severity='success'>
              {submitSuccess}
            </Alert>
          ) : (
            ""
          )}
          <BasicTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
