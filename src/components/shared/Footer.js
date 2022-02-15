import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingTop: 20,
  },

  copyRight: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  [theme.breakpoints.down("sm")]: {
    gridContainer: {
      paddingTop: 0,
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={12} smUp={4}>
            <Social direction="row" />
          </Grid>
          <Grid item xs={12} smUp={4}>
            <Typography
              variant="caption"
              display="block"
              className={classes.copyRight}
            >
              Copyright &copy; Dinara Idrissova
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
