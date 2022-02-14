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
      background: green[300],
    },

    borderRadius: 50,
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
  section: {
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 130,
      height: "auto",
    },
  },
  contentContainer: {
    height: "100%",
  },
  container: {
    height: "100%",
    width: "auto",
    paddingTop: 100,
  },
  [theme.breakpoints.down("sm")]: {
    picture: {
      order: 1,
    },
    bodyText: {
      order: 2,
    },
    imgBox: {
      marginLeft: 130,
    },
  },
}));

const ButtonEmail = () => {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      href="mailto:dinara.idrissova@list.ru"
      variant="contained"
    >
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
            <Grid item sm={8} className={classes.bodyText}>
              <Box>
                <Typography variant="body2">
                  Hi there! My name is Dina and I’m really excited to welcome
                  you to my website! I build websites and web applications
                  utilizing modern frameworks and design practices tailored to
                  every particular business. You may check some of my work
                  following this link.
                  <br />
                  <br />
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
          <Grid item className={classes.picture}>
            <Box my={3} className={classes.imgBox}>
              <img
                src={homePhoto}
                alt="Dinara Idrissova"
                width={250}
                height={350}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Home;
