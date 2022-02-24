import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
    marginTop: 130,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      width: 260,
      height: 360,
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
    boxMainText: {
      width: "100%",
      marginTop: 0,
    },
    quote: {
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
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
  const { t } = useTranslation();

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
                <Box className={classes.boxMainText} marginTop={7}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align="justify"
                    className={classes.typoTitle}
                  >
                    <div>{t("about-message.part1")}</div>
                  </Typography>
                  <br />

                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.typoPara}
                  >
                    <span style={{ display: "inline-block", width: 20 }} />
                    {t("about-message.part2")}
                    <span style={{ display: "block" }} />{" "}
                    {t("about-message.part3")}
                    <span style={{ display: "block" }} />{" "}
                    {t("about-message.part4")}
                    <br />
                  </Typography>
                </Box>
              </Grid>
            </Zoom>
            <Grid item xs={12} sm={6} md={4} className={classes.picture}>
              <Box>
                <img
                  src={image}
                  alt="Dinara Idrissova"
                  width={350}
                  height={450}
                  className={classes.img}
                />
              </Box>
            </Grid>
            <Zoom in={show}>
              <Grid item sm={10}>
                <Box mt={3} className={classes.quote}>
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
