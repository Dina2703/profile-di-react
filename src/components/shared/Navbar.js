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
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontSize: "1.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: ".8em",
    marginLeft: theme.spacing(2),
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <CssBaseline />
        <Toolbar>
          <Typography variant="caption" className={classes.logo}>
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
