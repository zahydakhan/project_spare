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
  const { selectedSite, selectedVendor, selectedMonth, mainOrderList, sitesList } = props;
  
  const classes = useStyles();
  const [finalData, setFinalData] = React.useState([]);

  useEffect(() => {
        const result = mainOrderList.data.filter((item) => {
          const { site_name, vendor_name, month } = item;

          return (
            selectedSite.includes(site_name) &&
            selectedVendor.includes(vendor_name) &&
            selectedMonth.includes(month)
          );
        });

        console.log(result);
        setFinalData(result);

  }, [selectedSite, selectedVendor, selectedMonth]);

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

      {selectedSite.map((site) => {
        let site_data = sitesList.filter(st => (st.site == site))
        let order_data = finalData.filter(order => (order.site_name == site))
        //console.log("site_data ", site_data)
        //console.log("order_data ", order_data)
        return(
          <OrderTable site_data={site_data} order_data={order_data} />
        )
      })}
    </div>
  );
});

export default MainOrderComponent;
