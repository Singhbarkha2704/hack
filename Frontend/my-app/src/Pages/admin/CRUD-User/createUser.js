import axios from "axios"
import { Fragment, useState } from "react"
import { useParams} from "react-router-dom"
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../../../Styles/CreateProduct.css";
import { TOKEN, userRequest } from "../../../requestMethods"
import Sidebar from "../components/Sidebar/Sidebar";

function CreateUser(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [password, setPassword] = useState('')
    const { _id } = useParams('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3005/api/auth/register`, { username, email, password, phone }, {
            headers: { token: `Bearer ${TOKEN}` }
        })
            .then(function (response) {
                console.log(response);
                toast.success(`User: ${username}, Added`);
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
            <div className="form-title">Users</div>
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
                <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                </div>
                <button className="add-btn1" onClick={(e)=>handleSubmit(e)}>Add User</button>
            </div>

        </form>
        <ToastContainer/>
            </div>
            </div>
            </Fragment>
    )
}

export default CreateUser