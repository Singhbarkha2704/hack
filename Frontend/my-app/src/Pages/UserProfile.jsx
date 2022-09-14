import React, { Fragment } from 'react';
import '../Styles/UserProfile.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import backGif from '../assets/images/icons8-back.gif';
import { useSelector } from 'react-redux';
import Sidebar from './admin/components/Sidebar/Sidebar';

const UserProfile = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const user = {
        id:1,
        username: 'Doraemon',
        email: 'doraemon@gmail.com',
        password: '',
        userImage: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png',
        phoneNo:'1234567890',
        address: 'home no33, sector9, Ghaziabad, U.P.',
        pincode: 234567,
        password: 'abc@gmail.com'
    }

    const notify = () => {
        toast.success("Password Updated Successfully!", {
            autoClose:1200
        });
    }

    const editHandle = () => {
        toast.success("Profile Updated Successfully!", {autoClose:1200})
    }

    return (
    <Fragment>
        <Helmet>
            <title>Profile</title>
        </Helmet>  
            {
                currentUser.isAdmin && (
                <div className="layout">
                    <Sidebar />
                    <div className="main__layout"/>

                    <div className="content"/>
                </div>                    
                )
            }
              
        {/* Header Section */}
        {/* <header>
            <div className='continue-shopping'>
                <img src={backGif} alt='left-arrow' className='arrow-icon'/>
                <h3>Continue Shopping</h3> 
            </div>
                    
            <div className='cart-icon'>
                <img src="https://img.icons8.com/material-rounded/48/12B886/user-male-circle.png" alt='user-icon' />
            </div>
        </header>  */}
          
        {/* main section */}
            
        <div className="profileContainer">
            <div>
                <h1 >Profile</h1>
                    <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' alt='' />

         {/* Popup for Editing Password*/}
                 {/* <Popup
                    trigger={<button className='change-passwordbtn'>Edit Profile</button>} position="top center"      
                >
                    <form
                        className="updatePasswordForm"
                    >
                        <h5 className='mx-sm-3 my-sm-3  popup-heading'>Edit Profile</h5>
                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="text"
                            placeholder="Enter Username"
                            required
                        />

                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="text"
                            placeholder="Enter Mobile Number"
                            required                    
                        />
                        
                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="text"
                            placeholder="Enter PinCode"
                            required
                        />
                        
                        <button
                        type="submit"
                        value="Change"
                        className="updatePasswordBtn btn btn-danger mt-1 mx-sm-3"
                        onClick={editHandle()}                      
                        >
                            Edit
                        </button>    
                    </form>
                                     
                </Popup> */}
            </div>
                    
            <div>
                <div>
                    <h4>Name</h4>
                    <p>{currentUser.username}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{currentUser.email}</p>
                </div>
                <div>
                    <h4>Mobile Number</h4>
                    <p>{currentUser.phone}</p>
                </div>
                        
                
                <div>
            {/* <Link to="/orders">My Orders</Link> */}
                {/* <Popup
                    trigger={<button className='change-passwordbtn'>Change Password</button>} position="top center"      
                >
                    <form
                        className="updatePasswordForm"
                    >
                        <h5 className='mx-sm-3 my-sm-3  popup-heading'>Update Password</h5>
                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="password"
                            placeholder="Old Password"
                            required
                        />

                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="password"
                            placeholder="New Password"
                            required                    
                        />
                        
                        <input
                            className='form-control mt-2 mx-sm-3 user-profile-inp'
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                        
                        <button
                        type="submit"
                        value="Change"
                        className="updatePasswordBtn btn btn-danger mt-1 mx-sm-3"
                        onClick={notify}                      
                        >
                            Update
                        </button>    
                    </form>
                                     
                </Popup> */}
                            
            {/* // <Link to="/password/change">Change Password</Link> */}
                    </div>
        </div>
            </div>    
    <ToastContainer/>        
    </Fragment>
  )
}

export default UserProfile
