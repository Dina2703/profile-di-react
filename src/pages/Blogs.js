import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "100%",
    paddingTop: 100,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  typo: {
    fontWeight: 400,
    fontSize: 22,
    letterSpacing: 2,
  },
  overlayTitle: {
    backgroundColor: "rgba(255,255,255, 0.3)",
  },
}));

function Blogs() {
  const classes = useStyles();

  return (
    <Paper className={classes.section}>
      <div className={classes.overlay}>
        <Container maxWidth="md" className={classes.container}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item>
              <div className={classes.overlayTitle}>
                <Typography variant="h5" component="h1" align="center">
                  Hi there! I&#39;m Dinara and welcome to my website!
                </Typography>
              </div>
              <br />
              <br />
              <Typography variant="h6" className={classes.typo}>
                <span style={{ display: "inline-block", width: 20 }} />
                Nowadays, having a website is not a luxury but a necessity,
                customers increasingly search for products and services online
                and if your business is not “on the internet” it practically
                invisible for many of potential customers. I will help you to
                build a storefront of your business in the digital space.
                I&#39;ll be happy to help you to start or grow your business.You
                may check some of my work following this{" "}
                <a
                  href="/work"
                  style={{
                    color: "#673ab7",
                    background: "white",
                    padding: "3px",
                  }}
                >
                  link
                </a>
                . Ask me anything and I&#39;ll try to help you.
                <span style={{ display: "block", width: 20 }} />
                Let&#39;s get in touch!
              </Typography>
              <Box my={2} ml={60} mb={10}>
                <Button variant="outlined" color="secondary" href="/contact">
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

export default Blogs;
