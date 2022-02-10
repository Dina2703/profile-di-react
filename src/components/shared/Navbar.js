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
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  appbar: {
    minHeight: "3em",
  },
  navlinks: {
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  logo: {
    fontSize: "1.5em",
    textTransform: "uppercase",
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
          <Toolbar variant="regular" disableGutters>
            <Link href="/" className={classes.logoLink}>
              <Typography
                color="textPrimary"
                variant="h1"
                className={classes.logo}
              >
                Personal Website
              </Typography>
            </Link>

            <Hidden xsDown>
              <div className={classes.navlinks}>
                {menuItems.map((item) => (
                  <Link
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
