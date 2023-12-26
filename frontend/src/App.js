import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen2 from './screens/HomeScreen2';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/ProductScreen';
import OrderDetailsScreen from './screens/OrderScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShipppingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import ErrorBox from './components/ErrorBox';
import AdminProductsScreen from './screens/ProductsScreen';
import AdminOrdersScreen from './screens/AdminOrdersScreen';
import PrivateRoute from './components/PrivateRoute';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import AdminScreen from './screens/AdminScreen';
import Customers  from './components/dashboards/customers'
import Upload  from './components/dashboards/upload/Upload'
import OrdersScreen from './screens/OrdersScreen';
import Footers from './pages/Footer';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CakeIcon from '@material-ui/icons/Cake';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const productCategoryList = useSelector((state) => state.productCategoryList);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { categories, loading, error } = productCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategories());
    return () => {
      //
    };
  }, []);


  return (
    <BrowserRouter>
      <div className="grid-container">
      <Grid container spacing={0} style={{ padding: 24 }}>
        <Grid  xs={12}>
         <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > 
        <header className="header">
          <Toolbar> 
        <div>
          <ClickAwayListener onClickAway={handleClose}>
          <IconButton 
          aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
          <MenuIcon fontSize="large"  />
          </IconButton>
          </ClickAwayListener>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          <Link to="/category/sweet">
            <StyledMenuItem>
              <ListItemIcon>
              <CakeIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Sweet Pastries" />
            </StyledMenuItem>
          </Link>  
          <Link to="/category/salty">
            <StyledMenuItem>
              <ListItemIcon>
                <EmojiFoodBeverageIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Salty Pastries" />
            </StyledMenuItem>
              </Link>
            </StyledMenu>
        </div>          
        </Toolbar>
            <div className="logo">
            <Link to="/">
              <img src="nurdan-bakery2.png" alt="logo" height="60"/>
           </Link>
           </div>
            <div>   
              {userInfo ? (
                <>
                <div className="dropdown">
                <div className="header-link">          

                <AccountBoxIcon fontSize="large" />
                </div>
             
                 
                  <ul className="dropdown-content">
                   <li>
                    <Link className="header-link" to="/profile">
                     Profile
                    </Link>
                   </li>
                   <li>
                   <Link className="header-link" to="/profile">
                    Orders
                   </Link>
                  </li>
                  <li>
                  <Link className="header-link" to="/profile">
                   Log-Out
                  </Link>
                 </li>
                  </ul>
                  </div>
                  {userInfo.isAdmin && (
                    <div className="dropdown">
                      <Link className="header-link" to="#admin">
                        <SupervisorAccountIcon fontSize="large" />
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link className="header-link" to="/products">
                            Products
                          </Link>
                        </li>
                        <li>
                        <Link className="header-link" to="/admin">
                          Admin
                        </Link>
                      </li>
                        <li>
                          <Link className="header-link" to="/orders">
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link className="header-link" to="/profile">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link className="header-link" to="/signin">
               
             <Button variant="contained" color="secondary">
                Signin
              </Button>
              {'                '}
  
                </Link>
  
                
              )}
              <Button color="secondary">
              {cartItems.length !== 0 && (
                <div >{' '+cartItems.length}</div>
              )}
               <Link className="header-link" to="/cart">
               <ShoppingCartOutlinedIcon fontSize="large"/>
               </Link>
              </Button>
  
            </div>
          </header>
          </AppBar>
        </Grid> 
     <Grid xs={12}>
      <main className="main">
          <PrivateRoute
            userInfo={userInfo}
            path="/shipping"
            component={ShippingScreen}
          />
          <PrivateRoute
            userInfo={userInfo}
            path="/payment"
            component={PaymentScreen}
          />
         <PrivateRoute
            userInfo={userInfo}
            path="/placeorder"
            component={PlaceOrderScreen}
          />
         <PrivateRoute
            userInfo={userInfo}
            path="/profile"
            component={ProfileScreen}
          />
         <PrivateRoute
          userInfo={userInfo}
          path="/order/:id"
          component={OrderDetailsScreen}
          />
         <PrivateRoute
          userInfo={userInfo}
          path="/products"
          component={AdminProductsScreen}
          />
         <PrivateRoute
          userInfo={userInfo}
          path="/adminorders"
          component={OrdersScreen}
          />
          <PrivateRoute
          userInfo={userInfo}
          path="/orders"
          component={OrdersScreen}
          />
          <PrivateRoute
          userInfo={userInfo}
          path="/admin"
          component={AdminScreen}
          />

          <PrivateRoute
          userInfo={userInfo}
          path="/customers"
          component={Customers}
          />

          <PrivateRoute
          userInfo={userInfo}
          path="/upload"
          component={Upload}
          />

          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={DetailsScreen} />   
          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/" exact component={HomeScreen2} />
          <Route path="/allproducts" exact component={HomeScreen} />

        </main>
        </Grid> 
        <Grid xs={12} >

        <footer className="footer">All rights reserved.</footer>
        </Grid> 

        </Grid>
        <Footers/>
        </div>
    </BrowserRouter>
  );
}

export default App;
