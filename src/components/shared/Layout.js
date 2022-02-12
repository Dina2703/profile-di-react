import { Container, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import Social from "./Social";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Social direction="row" spacing={1} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.paper}>
              Copyright &copy; Dinara Idrissova
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Layout;
