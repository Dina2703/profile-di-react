import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/shared/Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

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
      secondary: "#673ab7",
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
      fontFamily: "Poppins",
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
            content="Hi there! My name is Dinara. I build websites and web applications utilizing modern frameworks and design practices tailored to every particular business. 
            Я создаю веб-сайты и веб-приложения, используя современные фреймворки и методы проектирования, адаптированные к каждому конкретному бизнесу I'll be happy to help you to start or grow your business. GA, USA, Atlanta, веб-разработчик, CSS, HTML, веб-дизайн, веб-приложение, шаблоны, Almaty, Kazakhstan, Astana, Shimkent"
          />
          <meta
            name="keywords"
            content="React.js, MUI, frontEnd, web-developer, css, html, web design, web application, github, templates, coffee-shop, 'game app with react.js, Atlanta, GA, USA, KZ, RU, ru, kz, веб-разработчик, CSS, HTML, веб-дизайн, веб-приложение,  веб-разработчик, CSS, HTML, веб-дизайн, веб-приложение,  Almaty, Kazakhstan"
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
