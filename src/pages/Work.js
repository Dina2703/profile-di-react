import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

const itemData = [
  {
    img: "/assets/book-shelf.png",
    title: "BookShelf",
    type: "template",
    cols: 2,
    id: 1,
  },
  {
    img: "/assets/nucamp-site.png",
    title: "NuCamp",
    type: "template",
    cols: 2,
    id: 2,
  },
  {
    img: "/assets/dom-coffee.png",
    title: "Dom Coffee",
    type: "template",
    cols: 2,
    id: 3,
  },
  {
    img: "/assets/memory-game.png",
    title: "Memory Game",
    type: "game",
    cols: 2,
    id: 4,
  },
];

const useStyles = makeStyles((theme) => ({
  div: {
    height: "90vh",
    marginTop: 150,
  },
  typo: {
    textAlign: "center",
    fontSize: 24,
  },
  root: {
    maxWidth: 300,
    marginBottom: 30,
    border: "15px solid  #e8eaf6",
  },
  media: {
    height: 200,
    width: "100%",
  },
  content: {
    background: "#e8eaf6",
  },
}));

function Work() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Container maxWidth="md" className={classes.container}>
        <Typography
          variant="subtitle1"
          color="initial"
          className={classes.typo}
        >
          Some of my projects
        </Typography>
        <Grid container>
          {itemData.map((item) => (
            <Grid item xs={10} sm={6} key={item.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.title}
                  />
                  <CardContent className={classes.content}>
                    <Typography variant="body2" component="p" color="initial">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" component="p" color="initial">
                      {item.type}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Work;
