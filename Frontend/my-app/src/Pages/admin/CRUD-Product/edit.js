import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ProductFetch } from "../../../Store/ProductSlice";
import "../../../Styles/Editproduct.css"

function EditProduct(){

    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [rating,setRating]=useState('')
    const [stock,setStock]=useState('')
    const [discountPercentage,setDiscountpercentage]=useState(0)
    const [images,setImages]=useState("")
    const {_id}=useParams('')
const dispatch=useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:3005/api/products/find/${_id}`)
            .then((prod) => {
                //console.log(prod.data.product);
                if (prod) {
                    setTitle(prod.data.title)
                    setPrice(prod.data.price)
                    setRating(prod.data.rating)
                    setStock(prod.data.stock);
                    setDiscountpercentage(prod.data.discountPercentage);
                    setImages(prod.data.images);
                    dispatch(ProductFetch());
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/api/products/${_id}`,{title,price,rating,discountPercentage,stock,images})
            .then(function (response) {
                console.log(response);
                toast.success(`Product: ${title}, updated`);
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message);
            });
    }
    return(
        <div className="edit-body">
            <div className="edit-container">
            <div className="form-title">Edit Form</div>
        <form>
            <div className="user-details">
                <div className="input-box">
                <span className="details">Product Name</span>
                <input type="text" placeholder="Enter product name" required value={title} onChange={(e)=>setTitle(e.target.value)} ></input>
                </div>
                <div className="input-box">
                <span className="details">Price</span>
                <input type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Rating</span>
                <input type="text" placeholder="Enter rating" value={rating} onChange={(e)=>setRating(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Discount</span>
                <input type="text" placeholder="Enter offer price" value={discountPercentage} onChange={(e)=>setDiscountpercentage(e.target.value)}  required></input>
                </div>
                <div className="input-box">
                <span className="details">stock</span>
                <input type="text" placeholder="Enter stock" value={stock} onChange={(e)=>setStock(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Images</span>
                <input type="url" placeholder="Upload Image" value={images} onChange={(e)=>setImages(e.target.value)} required></input>
                </div>
                {/* <div className="edit-button">
                    <button className="edit-btn1">Add Product</button>
                </div> */}
                <button className="edit-btn1"  onClick={(e)=>handleSubmit(e)}>Update Product</button>
            </div>

        </form>
            <ToastContainer/>
            </div>
        </div>

    )
}
export default EditProduct