import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Wallpaper from "../assets/aboutWallpaper.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    backgroundImage: `url(${Wallpaper})`,
  },
}));

function About() {
  const classes = useStyles();
  return <Paper className={classes.section}>message from About page</Paper>;
}

export default About;
