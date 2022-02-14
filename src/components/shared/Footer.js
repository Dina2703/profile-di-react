import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  grid: {
    paddingTop: 20,
  },

  copyRight: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          spacing={3}
          className={classes.grid}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={6}>
            <Social direction="row" spacing={1} />
          </Grid>
          <Grid item xs={12} sm={6}>
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
    </div>
  );
}

export default Footer;
