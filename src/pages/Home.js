import { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Container,
  Button,
  Box,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    background: green[500],
    "&:hover": {
      background: green[700],
    },

    borderRadius: 10,
    color: "white",
    padding: "5px 20px",
    marginBottom: 25,
    textTransform: "lowercase",
  },
  wrapButton: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    marginTop: 20,
  },
  img: {
    boxShadow: "5px 5px 2px gray",
  },

  section: {
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      height: "auto",
    },
  },
  contentContainer: {
    height: "100%",
  },
  container: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 130,
    },
  },
  boxMainText: {
    maxWidth: "30rem",
  },
  [theme.breakpoints.down("xs")]: {
    picture: {
      order: 1,
    },
    bodyText: {
      order: 2,
    },

    boxMainText: {
      width: "100%",
      marginTop: 0,
    },
  },
}));

const ButtonEmail = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root} href="/contact" variant="contained">
      contact me <MailOutlinedIcon style={{ marginLeft: 15 }} />
    </Button>
  );
};

function Home() {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div>
      <Paper className={classes.section}>
        <Container maxWidth="md" className={classes.container}>
          <Grid
            container
            alignItems="center"
            className={classes.contentContainer}
            justifyContent="space-between"
          >
            <Zoom in={show}>
              <Grid item xs={12} sm={5} md={6} className={classes.bodyText}>
                <Box className={classes.boxMainText} marginTop={15}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 400, fontSize: 15 }}
                    align="justify"
                  >
                    <span style={{ display: "inline-block", width: 20 }} />
                    Hi there! I&#39;m Dinara and welcome to my website!
                    <br />
                    Nowadays, having a website is not a luxury but a necessity,
                    customers increasingly search for products and services
                    online and if your business is not “on the internet” it
                    practically invisible for many of potential customers. I
                    will help you to build a storefront of your business in the
                    digital space. I&#39;ll be happy to help you to start or
                    grow your business.You may check some of my work following
                    this <a href="/work">link</a>. Ask me anything and I&#39;ll
                    try to help you.
                    <span style={{ display: "block", width: 20 }} />
                    Let&#39;s get in touch!
                  </Typography>
                </Box>
                <Box className={classes.wrapButton}>
                  <ButtonEmail />
                </Box>
              </Grid>
            </Zoom>
            <Grid item xs={12} sm={6} md={5} className={classes.picture}>
              <Box pb={3}>
                <Typography
                  variant="body1"
                  align="center"
                  gutterBottom
                  style={{ textShadow: "1px 1px  gray" }}
                >
                  Grow your business with a website
                </Typography>
                <img
                  src="/assets/exapmle3.jpg"
                  alt="Grow your business with a website"
                  width={450}
                  height={270}
                  className={classes.img}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default Home;
