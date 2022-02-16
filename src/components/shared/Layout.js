import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <div>
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
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
