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
      main: "#ffcdd2",
      dark: "#cb9ca1",
    },
    secondary: {
      light: "#d7ffd9",
      main: "#a5d6a7",
      dark: "#75a478",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      letterSpacing: "0.06em",
      fontWeight: 700,
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
