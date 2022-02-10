import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appbar: {
    minHeight: "5em",
  },
  navlinks: {
    marginRight: theme.spacing(12),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(2),
    },
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  logo: {
    fontSize: "1.5em",
    color: grey[700],
    textTransform: "uppercase",

    marginLeft: theme.spacing(12),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  logoLink: {
    textDecoration: "none",
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: ".8em",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: grey[600],
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  const menuItems = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "work",
      path: "/work",
    },
    {
      text: "contact",
      path: "/contact",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <CssBaseline />
        <Toolbar variant="regular">
          <Link to="/" className={classes.logoLink}>
            <Typography variant="h1" className={classes.logo}>
              Personal Website
            </Typography>
          </Link>

          <div className={classes.navlinks}>
            {menuItems.map((item) => (
              <Link key={item.text} to={item.path} className={classes.link}>
                {item.text}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
