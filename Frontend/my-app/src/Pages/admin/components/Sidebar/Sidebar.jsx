import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../Styles/sidebar.css";
  import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Analytics from './../../Analytics';

const Sidebar = () => {
  return (
   <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3" >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{marginLeft:'70.123rem'}}/>
            <div className="sidebar__content" >
              <div className="menu" >
                <ul className="nav__list">
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                           
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                    <Offcanvas.Body style={{background:'rgb(58, 55, 55)', color: '#fff', fontWeight: 'bold', fontSize: '20px'}}>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/admin-dashboard">Dashboard</Nav.Link><hr/>
                  <Nav.Link href="/analytics">Analytics</Nav.Link><hr/>
                  <Nav.Link href="/settings">Settings</Nav.Link><hr/>
                  <Nav.Link href="/stock">Stocks</Nav.Link><hr/>
                  <Nav.Link href="/sales">Sales</Nav.Link> <hr/>                
                </Nav>               
                   </Offcanvas.Body>
             
                    
                  </Navbar.Offcanvas>
                     </ul>
              </div>
              </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}



export default Sidebar;
