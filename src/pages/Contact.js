import { useTranslation } from "react-i18next";
import {
  Container,
  TextField,
  CssBaseline,
  Button,
  Box,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    height: "100vh",
    paddingTop: 150,
  },
  btn: {
    margin: 20,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      margin: 40,
    },
    textTransform: "lowercase",
  },
  field: {
    marginTop: 20,
    display: "block",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
      marginLeft: 50,
    },
  },
}));

function Contact() {
  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Dinara Idrissova || Contact</title>
      </Helmet>
      <CssBaseline />
      <Container className={classes.formContainer} maxWidth="md">
        <Box>
          <Typography variant="h6" color="initial">
            {t("form.title")}
          </Typography>
          <Typography variant="body2" color="initial">
            {t("form.line")}
          </Typography>
        </Box>
        <form
          noValidate
          autoComplete="off"
          action="https://formsubmit.co/dinara.idrissova@list.ru"
          method="POST"
        >
          <TextField
            className={classes.field}
            variant="outlined"
            type="text"
            color="secondary"
            id="your-full-name"
            required
            name="name"
            label="Name"
            fullWidth
            placeholder="Please, enter your full name"
          />

          <TextField
            className={classes.field}
            variant="outlined"
            type="email"
            color="secondary"
            name="email"
            id="email"
            required
            label="Email"
            fullWidth
            placeholder="e.g. name@gmail.com"
          />

          <TextField
            className={classes.field}
            variant="outlined"
            type="text"
            color="secondary"
            id="message-with-details"
            name="message"
            label="Message"
            multiline
            required
            minRows={5}
            fullWidth
            placeholder="Please, type your project details "
          />
          <input type="hidden" name="_subject" value="New submission!" />

          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you! I will get in touch with you very soon"
          />
          <Button
            className={classes.btn}
            type="submit"
            variant="contained"
            color="secondary"
            onClick={() => console.log("clicked")}
            endIcon={<SendTwoToneIcon />}
          >
            {t("form.btn")}
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Contact;
