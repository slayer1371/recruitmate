import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./nav.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="adidas-navbar">
      <Navbar.Brand href="#home">
        <img
          src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Screenshot%202024-07-04%20at%201.51.23%E2%80%AFPM.png/:/rs=w:452,h:334,cg=true,m/cr=w:452,h:334/qt=q:95"
          alt="Adidas Logo"
          style={{ width: "80px" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="d-flex justify-content-center w-100">
          <Nav className="text-center">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Nav.Link href="programs">OUR PROGRAMS</Nav.Link>
            <Nav.Link href="mentors">OUR MENTORS</Nav.Link>
            <div className="dropdown">
              <button className="dropdown-toggle btn">RESOURCES</button>
              <div className="dropdown-menu">
                <a href="/resource1">Coach Contacts and Recruit Questionnaires</a>
                <a href="/resource2">Track and Field Recruiting Resources</a>
                <a href="/resource3">Email Templates</a>
                <a href="/resource4">Track and Field Recruiting Standards</a>
              </div>
            </div>
          </Nav>
        </div>

        <div className="d-flex">
          <Form inline className="search-form mr-2">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2 shift-left"
            />
          </Form>
          <Nav>
            <Nav.Link href="">
              <FaUser size={20} />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
