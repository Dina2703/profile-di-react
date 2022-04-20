import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "8em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    background: "#fcfaf7",
    width: "100%",
  },
  copyRight: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid item sm={6}>
            <Social direction="row" />
          </Grid>
          <Grid item sm={6}>
            <Typography
              variant="caption"
              display="block"
              className={classes.copyRight}
              color="textPrimary"
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
