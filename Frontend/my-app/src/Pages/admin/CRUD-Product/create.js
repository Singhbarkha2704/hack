import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ProductFetch } from "../../../Store/ProductSlice"
import "../../../Styles/CreateProduct.css"

function CreateProduct(){

    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [price,setPrice]=useState(0)
    const [rating,setRating]=useState(0)
    const [stock,setStock]=useState(0)
    const [discountPercentage,setDiscountpercentage]=useState(0)
    const [images,setImages]=useState("")
    const {_id}=useParams('')
    const dispatch=useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:3005/api/products/`)
            .then((prod) => {
                //console.log(prod.data.product);
                if (prod) {
                    setTitle(prod.data.title)
                    setDescription(prod.data.description)
                    setCategory(prod.data.category)
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
        axios.post(`http://localhost:3005/api/products/`,{title,description,images,category,price,discountPercentage,rating,stock})
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
        <div className="add-body">
            <div className="add-container">
            <div className="form-title">Products</div>
        <form>
            <div className="user-details">
                <div className="input-box">
                <span className="details">Category</span>
                <input type="text" placeholder="Enter product name" value={category} onChange={(e)=>setCategory(e.target.value)} required></input>
                {console.log(category)}
                </div>
                <div className="input-box">
                <span className="details">Product Title</span>
                <input type="text" placeholder="Enter category" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Description</span>
                <input type="text" placeholder="Enter Price" value={description} onChange={(e)=>setDescription(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Price</span>
                <input type="text" placeholder="Enter decription" value={price} onChange={(e)=>setPrice(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Discount</span>
                <input type="text" placeholder="Enter rating" value={discountPercentage} onChange={(e)=>setDiscountpercentage(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Rating</span>
                <input type="text" placeholder="Enter offer price"   value={rating} onChange={(e)=>setRating(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Stock</span>
                <input type="text" placeholder="Enter stock"  value={stock} onChange={(e)=>setStock(e.target.value)} required></input>
                </div>
                <div className="input-box">
                <span className="details">Images</span>
                <input type="url" placeholder="Upload Image"  value={images} onChange={(e)=>setImages(e.target.value)} required></input>
                </div>
                {/* <div className="edit-button">
                    <button className="edit-btn1">Add Product</button>
                </div> */}
                <button className="add-btn1" onClick={(e)=>handleSubmit(e)}>Add Product</button>
            </div>

        </form>
        <ToastContainer/>
            </div>
        </div>
    )
}

export default CreateProduct