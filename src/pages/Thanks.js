import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Typography, Grid, Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
  },
  container: {
    height: "100%",
  },
  homeIcon: {
    fontSize: 40,
    marginBottom: -10,
    marginLeft: 10,
  },
  face: {
    fontSize: 140,
  },
}));

function Thanks() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.section}>
        <Container maxWidth="md" className={classes.container}>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            className={classes.container}
          >
            <Grid>
              <SentimentSatisfiedSharpIcon className={classes.face} />
              <Typography variant="h5">
                Thank you for the contacting me!
              </Typography>
              <Typography>I'll get back to you within next 24 hours</Typography>

              <Link to="/">
                <Typography variant="body1" display="inline">
                  Back to Home page
                </Typography>
                <HomeIcon className={classes.homeIcon} />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Thanks;
