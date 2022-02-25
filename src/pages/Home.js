import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
    fontWeight: 400,
    fontSize: 20,
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
      width: 140,
      height: 40,
      fontSize: 10,
      fontWeight: 800,
    },
  },
}));

function Home() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.section}>
      <div className={classes.overlay}>
        <Container maxWidth="md" className={classes.container}>
          <Grid container alignItems="center" className={classes.content}>
            <Grid item>
              <Box mt={3}>
                <Typography
                  variant="h6"
                  component="h1"
                  align="center"
                  className={classes.typoTitle}
                >
                  <div>{t("home-message.part1")}</div>
                </Typography>
              </Box>
              <br />
              <br />
              <Typography variant="h6" className={classes.typo} align="justify">
                <span style={{ display: "inline-block", width: 40 }} />
                {t("home-message.part2")}
                <br />
                <span style={{ display: "inline-block", width: 40 }} />
                {t("home-message.part3")}
                <Link
                  to="/work"
                  style={{
                    color: "white",
                    padding: "3px",
                    textDecoration: "underline",
                    textTransform: "lowercase",
                  }}
                >
                  {t("home-message.link")}
                </Link>
                {t("home-message.part4")}
                <span style={{ display: "block", width: 20 }} />
                {t("home-message.part5")}
              </Typography>
              <Box my={2} mb={16} py={5}>
                <Button
                  component={Link}
                  variant="contained"
                  color="secondary"
                  to="/contact"
                  className={classes.button}
                >
                  {t("btn")}
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
