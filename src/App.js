import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./components/shared/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";

import "./App.css";
import { Helmet } from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#eeeeee",
      dark: "#bcbcbc",
    },
    text: {
      primary: "#616161",
      secondary: "#37474f",
    },
    secondary: {
      light: "#9a67ea",
      main: "#673ab7",
      dark: "#320b86",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      letterSpacing: "0.1em",
      fontWeight: 700,
    },
    body2: {
      letterSpacing: 0.5,
      fontFamily: "Georgia",
      fontSize: 16,
    },
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Dinara Idrissova || Web Developer</title>
          <meta
            name="description"
            content="Hi there! My name is Dinara and I'm really excited to welcome you to my website! I build websites and web applications utilizing modern frameworks and design practices tailored to every particular business.  I will help you to build a storefront of your business in the digital space. I'll be happy to help you to start or grow your business. Ask me anything and I'll try to help you."
          />
          <meta
            name="keywords"
            content="React.js, MUI, frontEnd, web-developer, css, html, web design, web application, github, templates, coffee-shop, 'game app with react.js'"
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/work" element={<Work />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
