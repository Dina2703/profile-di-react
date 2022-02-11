import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Link,
  Avatar,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: 25,

    height: 100,
  },
  navlinks: {
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  logo: {
    fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: 2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },

  logoLink: {
    textDecoration: "none",
    flexGrow: 1,
  },
  link: {
    color: grey[800],
    textTransform: "lowercase",
    fontSize: 18,
    marginLeft: theme.spacing(3),

    "&:hover": {
      color: grey[600],
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
      <AppBar
        position="sticky"
        elevation={2}
        color="primary"
        className={classes.appbar}
      >
        <CssBaseline />
        <Container maxWidth="md">
          <Toolbar variant="regular">
            <Link href="/" className={classes.logoLink}>
              <Typography
                color="textPrimary"
                variant="h6"
                className={classes.logo}
              >
                Dinara Idrissova
              </Typography>
            </Link>

            <Hidden xsDown>
              <div className={classes.navlinks}>
                {menuItems.map((item) => (
                  <Link
                    underline="none"
                    href={item.path}
                    key={item.text}
                    className={classes.link}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </Hidden>
            <Hidden smUp>
              <IconButton>
                <MenuIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>

          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text}>
                <Link
                  underline="none"
                  variant="button"
                  href={item.path}
                  color="textPrimary"
                >
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
}
export default Navbar;
