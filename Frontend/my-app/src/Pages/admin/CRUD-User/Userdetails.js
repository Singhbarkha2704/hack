import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './../../../Pages/Navbar/Footer';
import { ProductFetch } from '../../../Store/ProductSlice';
import { Link } from 'react-router-dom'
import axios from "axios"
import { toast,ToastContainer } from 'react-toastify'


const UserDetails = () => {
  
  const [data,setData]=useState([])
  

  useEffect(() => {
    axios.get(`http://localhost:3005/api/users/`).then((res)=>setData((res.data))).catch((err)=>console.log(err))
  }, [])

  //Delete product
  //console.log(props)
  const deleteProduct = (id, name) => {

    if (window.confirm(`Are you sure, you want to delete Product: ${name}`)) {
      //console.log("clicked")
      axios.delete(`http://localhost:3005/api/users/${id}`)
        // axios.delete(`/product/delete/${match.params.id}`)
        .then(prod => {
          if (prod) {
            //console.log("product deleted");
            toast.success(`User name: ${name} was deleted`,window.location.reload());
            //window.alert(`product ID: ${id} were deleted`);

          }

        })
        .catch(error => {
          console.log(error)
        });
    }

  }

  return (
    <>
    <h3 style={{textAlign:"center",marginTop: "40px"}}>List of Users</h3>
      <div className='container' style={{marginLeft:"5%",marginRight:"5%"}} >
        
        <div className="btn_div_button" style={{ display: "flex", justifyContent: "right" }}>
          <Link to="/createUser" className="btn btn-default btn-primary"> + Create User</Link>
        </div>
        <table className="table table-hover  table-bordered ml-4 " style={{ fontSize: "15px",fontFamily:"sans-serif" ,width:"100%",background:"white"}}>
          <thead className="bg-dark " style={{color:"white"}}>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>UserName</th>
              <th>Email Address</th>
              <th>Phone no</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((user, id) => (

                <tr key={id}>
                  <th scope="row" style={{textAlign:"center"}}>{user._id}</th>
                  <td style={{textAlign:"center"}}>{user.username}</td>
                  <td style={{textAlign:"center"}}>{user.email}</td>
                  <td style={{textAlign:"center"}}>{user.phone}</td>
                  <td><Link to={`/edituser/${user._id}`}>  <i class="fa fa-edit" aria-hidden="true" style={{ fontSize: "18px", marginTop: "0px" }}></i> </Link></td>
                  <td style={{ cursor: "pointer" }} onClick={() => deleteProduct(user._id, user.username)}><i class="fa fa-trash-o" style={{ fontSize: "18px", marginRight: "20px", color: "red" }} aria-hidden="true"></i></td>
                </tr>
              ))
            }

          </tbody>
        </table>
        <ToastContainer/>

      </div>

    </>
  )
}

export default UserDetails