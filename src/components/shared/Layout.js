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
          content="My name is Dinara Idrissova. I'm a frontend developer. I build websites and web applications utilizing modern frameworks and design practices tailored to every particular business. Я создаю веб-сайты и веб-приложения, используя современные фреймворки и методы проектирования, адаптированные к каждому конкретному бизнесу, 
          Алматы, Казахстан, Астана. I'll be happy to help you to start or grow your business. React.js, MUI, frontEnd, web-developer, css, html, web design, web application, github, templates, coffee-shop, 'game app with react.js', GA, USA,GA, USA, Atlanta, веб-разработчик, CSS, HTML, веб-дизайн, веб-приложение, шаблоны, Almaty, Kazakhstan, Astana, Shimkent"
        />
        <meta
          name="keywords"
          content="React.js, MUI, frontEnd, web-developer, css, html, web design, web application, github, templates, coffee-shop, 'game app with react.js', GA, USA, Atlanta, веб-разработчик, CSS, HTML, веб-дизайн, веб-приложение, шаблоны, Almaty, Kazakhstan, Astana, Shimken"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
