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

import Wallpaper from "../assets/aboutWallpaper.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    height: "130vh",
    backgroundImage: `url(${Wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    height: "100%",
  },
  container: {
    height: "100%",
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
        <Grid
          container
          alignItems="center"
          className={classes.content}
          justifyContent="space-between"
        >
          <Zoom in={show}>
            <Grid item sm={8}>
              <Box my={3}>
                <Typography component="h1" variant="h5" color="initial">
                  Welcome to About page
                </Typography>
              </Box>

              <Typography variant="subtitle1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora doloribus rerum consequatur quaerat ratione sunt at quis
                soluta ullam mollitia beatae libero est corrupti molestiae nemo
                modi a, impedit quos.
              </Typography>

              <Box my={3}>
                <Typography component="h1" variant="h5" color="initial">
                  Some kinda content
                </Typography>
              </Box>

              <Typography variant="subtitle1">
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
                        variant="contained"
                        color="secondary"
                      >
                        GET IN TOUCH!
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        href="mailto:dinara.idrissova@list.ru"
                        variant="contained"
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
