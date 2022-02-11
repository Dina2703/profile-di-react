import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
