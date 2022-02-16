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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  section: {
    height: "90vh",
    paddingTop: 150,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  container: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
    },
  },
  typoTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  typoParag: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
}));

function About() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Paper className={classes.section}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Zoom in={show}>
            <Grid item sm={8}>
              <Box my={3}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="initial"
                  className={classes.typoTitle}
                >
                  Welcome to About page
                </Typography>
              </Box>

              <Typography variant="subtitle1" className={classes.typoParag}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora doloribus rerum consequatur quaerat ratione sunt at quis
                soluta ullam mollitia beatae libero est corrupti molestiae nemo
                modi a, impedit quos.
              </Typography>

              <Typography variant="subtitle1" className={classes.typoParag}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora doloribus rerum consequatur quaerat ratione sunt at quis
                soluta ullam mollitia beatae libero est corrupti molestiae nemo
                modi a, impedit quos.
              </Typography>
              <Box my={5}>
                <div className={classes.root}>
                  <Grid container spacing={4} alignContent="space-between">
                    <Grid item xs={3}>
                      <Button
                        href="mailto:dinara.idrissova@list.ru"
                        variant="contained"
                        color="secondary"
                      >
                        GET IN TOUCH!
                      </Button>
                    </Grid>

                    <Grid item xs={3}>
                      <Button
                        href="mailto:dinara.idrissova@list.ru"
                        variant="outlined"
                        color="secondary"
                      >
                        GET IN TOUCH!
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  );
}

export default About;
