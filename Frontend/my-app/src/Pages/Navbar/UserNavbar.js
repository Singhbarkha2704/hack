import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/UserNavbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircle';
import ChairIcon from '@mui/icons-material/Chair';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { useDispatch, useSelector } from "react-redux";//
import { Fragment, useState } from 'react';
import '../../Styles/search.css'
import { ProductFetch } from '../../Store/ProductSlice';
import { useNavigate } from 'react-router-dom';
import storage from 'redux-persist/lib/storage'
import { logOut } from "../../Store/userRedux";

function UserNavbar() {
  const searchRes = useSelector(state => state.product.items);
  //const currentuser = useSelector(state => state.user.currentUser);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [term, setTerm] = useState('');

  const submitHandler = (e) => {
          e.preventDefault()
      if(term==="") return alert("Please enter search term")
    const search = dispatch(ProductFetch(term));
    console.log(`search`, search);
    console.log(`searchRes`, searchRes);
      setTerm("")
  }

  const currentUser = useSelector(state => state.user.currentUser); //initially-->null it means user not loggedin

  const logoutHandle = () => {
    alert('Are you sure you want to logout?')
    storage.removeItem('persist:root')
    dispatch(logOut());
    
    navigate('/login')
  }
  
  return (
    <Fragment>
    <Navbar collapseOnSelect expand="lg" className='navbar custom-nav' sticky="top" >
      <Container className='custom-container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="class1">
            <Nav.Link href="#" className='text'>
              <div className="px-3"><ChairIcon /></div> </Nav.Link>
            
            <Nav.Link href="/" className='text'>
              <div className="px-3">Home</div> </Nav.Link>
            
            <Nav.Link href="/product" className='text'>
              <div className="px-3">Products</div> </Nav.Link>
            
            <Nav.Link href="/about" className='text'>
              <div className="px-3">About</div> </Nav.Link>
            
            <Nav.Link href="/contact" className='text'>
              <div className="px-3">Contact</div> </Nav.Link>
            
              {currentUser === null ? <Nav.Link href='login' className='text'>
                <div className="px-3">Login</div> </Nav.Link> : <button style={{ border: 'none', backgroundColor: 'white',}} className='mb-3' onClick={() => { logoutHandle() }}>
                  <div className='px-3'>Logout</div>
                </button>
             } 

              {/* {isAuth && <button  className='text btn btn-danger'>
                <div className="px-3">Logout</div>
              </button>} */}

            <NavbarBrand>
        {/* <SearchBar placeholder="Search for products, brand and more" data={ProductData}/> */}
        <div className='search-bar'>
            <form  className='search-form' onSubmit={submitHandler}>
              <button className='searching-button' type='submit'><i className="fa fa-search mt-3"></i></button>
              <input type="text" className='search-inp' value={term} placeholder="Search..." onChange={(e)=>setTerm(e.target.value)}/>
            </form>
        </div>
            </NavbarBrand>
            
          <NavDropdown
          title={
              <span>
                  <i className="last"></i> <AccountCircleOutlinedIcon/>
              </span>
          }
                id='collasible-nav-dropdown'>
          <NavDropdown.Item href='/user-profile' className="square border-bottom">My Profile</NavDropdown.Item>
               {/* <NavDropdown.Item onClick={logoutHandler()} className="square border-top">Logout</NavDropdown.Item> */}
            </NavDropdown>
            
        <Nav.Link href="/wishlist" className='text'>
            <div className="px-3"><FavoriteBorderOutlinedIcon/></div>
              </Nav.Link>
      
        {/* cart icon link*/}
              
        <Nav.Link href="/cart" className='text'>
            <div className="px-3">
            <span className='usernavbar-count'>
              {cartTotalQuantity}
              </span>
              <ShoppingCartOutlinedIcon/>
            </div>
            </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Fragment>

  );
}

export default UserNavbar;