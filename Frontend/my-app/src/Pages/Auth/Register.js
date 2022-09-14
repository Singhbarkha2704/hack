import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Styles/Register.css'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios'

const Register = () => {

    const [status,setStatus] = useState('');
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [userErr, setUsererr] = useState('')
    const [emailErr, setEmailerr] = useState('')
    const [phoneErr, setPhoneerr] = useState('')
    const [passwordErr, setPassworderr] = useState("")
    const bgstyle = { color: "red" }

   
    const handleChange = (e, key) => {

        if (key === 'username') {
            setUsername(e.target.value)
        }
        if (key === 'email') {
            setEmail(e.target.value)
        }
        if (key === 'phone') {
            setPhone(e.target.value)
        }
        if (key === 'password') {
            setPassword(e.target.value)
        }
    }



    const handleBlurEvent = (e, key) => {
        if (key === 'username') {
            if (e.target.value) {
                setUsererr(e.target.value)
                setUsererr('')
            }
            else {
                setUsererr('Please Enter the Name !')
            }
        }
        if (key === 'email') {
            if (e.target.value) {
                setEmailerr(e.target.value)
                setEmailerr('')
            }
            else {
                setEmailerr('Please Enter the Email !')
            }
        }

        if (key === 'phone') {
            if (e.target.value) {
                setPhoneerr(e.target.value)
                setPhoneerr('')
            }
            else {
                setPhoneerr('Please Enter the Phone No !')
            }
        }
        if (key === 'password') {
            if (e.target.value) {
                setPassworderr(e.target.value)
                setPassworderr('')
            }
            else {
                setPassworderr('Please Enter the Password !')
            }
        }

    }

    const handleRegister = (e) => {
        console.log("!");
        e.preventDefault();
    axios.post(`http://localhost:3005/api/auth/register`,
    {username:username,email:email,password:password,phone:phone} )
        .then(response => { 
           console.log(response);
           if(response.status==201){
            navigate('/login');
           }
            
        })
        .catch(error => {
            console.log("error");
            console.log(error)
            alert("You are entering Invalid Username and password") 
        });
    }

    return (

        <section className="Form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1592920567-mid-century-double-pop-up-coffee-table-walnut-white-marble-2-c.jpg" className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-row">
                            <h4>Sign Up</h4>
                            <input type='text' placeholder="Name" onChange={(e) => handleChange(e, "username")} onBlur={(e) => handleBlurEvent(e, 'username')}></input>
                            <h6 style={bgstyle}>{userErr}</h6>
                            <input type='text' placeholder="Email address" onChange={(e) => handleChange(e, "email")} onBlur={(e) => handleBlurEvent(e, 'email')}></input>
                            <h6 style={bgstyle}>{emailErr}</h6>
                            <input type='text' placeholder="Phone no." onChange={(e) => handleChange(e, "phone")} onBlur={(e) => handleBlurEvent(e, 'phone')}></input>
                            <h6 style={bgstyle}>{phoneErr}</h6>
                            <input type='password' placeholder="Password" onChange={(e) => handleChange(e, "password")} onBlur={(e) => handleBlurEvent(e, 'password')}></input>
                            <h6 style={bgstyle}>{passwordErr}</h6>                            
                            <button className="register-btn" style={{ marginTop:20}} onClick={handleRegister}>Register</button>
                            <hr />
                            <p>Already have an account ? </p>
                            <Link to='/login'><button className="register-b btn btn-success" style={{marginLeft:'130px', marginTop:'-5px'}} >Login</button></Link>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}
export default Register