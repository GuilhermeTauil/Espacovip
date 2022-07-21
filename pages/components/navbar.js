import styles from "../../styles/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <Navbar fixed="top" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/2.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className={styles.Nav}>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#Sobre">Sobre</Nav.Link>
          <Nav.Link href="#Servicos">Serviços</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;
