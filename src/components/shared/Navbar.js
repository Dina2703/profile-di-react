import { useState } from "react";
import { useTranslation } from "react-i18next";

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
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const logo =
  "https://see.fontimg.com/api/renderfont4/1G8vj/eyJyIjoiZnMiLCJoIjoxNjYsInciOjIwMDAsImZzIjo4MywiZmdjIjoiIzc4NDA4MyIsImJnYyI6IiM0NTNFM0UiLCJ0IjoxfQ/RGluYXJhIElkcmlzc292YQ/snow-puppets-personal-use-medium.png";

const useStyles = makeStyles((theme) => ({
  lang: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "flex-end",
    background: "#ebe9e6",
    maxWidth: "100%",
  },
  langBtn: {
    margin: "1px",
  },
  appbar: {
    height: 120,
    background: "#ebe9e6",
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
  navlinks: {
    display: "flex",

    letterSpacing: "0.08em",
    fontWeight: 400,
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: 220,
    },
  },
  logoPhrase: {
    fontSize: 17,
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
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
    fontSize: 16,
    "&:hover": {
      color: grey[500],
    },
  },
  active: {
    borderBottom: "2px solid #673ab7",
  },
}));

function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const naviate = useNavigate();

  const menuItems = [
    {
      text: "navbar.home",
      path: "/",
      id: 2,
    },
    {
      text: "navbar.about",
      path: "/about",
      id: 3,
    },
    {
      text: "navbar.work",
      path: "/work",
      id: 4,
    },
    {
      text: "navbar.contact",
      path: "/contact",
      id: 5,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={2} className={classes.appbar}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box className={classes.lang}>
            <button
              onClick={() => changeLanguage("kz")}
              className={classes.langBtn}
            >
              <span className="fi fis fi-kz" />
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className={classes.langBtn}
            >
              <span className="fi fis fi-ru" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={classes.langBtn}
            >
              <span className="fi fis fi-gb" />
            </button>
          </Box>
          <Toolbar variant="regular">
            <Grid container justifyContent="space-between" spacing={1}>
              <Grid item md={5}>
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

              <Grid item style={{ alignSelf: "end" }} md={6}>
                <Hidden smDown>
                  <List className={classes.navlinks}>
                    {menuItems.map((item) => (
                      <ListItem
                        onClick={() => naviate(item.path)}
                        button
                        href={item.path}
                        key={item.text}
                        className={clsx(
                          classes.link,
                          location.pathname === item.path
                            ? classes.active
                            : null
                        )}
                      >
                        {t(item.text)}
                      </ListItem>
                    ))}
                  </List>
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
              <ListItem
                onClick={() => naviate(item.path)}
                button
                href={item.path}
                key={item.id}
                color="textPrimary"
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                {t(item.text)}
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
}
export default Navbar;
