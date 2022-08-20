import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './trural.png';
import './header.css';

const Header = () => {
  const location = useLocation();
  const { user, signOUtUser } = useContext(UserContext)
  return (
    <Container fluid>
      <Navbar expand="lg" className= {`pt-4 text-primary ${location.pathname === "/destination" && "destination-navbar"}`}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="80"
            height="80"
            className={`d-inline-block align-top ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'logo' : ''}`}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="m-auto navBarSearchForm pl-3">
            <FormControl type="text" placeholder="Search your Destination..." className={`mr-sm-2 ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'search-input' : ''}`} />
          </Form>
          <Nav className={`ml-auto ${location.pathname === '/' || location.pathname.includes("/booking/") || location.pathname === '/destination' ? 'header-nav2' : 'header-nav'}`}>
            <Nav.Link as={Link} className="px-4" to="/">Offers</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/destination">Destinations</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/">Contact</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} className="px-4" to="/">Bookings</Nav.Link>
                <Nav.Link className="px-4 font-weight-bold" >{user.name.split(' ')[0]}</Nav.Link>
                <Nav.Link className="px-4" onClick={signOUtUser} >Logout</Nav.Link>
              </>
            ) : (
                <Nav.Link as={Link} className="px-4" to="/login">Register</Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;




