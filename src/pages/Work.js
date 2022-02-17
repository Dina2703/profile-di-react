import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Container,
  Grid,
  IconButton,
  CardHeader,
} from "@material-ui/core";
import { useEffect, useState } from "react";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Helmet } from "react-helmet";

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
    marginTop: 150,
    height: "80vh",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },

  cardheader: {
    fontSize: 4,
    fontFamily: "Times New Roman",
  },

  root: {
    maxWidth: 350,
    marginBottom: 30,
    border: "15px solid  #e8eaf6",
    borderBottom: "none",
    position: "relative",
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

  gridItem: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 50,
    },
  },
  avatar: {
    background: "#66bb6a",
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
      <Container maxWidth="md">
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
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.title}
                  />

                  <CardHeader
                    style={{ background: "#e8eaf6" }}
                    subheader={item.title}
                    action={
                      <IconButton
                        aria-label="go to the template website"
                        style={{
                          position: "absolute",
                          right: 10,
                          bottom: 20,
                          padding: 0,
                        }}
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#388e3c" }}
                        >
                          <ChevronRightIcon />
                        </a>
                      </IconButton>
                    }
                  />
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
