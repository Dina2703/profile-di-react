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

import homePhoto from "../assets/myPic2.jpeg";
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
  },
  img: {
    borderRadius: "3%",
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
    paddingTop: 100,
  },
  boxMainText: {
    width: "100%",
  },
  [theme.breakpoints.down("xs")]: {
    picture: {
      order: 1,
    },
    bodyText: {
      order: 2,
    },
    imgBox: {
      marginLeft: 60,
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
      Send Me an Email <MailOutlinedIcon style={{ marginLeft: 15 }} />
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
    <Paper className={classes.section}>
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          alignItems="center"
          className={classes.contentContainer}
          justifyContent="space-between"
        >
          <Zoom in={show}>
            <Grid item xs={12} sm={5} md={8} className={classes.bodyText}>
              <Box className={classes.boxMainText} marginTop={10}>
                <Typography variant="body2">
                  <span style={{ display: "inline-block", width: 20 }} />
                  Hi there! My name is Dina and I’m really excited to welcome
                  you to my website! I build websites and web applications
                  utilizing modern frameworks and design practices tailored to
                  every particular business. You may check some of my work
                  following this link.
                  <br />
                  <br />
                  <span style={{ display: "inline-block", width: 20 }} />
                  Nowadays, having a website is not a luxury but a necessity,
                  customers increasingly search for products and services online
                  and if your business is not “on the internet” it practically
                  invisible for many of potential customers. I will help you to
                  build a storefront of your business in the digital space. I’ll
                  be happy to help you to start or grow your business. Ask me
                  anything and I’ll try to help you. Let’s get in touch! Hit the
                  green button below right now!
                </Typography>
              </Box>
              <Box className={classes.wrapButton} paddingY={4}>
                <ButtonEmail />
              </Box>
            </Grid>
          </Zoom>
          <Grid item xs={12} sm={6} md={3} className={classes.picture}>
            <Box pb={3} className={classes.imgBox}>
              <img
                src={homePhoto}
                alt="Dinara Idrissova"
                width={300}
                height={400}
                className={classes.img}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Home;
