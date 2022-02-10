import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontSize: "1.5em",
    marginLeft: theme.spacing(12),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sx")]: {
      paddingTop: theme.spacing(2),
    },
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: ".8em",
    marginLeft: theme.spacing(3),
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <CssBaseline />
        <Toolbar variant="regular">
          <Typography variant="h1" className={classes.logo}>
            Personal Website
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/work" className={classes.link}>
              Work
            </Link>
            <Link to="/blogs" className={classes.link}>
              Musings
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
