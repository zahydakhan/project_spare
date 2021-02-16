import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {selectCartCount, selectCartItems} from '../redux/cart/cart.selector';
import { makeStyles } from '@material-ui/core/styles';

import {
  Avatar as MuiAvatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover as MuiPopover,
  SvgIcon,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Bell, Home, UserPlus, Server } from "react-feather";

const useStyles = makeStyles((theme) => ({
	subtitle: {
		fontWeight:'bolder',
    color: '#000',
    marginRight: '0.2em',
	},
}));

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 300px;
    ${(props) => props.theme.shadows[1]};
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${(props) => props.theme.header.indicator.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.primary.main};
`;

const NotificationHeader = styled(Box)`
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
`;

function Notification({ title, description, item }) {
  const classes = useStyles();
  return (
    <ListItem divider component={Link} to="#">
      <ListItemText
					secondary={
					<Typography
							component='span'
							color='textSecondary'
					>
					  <span className={classes.subtitle}>Part Number:</span>{item.part_number} <br />
            <span className={classes.subtitle}>Vendor Name:</span>{item.vendor_name} <br />
            <span className={classes.subtitle}>Quantity X Price:</span>{item.quantity} X {item.aud}
					</Typography>
					}
				/>
    </ListItem>
  );
}

function NotificationsDropdown() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const cartCount = useSelector((state) => selectCartCount(state));
  const cartItems = useSelector((state) => selectCartItems(state));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Notifications">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          <Indicator badgeContent={cartCount}>
            <ShoppingCartIcon />
          </Indicator>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <NotificationHeader p={2}>
          <Typography variant="subtitle1" color="textPrimary">
            {cartCount} Orders
          </Typography>
        </NotificationHeader>
        <React.Fragment>
          <List disablePadding>
            {cartItems.map(item => (
                <Notification
                item={item}
                title="Update complete"
                description="Restart server to complete update."
                Icon={Server}
              />
            ))}

          </List>
          <Box p={1} display="flex" justifyContent="center">
            <Button size="small" component={Link} to="/cart">
              Checkout
            </Button>
          </Box>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

export default NotificationsDropdown;
