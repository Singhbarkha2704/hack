import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../../Styles/product.css';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToCart } from '../../Store/CartSlice';
import '../../Styles/SingleProduct.css';

const SingleProduct = () => {
    const { _id } = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3005/api/products/find/${_id}`).then((res) => setData(res.data)).catch((err) => console.log(err))
        console.log(`data:`, data)
    }, [])

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

    };

    return (
        <div>
            <div class="single-product-card">
                <div class="single-image-container">
                    <div class="single-cover-image product-image">
                        <img src={data.images} alt="" />
                    </div>
                </div>
                <div class=" single-product-info">
                    <h3 class="single-product-name">{data.title}</h3>
                    <p class="single-price">{data.price}</p>
                    <p>{data.description}</p>
                    <div class="single-stock">
                        <div class="single-stock-status"></div>
                        <p class="single-stock-info">Available:{data.stock}</p>
                    </div>
                    <div class="single-buttons">
                    <button  onClick={() => handleAddToCart(data, window.location.reload())} className="single-button">Add to Cart</button>
                    <button onClick={() => handleAddToCart(data, window.location.reload())} className="single-button">Add to Wishlist</button>
                    </div>
                </div>
            </div>


        </div>



    );
}

export default SingleProduct;