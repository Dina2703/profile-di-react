import { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Container,
  Box,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";
import { Helmet } from "react-helmet";

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
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
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
    maxWidth: "30rem",
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

function Home() {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Helmet>
        <title>Dinara Idrissova || Works</title>
      </Helmet>
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
                  <Typography variant="subtitle2" gutterBottom align="justify">
                    “Learning to write programs stretches your mind, and helps
                    you think better, creates a way of thinking about things
                    that I think is helpful in all domains.”
                  </Typography>
                  <Typography variant="body2" align="right">
                    -- Bill Gates
                  </Typography>
                  <br />

                  <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus sapiente, ut sint doloremque rerum amet aperiam
                    blanditiis magni. Voluptatem inventore iusto sit architecto
                    non dolorem vitae consequatur, ut tempore nesciunt.
                    <br />
                    <span style={{ display: "inline-block", width: 20 }} />
                    Nowadays, having a website is not a luxury but a necessity,
                    customers increasingly search for products and services
                    online and if your business is not “on the internet” it
                    practically invisible for many of potential customers. I
                    will help you to build a storefront of your business in the
                    digital space. I&#39;ll be happy to help you to start or
                    grow your business. Ask me anything and I&#39;ll try to help
                    you. Let&#39;s get in touch! Hit the green button below
                    right now!
                  </Typography>
                </Box>
              </Grid>
            </Zoom>
            <Grid item xs={12} sm={6} md={3} className={classes.picture}>
              <Box pb={3} className={classes.imgBox}>
                <img
                  src="/assets/myPic2.jpeg"
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
    </>
  );
}

export default Home;
