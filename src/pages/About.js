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
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      width: 200,
      height: 300,
      marginLeft: 50,
    },
  },

  section: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      height: "auto",
    },
  },
  contentContainer: {
    height: "auto",
  },
  container: {
    height: "auto",
    paddingTop: 100,
    paddingBottom: 50,
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
    typoTitle: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
        textAlign: "center",
      },
    },
    typoPara: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 13,
      },
    },
  },
}));

const img = "/assets/myPic2.jpeg";

function Home() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setImage(img);
  }, []);
  return (
    <>
      <Helmet>
        <title>Dinara Idrissova || About</title>
      </Helmet>
      <Paper className={classes.section}>
        <Container maxWidth="md" className={classes.container}>
          <Grid
            container
            alignItems="center"
            className={classes.contentContainer}
            justifyContent="space-around"
          >
            <Zoom in={show}>
              <Grid item xs={12} sm={5} md={6} className={classes.bodyText}>
                <Box className={classes.boxMainText} marginTop={10}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align="justify"
                    className={classes.typoTitle}
                  >
                    A few words about me
                  </Typography>
                  <br />

                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.typoPara}
                  >
                    <span style={{ display: "inline-block", width: 20 }} />
                    My name is Dinara based in Georgia, US. I&#39;m originally
                    from Kazakhstan. I have more than ten years of experience in
                    BigPharma with various international companies. After we
                    moved to America with my family in 2017, I got a chance to
                    try something new from scratch. And I started my searching.
                    Thanks to my elder kid, when he started taking coding
                    classes for kids, the first time I tried to write code to
                    help him with his tasks and I fell in love with it. I
                    graduated from one of the best coding bootcamps in the
                    country and started my journey as a Web developer.
                    <span style={{ display: "block" }} /> I love to code because
                    it is like an art. You create something that people interact
                    with every day. That is an amazing feeling.
                    <span style={{ display: "block" }} /> I build websites and
                    web applications utilizing modern frameworks and design
                    practices tailored to every particular business. I will be
                    happy and honored to help you build or upgrade your website.
                    <br />
                  </Typography>
                </Box>
              </Grid>
            </Zoom>
            <Grid item xs={12} sm={6} md={4} className={classes.picture}>
              <Box pb={3} className={classes.imgBox}>
                <img
                  src={image}
                  alt="Dinara Idrissova"
                  width={300}
                  height={400}
                  className={classes.img}
                />
              </Box>
            </Grid>
            <Zoom in={show}>
              <Grid item sm={10}>
                <Box my={3}>
                  <Typography variant="subtitle2" gutterBottom align="center">
                    “Learning to write programs stretches your mind, and helps
                    you think better, creates a way of thinking about things
                    that I think is helpful in all domains.”
                  </Typography>
                  <Typography variant="body2" align="right">
                    -- Bill Gates
                  </Typography>
                </Box>
              </Grid>
            </Zoom>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Home;
