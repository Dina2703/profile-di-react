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
import { grey, red } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  appbar: {
    paddingTop: 15,
    height: 100,
  },
  navlinks: {
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  logo: {
    fontSize: 45,
    textTransform: "uppercase",
    letterSpacing: 2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
    fontFamily: "DancingScript",
    fontWeight: 700,
    color: red[900],
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
        position="fixed"
        elevation={2}
        color="sticky"
        className={classes.appbar}
      >
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
                    <Typography
                      color="textSecondary"
                      variant="h2"
                      className={classes.logo}
                    >
                      Dinara Idrissova
                    </Typography>
                    <Box style={{ position: "relative" }}>
                      <Typography
                        color="textPrimary"
                        className={classes.logoPhrase}
                      >
                        The Web developer with heart
                        <FavoriteBorderIcon
                          className={classes.logoPhrase}
                          style={{
                            color: "#b71c1c",
                            marginLeft: 12,
                            position: "absolute",
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
                        className={classes.link}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </Hidden>
                <Hidden mdUp>
                  <IconButton>
                    <MenuIcon onClick={() => setOpen(true)} />
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
