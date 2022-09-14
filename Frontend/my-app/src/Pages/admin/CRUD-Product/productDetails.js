import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../../Pages/Navbar/Footer'
import { ProductFetch } from '../../../Store/ProductSlice'
import { Link } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'
// import 'antd/dist/antd.css';
import Sidebar from '../components/Sidebar/Sidebar'
import { TOKEN, userRequest } from "../../../requestMethods"
const ProductDetails = () => {          
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
      axios.delete(`http://localhost:3005/api/products/${id}`,  
        {
            headers: { token: `Bearer ${TOKEN}` }
        }
      )
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
        {/* <TopNav /> */}

        <div className="content">
        </div>
      </div>
    </div>
    <h3 style={{textAlign:"center",marginTop: "40px"}}>List of products</h3>
      <div className='container' style={{marginLeft:"5%",marginRight:"5%"}} >
        
        <div className="btn_div_button" style={{ display: "flex", justifyContent: "right" }}>
          <Link to="/create" className="btn btn-default btn-primary"> + Create product</Link>
        </div>
        <table className="table table-hover  table-bordered ml-4 " style={{ fontSize: "15px",fontFamily:"sans-serif" ,width:"100%",background:"white"}}>
          <thead className="bg-dark " style={{color:"white"}}>
            <tr style={{ textAlign: "center" }}>
              <th>Category</th>
              <th>Title</th>
              {/* <th>Description</th> */}
              <th>Price</th>
              <th>DiscountPercentage</th>
              <th>Stock</th>
              <th>Images</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              items && items.map((product, id) => (

                <tr key={id}>
                  <th scope="row" style={{textAlign:"center"}}>{product.category}</th>
                  <td style={{textAlign:"center"}}>{product.title}</td>
                  {/* <td style={{textAlign:"center"}}>{product.description}</td> */}
                  <td style={{textAlign:"center"}}>{product.price}</td>
                  <td style={{textAlign:"center"}}>{product.discountPercentage}</td>
                  <td style={{textAlign:"center"}}>{product.stock}</td>
                  <td style={{textAlign:"center"}}><img src={product.images} style={{width:"100px",height:"100px",borderRadius:"50%"}} alt=''></img></td>
                  <td><Link to={`/edit/${product._id}`}>  <i class="fa fa-edit" aria-hidden="true" style={{ fontSize: "18px", marginTop: "0px" }}></i> </Link></td>
                  <td style={{ cursor: "pointer" }} onClick={() => deleteProduct(product._id, product.title)}><i class="fa fa-trash-o" style={{ fontSize: "18px", marginRight: "10px", color: "red" }} aria-hidden="true"></i></td>
                </tr>
              ))
            }

          </tbody>
        </table>


      </div>

    </>
  )
}

export default ProductDetails