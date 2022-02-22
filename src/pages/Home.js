import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: 100,
    height: "90vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  typo: {
    fontWeight: 500,
    fontSize: 22,
    fontFamily: ["Nunito", "sans-serif"].join(","),
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  overlayTitle: {
    backgroundColor: "rgba(255,255,255, 0.2)",
  },
  typoTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 19,
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 40,
      fontSize: 12,
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Paper className={classes.section}>
      <div className={classes.overlay}>
        <Container maxWidth="md" className={classes.container}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item>
              <Box mt={3}>
                <Typography
                  variant="h5"
                  component="h1"
                  align="center"
                  className={classes.typoTitle}
                >
                  Hi there! I&#39;m Dinara and welcome to my website!
                </Typography>
              </Box>
              <br />
              <br />
              <Typography variant="h6" className={classes.typo} align="justify">
                <span style={{ display: "inline-block", width: 40 }} />
                Nowadays, having a website is not a luxury but a necessity,
                customers increasingly search for products and services online
                and if your business is not “on the internet” it practically
                invisible for many of potential customers.
                <br />
                <span style={{ display: "inline-block", width: 40 }} />I will
                help you to build a storefront of your business in the digital
                space. I&#39;ll be happy to help you to start or grow your
                business.You may check some of my work following this
                <Link
                  to="/work"
                  style={{
                    color: "white",
                    padding: "3px",
                    textDecoration: "underline",
                    textTransform: "lowercase",
                  }}
                >
                  link
                </Link>
                . Ask me anything and I&#39;ll try to help you.
                <span style={{ display: "block", width: 20 }} />
                Let&#39;s get in touch!
              </Typography>
              <Box my={2} mb={16} py={5}>
                <Button
                  component={Link}
                  variant="contained"
                  color="secondary"
                  to="/contact"
                  className={classes.button}
                >
                  contact me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  );
}

export default Home;
