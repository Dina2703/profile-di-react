import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Link,
} from "@material-ui/core";
import { useEffect, useState } from "react";

const itemData = [
  {
    img: "/assets/book-shelf.png",
    title: "BookShelf",
    type: "template",
    cols: 2,
    id: 1,
    url: "https://audio-books-next.vercel.app/",
  },
  {
    img: "/assets/nucamp-site.png",
    title: "NuCamp",
    type: "template",
    cols: 2,
    id: 2,
    url: "https://nucamp-website-01.netlify.app/",
  },
  {
    img: "/assets/dom-coffee.png",
    title: "Dom Coffee",
    type: "template",
    cols: 2,
    id: 3,
    url: "https://coffee-shop-dom.netlify.app/",
  },
  {
    img: "/assets/memory-game.png",
    title: "Memory Game",
    type: "game",
    cols: 2,
    id: 4,
    url: "https://memory-game-dina.netlify.app/",
  },
];

const useStyles = makeStyles((theme) => ({
  div: {
    height: "auto",
    marginTop: 150,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  typo: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 30,
    textTransform: "uppercase",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  root: {
    maxWidth: 350,
    marginBottom: 30,
    border: "15px solid  #e8eaf6",
  },
  media: {
    height: 200,
    width: "100%",
  },
  content: {
    background: "#e8eaf6",
    paddingTop: 10,
    padding: 0,
  },
  workTitle: {
    fontSize: 15,
  },
  workType: {
    fontSize: 13,
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 50,
    },
  },
}));

function Work() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(itemData);
  }, []);

  return (
    <div className={classes.div}>
      <Container maxWidth="md" className={classes.container}>
        <Typography
          variant="subtitle2"
          color="initial"
          className={classes.typo}
        >
          Some of my works
        </Typography>
        <Grid container>
          {data.map((item) => (
            <Grid
              item
              xs={10}
              sm={6}
              key={item.id}
              className={classes.gridItem}
            >
              <Link href={item.url} target="_blank" rel="noreferrer">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.img}
                      title={item.title}
                    />
                    <CardContent className={classes.content}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        color="initial"
                        className={classes.workTitle}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="initial"
                        className={classes.workType}
                      >
                        {item.type}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Work;
