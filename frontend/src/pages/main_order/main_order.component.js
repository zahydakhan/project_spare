import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import OrderTable from "./main_order.table";
import logo from "../../assets/Images/boral-logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: "0.5em",
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "0.2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.9em",
      margin: "0.1em",
    },
  },
}));

const MainOrderComponent = React.forwardRef((props, ref) => {
  const { selectedSite, mainOrderList, } = props;

  const siteList = [...new Set(mainOrderList.map(order => order.site_name.site))]
  
  const classes = useStyles();

  console.log("selected site data in main component", selectedSite)

  return (
    <div ref={ref} style={{ padding: "2.5em" }}>
      <Grid container alignItems='center'>
        <Grid item>
          <img className={classes.logo} alt='Boral Logo' src={logo} />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "2.3em", fontWeight: "bold" }}>
            Purchase Request
          </Typography>
        </Grid>
      </Grid>

      

      {siteList && siteList.map((site) => {
        
        let order_data = mainOrderList.filter(order => (order.site_name.site == site))
        let site_data = order_data[0] && order_data[0].site_name
        
        console.log("site_data ", order_data)
        return(
          <OrderTable order_data={order_data} site_data={site_data} />
        )
      })}
    </div>
  );
});

export default MainOrderComponent;
