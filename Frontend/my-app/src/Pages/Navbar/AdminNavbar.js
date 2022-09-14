import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/AdminNavbar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircle';
import ChairIcon from '@mui/icons-material/Chair';
import {useSelector} from 'react-redux';

function AdminNavbar() {
  const [isAuth, setAuth] = useState(false); //spectator
  
  const currentUser = useSelector(state => state.user.currentUser);

  if(currentUser.isAdmin===true)
    setAuth(true); //admin
 
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar custom-nav' sticky='top'>
      <Container className='custom-container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="class1">

            <Nav.Link href="#home" className='text'>
              <div className="px-3"><ChairIcon /></div> </Nav.Link>
            
            
            {
              isAuth == 2 ?
              <>
                <Nav.Link href="/product" className='products'>
                  <div className="px-3">Products</div> </Nav.Link>
                
                <Nav.Link href="/" className='text'>
                  <div className="px-3">Home</div> </Nav.Link>
                
                <Nav.Link href="/about" className='text'>
              <div className="px-3">About</div> </Nav.Link>
                
                <Nav.Link href="/contact" className='text'>
              <div className="px-3">Contact</div> </Nav.Link>
                </>
                :
                <>
                  <Nav.Link href="/user-crud" className='text'>
                    <div className="px-3">Users</div> </Nav.Link>
                  
                  <Nav.Link href="/sales" className='text'>
                    <div className="px-3">Sales</div> </Nav.Link>
                  
                  <Nav.Link href="/stock" className='text'>
              <div className="px-3">Stocks</div> </Nav.Link>
                </>
            }
            
            
            {isAuth == 3 && <Nav.Link href="/user-crud" className='text'>
              <div className="px-3">Users</div> </Nav.Link>}
            
            {isAuth == 3 && <Nav.Link href="/sales" className='text'>
              <div className="px-3">Sales</div> </Nav.Link>}
            
            {isAuth==3 && <Nav.Link href="/stock" className='text'>
              <div className="px-3">Stocks</div> </Nav.Link>}
            
            {isAuth==3 && <Nav.Link href="/uploads" className='text'>
              <div className="px-3">Uploads</div> </Nav.Link> }
            
            {isAuth==2 &&<Nav.Link href="/" className='text'>
              <div className="px-3">Home</div> </Nav.Link> }
            
            {isAuth==2 && <Nav.Link href="/product" className='text'>
              <div className="px-3">Products</div> </Nav.Link>}
            
            {isAuth==2 &&  <Nav.Link href="/about" className='text'>
              <div className="px-3">About</div> </Nav.Link>}
            
            {isAuth==2 && <Nav.Link href="/contact" className='text'>
              <div className="px-3">Contact</div> </Nav.Link>}
            <NavDropdown
          title={
              <span>
                  <i className="last"></i> <AccountCircleOutlinedIcon/>
              </span>
          }
          id='collasible-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1' className='square border-bottom'>My Account</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3' className='square border-top'>Logout</NavDropdown.Item>
        </NavDropdown>
           
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;