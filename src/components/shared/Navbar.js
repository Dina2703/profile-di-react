import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
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
      color: "#333",
      fontSize: "1.5em",
      marginLeft: theme.spacing(12),
      paddingTop: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("xs")]: {
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(2),
      },
    },
    link: {
      color: "#333",
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: ".6em",
      },
    },
  };
});

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="primary"
        className={classes.appbar}
        elevation={1}
      >
        <CssBaseline />
        <Toolbar variant="regular">
          <Typography variant="h1" className={classes.logo}>
            Personal Website
          </Typography>

          <div className={classes.navlinks}>
            <Button color="secondary" href="/" className={classes.link}>
              Home
            </Button>
            <Button
              color="secondary"
              size="small"
              href="/about"
              className={classes.link}
            >
              About
            </Button>
            <Button color="secondary" href="/work" className={classes.link}>
              Work
            </Button>
            <Button color="secondary" href="/contact" className={classes.link}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
