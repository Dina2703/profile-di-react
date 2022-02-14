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
  Grid,
  Box,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { grey } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const logo =
  "https://see.fontimg.com/api/renderfont4/1G8vj/eyJyIjoiZnMiLCJoIjoxNjYsInciOjIwMDAsImZzIjo4MywiZmdjIjoiIzc4NDA4MyIsImJnYyI6IiM0NTNFM0UiLCJ0IjoxfQ/RGluYXJhIElkcmlzc292YQ/snow-puppets-personal-use-medium.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    paddingTop: 15,
    height: 120,
    background: "#ebe9e6",
  },
  navlinks: {
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 400,
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: 220,
    },
  },
  logoPhrase: {
    fontSize: 19,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
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
      color: grey[500],
    },
  },
  active: {
    textDecoration: "underline",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      text: "home",
      path: "/",
      id: 2,
    },
    {
      text: "about",
      path: "/about",
      id: 3,
    },
    {
      text: "work",
      path: "/work",
      id: 4,
    },
    {
      text: "contact",
      path: "/contact",
      id: 5,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={2} className={classes.appbar}>
        <CssBaseline />
        <Container maxWidth="md">
          <Toolbar variant="regular">
            <Grid
              container
              justifyContent="space-between"
              spacing={4}
              className={classes.container}
            >
              <Grid item>
                <Link href="/" className={classes.logoLink}>
                  <Box>
                    <img
                      src={logo}
                      width="370"
                      alt="Dinara Idrissova"
                      className={classes.logo}
                    />

                    <Box style={{ position: "relative" }}>
                      <Typography
                        color="textPrimary"
                        className={classes.logoPhrase}
                      >
                        Web developer with heart
                        <FavoriteBorderIcon
                          className={classes.logoPhrase}
                          style={{
                            color: "#681896",
                            marginLeft: 12,
                            position: "absolute",
                            fontSize: 25,
                          }}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>

              <Grid item style={{ alignSelf: "end" }}>
                <Hidden smDown>
                  <div className={classes.navlinks}>
                    {menuItems.map((item) => (
                      <Link
                        underline="none"
                        href={item.path}
                        key={item.text}
                        className={clsx(
                          classes.link,
                          location.pathname === item.path
                            ? classes.active
                            : null
                        )}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </Hidden>
                <Hidden mdUp>
                  <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
            </Grid>
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
              <ListItem key={item.id}>
                <Link
                  underline="none"
                  variant="button"
                  href={item.path}
                  color="textPrimary"
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
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
