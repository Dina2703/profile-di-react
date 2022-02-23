import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Container,
  Grid,
  CardHeader,
  Link,
} from "@material-ui/core";
import { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

const itemData = [
  {
    img: "/assets/book-shelf.png",
    title: "BookShelf website",
    type: "template",
    cols: 2,
    id: 1,
    url: "https://audio-books-next.vercel.app/",
  },
  {
    img: "/assets/nucamp-site.png",
    title: "NuCamp website",
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
  {
    img: "/assets/travel.png",
    title: "Travel website",
    type: "template",
    cols: 2,
    id: 5,
    url: "https://travel-react-template.netlify.app/",
  },
];

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: 150,
    height: "110vh",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  container: {
    height: "100%",
  },

  cardheader: {
    fontSize: 4,
    fontFamily: "Times New Roman",
  },

  root: {
    maxWidth: 350,
    marginBottom: 30,
    border: "10px solid  #fff",
    borderBottom: "none",
    position: "relative",
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  gridItem: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 30,
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
      <Helmet>
        <title>Dinara Idrissova || Works</title>
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography
          variant="h5"
          color="initial"
          align="center"
          style={{ marginBottom: 20 }}
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
              <Card className={classes.root}>
                <CardActionArea>
                  <Link
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <CardMedia
                      className={classes.media}
                      image={item.img}
                      title={item.title}
                    />
                  </Link>
                  <figure
                    className="cards--item--pic-wrap"
                    data-category={item.type}
                  >
                    <CardHeader
                      style={{ background: "#fff" }}
                      subheader={item.title}
                    />
                  </figure>
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
