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

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      height: "120vh",
    },
    background: "#faedf2",
  },
  content: {
    height: "100%",
  },
  container: {
    height: "100%",
  },
}));

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
          className={classes.content}
          justifyContent="space-between"
        >
          <Zoom in={show}>
            <Grid item sm={8}>
              <Box my={3}>
                <Typography component="h1" variant="h5" color="initial">
                  Hi, my name is Dinara.
                </Typography>
              </Box>

              <Typography variant="subtitle1">
                I build websites, web applications and responsive user
                interfaces. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Tempora doloribus rerum consequatur quaerat ratione sunt
                at quis soluta ullam mollitia beatae libero est corrupti
                molestiae nemo modi a, impedit quos.
              </Typography>
              <Box my={5}>
                <Button
                  href="mailto:dinara.idrissova@list.ru"
                  variant="contained"
                  color="secondary"
                >
                  GET IN TOUCH!
                  <MailOutlinedIcon style={{ marginLeft: 10 }} />
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Grid item>
            <Typography variant="body1" color="initial">
              Avatar
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Home;
