import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./components/shared/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";

import "./App.css";

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
      light: "#d6b4e0",
      main: "#c9aed1",
      dark: "#9e6aad",
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
    },
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          {" "}
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
