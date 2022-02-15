import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingBottom: 30,
    position: "sticky",
    bottom: 0,
    background: "#fcfaf7",
    width: "100%",
  },
  container: {},
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
    <footer className={classes.footer}>
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item sm={6}>
            <Social direction="row" />
          </Grid>
          <Grid item sm={6}>
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
