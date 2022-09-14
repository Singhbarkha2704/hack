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
import storage from 'redux-persist/lib/storage'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { logOut } from "../../../../Store/userRedux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateToken = useSelector(state => state.user.currentUser);


  const logoutHandle = () => {    
    storage.removeItem('persist:root');
    dispatch(logOut());
    navigate('/login');
  }

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
                      <Nav.Link href="/user-profile">Profile</Nav.Link><hr/>
                      <Nav.Link href="/stock">Stocks</Nav.Link><hr/>
                      <Nav.Link href="/sales">Sales</Nav.Link> <hr />
                      <Nav.Link href="/product-detail">Products</Nav.Link> <hr />
                      <Nav.Link href="/userdetails">Users</Nav.Link> <hr />
                      <Nav.Link href="/bulk">Upload Bulk Products</Nav.Link> <hr />
                        
                  <button className="btn btn-lg btn-danger"  onClick={()=>logoutHandle()}>Logout</button>      
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
