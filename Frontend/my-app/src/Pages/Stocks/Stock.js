import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductFetch } from '../../Store/ProductSlice'
import { Link } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'
// import 'antd/dist/antd.css';
import Sidebar from '../admin/components/Sidebar/Sidebar'

const Stock = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.product)
  const { loading, items } = productList

  useEffect(() => {
    dispatch(ProductFetch())
  }, [dispatch])

  //Delete product
  //console.log(props)
  const deleteProduct = (id, name) => {

    if (window.confirm(`Are you sure, you want to delete Product: ${name}`)) {
      //console.log("clicked")
      axios.delete(`http://localhost:3005/api/products/${id}`)
        // axios.delete(`/product/delete/${match.params.id}`)
        .then(prod => {
          if (prod) {
            //console.log("product deleted");
            toast.success(`Product name: ${name} was deleted`);
            //window.alert(`product ID: ${id} were deleted`);

            //update product list after deleting product
            dispatch(ProductFetch());
          }

        })
        .catch(error => {
          console.log(error)
        });
    }

  }

  return (
    <>
      <div className="layout">
      <Sidebar />
      <div className="main__layout">

        <div className="content">
        </div>
      </div>
    </div>
    <h3 style={{textAlign:"center",marginTop: "40px"}}>Stock</h3>
      <div className='container' style={{marginLeft:"5%",marginRight:"5%"}} >
        <table className="table table-hover  table-striped table-bordered ml-4 " style={{ fontSize: "15px",fontFamily:"sans-serif" ,width:"100%"}}>
          <thead className="bg-dark " style={{color:"white"}}>
            <tr style={{ textAlign: "center" }}>
              <th>Category</th>
              <th>Title</th>
              <th>Stock</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              items && items.map((product, id) => (

                <tr key={id}>
                  <th scope="row" style={{textAlign:"center",justifyContent:"center"}}>{product.category}</th>
                  <td style={{padding:"15px"}}>{product.title}</td>
                  <td style={{textAlign:"center"}}>{product.stock}</td>
                  <td><Link to='/email-send'>  <i class="fa fa-envelope-o" aria-hidden="true" style={{ fontSize: "18px", marginLeft: "25px" }}></i> </Link></td>
                  {/* <td style={{ cursor: "pointer" }} onClick={() => deleteProduct(product._id, product.title)}><i class="fa fa-trash-o" style={{ fontSize: "18px", marginRight: "10px", color: "red" }} aria-hidden="true"></i></td> */}
                </tr>
              ))
            }

          </tbody>
        </table>


      </div>

    </>
  )
}

export default Stock