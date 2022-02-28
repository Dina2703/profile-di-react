import { useTranslation } from "react-i18next";
import validator from "validator";
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
import { useState } from "react";

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

  const [emailErrTxt, setEmailErrTxt] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [btn, setBtn] = useState(true);

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailErrTxt("");
    } else {
      setEmailErrTxt("Please, enter valid Email");
      setEmailErr(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Dinara Idrissova || {t("navbar.contact")}</title>
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
            autoComplete="none"
            name="name"
            label="Name"
            fullWidth
            placeholder="Please, enter your full name"
          />

          <TextField
            onChange={(e) => {
              validateEmail(e);
              setBtn(!e.target.value);
            }}
            className={classes.field}
            variant="outlined"
            type="email"
            autoComplete="none"
            color="secondary"
            name="email"
            id="email"
            error={emailErr}
            helperText={emailErrTxt}
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
          <input
            type="hidden"
            name="_next"
            // value="https://dinaraidrissova.com/thanks"
            value="http://localhost:3000/thanks"
          />

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
            endIcon={<SendTwoToneIcon />}
            disabled={btn}
          >
            {t("form.btn")}
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Contact;
