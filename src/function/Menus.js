
import {Container,Nav,Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";
import './style.css'
function Menu(){
    return(
        <>

<Navbar expand="lg" className="navbar1
">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="naa">Home</Link></Nav.Link>
            <Nav.Link><Link to="/About" className="naa">About</Link></Nav.Link>
            <Nav.Link><Link to="/Contact" className="naa">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/Servies" className="naa">Servies</Link></Nav.Link>
            <Nav.Link><Link to="/News" className="naa">Blog</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    )
}
export default Menu;
