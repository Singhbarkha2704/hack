import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import "../../Styles/Footer.css";
import {Link } from 'react-router-dom'

const Footer=()=>{
  return(
    <div className="Container">
     <div className="left">
      <h1>Mobile Store</h1>
      <p className='desc'>
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don’t look even slightly believable.
      </p>
      <div className='socialContainer'>
        <div style={{backgroundColor: "#3B5999"}} className='socialIcon'>
        <Link to="https://www.facebook.com/login/"><FacebookIcon/></Link>
        </div>
          
        <div style={{backgroundColor: "#E4405F"}} className='socialIcon'>
        <InstagramIcon></InstagramIcon>
        </div>
          
        <div style={{backgroundColor: "#55ACEE"}} className='socialIcon'>
        <TwitterIcon></TwitterIcon>
        </div>
          
        <div style={{backgroundColor: "#3B5999"}} className='socialIcon'>
        <LinkedInIcon></LinkedInIcon>
        </div>
      </div>
     </div>
     <div className='center'>
     
      <h3 className='Title'>Useful Links</h3>
     <ul>
      <li>Home</li>
      <li>Cart</li>
      <li>Wishlist</li>
      <li>Terms</li>
      <li>My Account</li>
      <li>Order Tracking</li>
      
     </ul>
     </div>
    
     <div className="right">
      <h3 className='Title'>Contact</h3>
      <div className='contactItem'>
       <LocationOnIcon style={{marginRight:"10px" }}></LocationOnIcon> 622 Dixie Path , South Tobinchester 98336
      </div>
      <div className='contactItem'>
      <PhoneIcon  style={{marginRight:"10px"}}></PhoneIcon>+1 234 56 78
      </div>
      <div className='contactItem'>
   <MailIcon style={{marginRight:"10px"}}></MailIcon>contact@capstone.com
      </div>
     </div>
    </div>)
  }
  export default Footer;