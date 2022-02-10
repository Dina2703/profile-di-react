import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Layout from "./components/shared/Layout";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
