import axios from "axios"
import React, { Fragment, useState } from "react"
import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../../../Styles/Editproduct.css";
import Sidebar from "../components/Sidebar/Sidebar"
import { TOKEN, userRequest } from "../../../requestMethods"

function EditUser(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const { _id } = useParams('');

    useEffect(() => {
        axios.get(`http://localhost:3005/api/users/find/${_id}`, {
            headers: { token: `Bearer ${TOKEN}` }
        })
            .then((prod) => {
                //console.log(prod.data.product);
                if (prod) {
                    setUsername(prod.data.username)
                    setEmail(prod.data.email)
                    setPhone(prod.data.phone)
                }
            })
            .catch(error => {
                console.log(error)
            })
        }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/api/users/${_id}`, { username, email, phone }, {
            headers: { token: `Bearer ${TOKEN}` }

        })
            .then(function (response) {
                console.log(response);
                toast.success(` User name: ${username}, updated`);
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message);
            });
    }
    return (
        <Fragment>
            <div className="layout">
        <Sidebar />
        <div className="main__layout">

            <div className="content">
            </div>
        </div>
        </div>
        <div className="add-body">
        <div className="add-container">
        <div className="form-title">Edit Users</div>
    <form>
        <div className="user-details">
            <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter user name" value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
            </div>
            <div className="input-box">
            <span className="details">Email Address</span>
            <input type="text" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className="input-box">
            <span className="details">Phone No</span>
            <input type="text" placeholder="Enter Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
            </div>
            {/* <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
            </div> */}
            <button className="add-btn1" onClick={(e)=>handleSubmit(e)}>Edit User</button>
        </div>

    </form>
    <ToastContainer/>
        </div>
            </div>
            </Fragment>

    )
}
export default EditUser