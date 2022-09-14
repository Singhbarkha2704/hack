import React, {useState }  from "react";
import {Link, useNavigate} from 'react-router-dom'
import '../../Styles/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/apiCalls";
import { loginFailure, loginStart, loginSuccess } from "../../Store/userRedux";
import axios from 'axios';

const Login=()=>{    
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [emailErr,setEmailerr]=useState('')
    const [passwordErr, setPassworderr] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const bgstyle={color:"red"}
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const admin = useSelector((state) => state.user.currentUser);

    const handleChange=(e,key)=>{
        
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    
    const handleBlurEvent=(e,key)=>{
        if(key==='username'){
         if(e.target.value){
             setEmailerr(e.target.value)
             setEmailerr('')   
         }
         else{
             setEmailerr('Please Enter the Email !')
             toast.error('Empty Email Field!', {autoClose:1200})
         }
        }
        if(key==='password'){
         if(e.target.value){
             setPassworderr(e.target.value)
             setPassworderr('')
         }
         else{
             setPassworderr('Please Enter the Password !')
             toast.error('Empty Password Field!', {autoClose:1200})
         }
        }
       
    }
   
    const loginHandle = (e) => {
        e.preventDefault();
        // alert(`button clicked hvhv ${username}jjv ${password} `);
        console.log(username);
        console.log(password);
        axios.post(`http://localhost:3005/api/auth/login`,{username,password}).then
        (res=>{        
           
            dispatch(loginSuccess(res.data));
            if (res.data.isAdmin) {
                localStorage.setItem('isAdmin', true);                
                navigate("/admin-dashboard");
             }
            else {
                localStorage.setItem('isAdmin', false);
                navigate("/");
            }
            
           
            console.log('log',localStorage.getItem('isLoggedin'))
        }).catch(res=>{
            console.log("error");
            dispatch(loginFailure());
        })
        // login(dispatch, { username, password });
        // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
        // const currentUser = user && JSON.parse(user).currentUser;
        // console.log(currentUser);
        // const admin = useSelector((state) => state.user.currentUser.isAdmin);
        // if(admin){
        //     console.log("admin");
        //        navigate("/admin");
        // }
        // else{
        //     console.log("user");
        //       navigate("/");
        // }
        // toast.success('login successfully!',{ autoClose: 1200 })
    }


    return(
        <section className="Form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-row">
                            <h4 className="login-h4">Sign In</h4>
                            <input type='text' placeholder="User Name"  onChange={(e) => handleChange(e, "username")} onBlur={(e) => handleBlurEvent(e, 'username')} ></input>
                            <h6 style={bgstyle}>{emailErr}</h6>
                            <input type='password' placeholder="Password" onChange={(e) => handleChange(e, "password")} onBlur={(e) => handleBlurEvent(e, 'password')}></input>
                            <h6 style={bgstyle}>{passwordErr}</h6>
                            <button className="login-btn" onClick={loginHandle}>Login</button>
                            <hr />
                            <p className="login-b">Don't have an Account?</p>
                            <Link to='/Register'>
                                <button className="btn btn-warning" style={{marginLeft:'120px'}}>
                                    Sign Up
                                </button>
                               
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
         
         
        
    )
}
export default Login

