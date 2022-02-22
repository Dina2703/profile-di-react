import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Typography, Grid, Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
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

function NotFound() {
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
            <Box>
              <SentimentVeryDissatisfiedIcon className={classes.face} />
              <Typography variant="h3">404</Typography>
              <Typography>Oooops, page not found</Typography>

              <Link to="/">
                <Typography variant="body1" display="inline">
                  Back to Home page
                </Typography>
                <HomeIcon className={classes.homeIcon} />
              </Link>
            </Box>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default NotFound;
