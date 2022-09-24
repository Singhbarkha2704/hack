import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductFetch } from '../../Store/ProductSlice';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { addToCart } from "../../Store/CartSlice";
import '../../Styles/product.css'
import { Link } from 'react-router-dom';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import { Helmet } from 'react-helmet';

const Sofachairs = () => {
    const { items } = useSelector((state) => state.product);
    const [value, setValue] = React.useState(4);
    

    const [data,setData]=useState([])
    const dispatch = useDispatch();
    // const protext=""
    const sortOptions = ['Title(A-Z)','Title(Z-A)', 'Price(low-high)','Price(high-low)','Discount(low-high)','Discount(high-low)','Rating(low-high)','Rating(high-low)']
    
    useEffect(() => {
        axios.get(`http://localhost:3005/api/products`)
        .then((res)=>{
          const DecorProducts= res.data.filter((product) => product.category === 'SofaChairs')
          setData(DecorProducts)
          console.log(data)
        })
        .catch((err)=>console.log(err))
        
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

    };

    const sortHandle=(e)=>{
             let value = e.target.value
            //  console.log(value)
            //  setSortValue(value)
            //  console.log(sortValue)
            if(value==='Price(low-high)')
            {
                const sorted=[...data].sort((a,b) =>Number(a.price)-Number(b.price))
                console.log('sorted data', sorted)
                setData(sorted)

            }
            if(value==='Price(high-low)')
            {
                const sorted=[...data].sort((a,b) =>Number(b.price)-Number(a.price))
                console.log('sorted data', sorted)
                setData(sorted)

            }
            if(value==='Rating(low-high)')
            {
                const sorted=[...data].sort((a,b) =>Number(a.rating)-Number(b.rating))
                console.log('sorted data', sorted)
                setData(sorted)

            }
            if(value==='Rating(high-low)')
            {
                const sorted=[...data].sort((a,b) =>Number(b.rating)-Number(a.rating))
                console.log('sorted data', sorted)
                setData(sorted)

            }
            if(value==='Title(A-Z)')
            {
                const sorted=[...data].sort((a,b)=>a.title.localeCompare(b.title))
                console.log('sorted data', sorted)
                setData(sorted)
            }
            if(value==='Title(Z-A)')
            {
                const sorted=[...data].sort((a,b)=>b.title.localeCompare(a.title))
                console.log('sorted data', sorted)
                setData(sorted)
            }
            if(value==='Discount(low-high)')
            {
                const sorted=[...data].sort((a,b) =>Number(a.discountPercentage)-Number(b.discountPercentage))
                console.log('sorted data', sorted)
                setData(sorted)
            }
            if(value==='Discount(high-low)')
            {
                const sorted=[...data].sort((a,b) =>Number(b.discountPercentage)-Number(a.discountPercentage))
                console.log('sorted data', sorted)
                setData(sorted)
            }
           
    }

    // const DecorProducts = items.filter((product) => product.category === 'decor');

    return (
        <div>
            <Helmet><title>Home Decor App-Sofa Sets</title></Helmet>
            <CategoryNavbar/>
            <h2 className='category'>Sofa Sets</h2>
            <div style={{marginLeft:"78%",marginTop:"2%"}}>
                {/* <label style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold",textAlign:"center"}}>Sorting: */}
                <select  onChange={(e)=>sortHandle(e)} style={{borderRadius:"5px",padding:"5%",fontFamily:"sans-serif"}} >
                {
                    sortOptions.map((item)=>(
                        <option value={item.price}>{item}</option>
                    ))
                }
                
                </select>
                {/* </label> */}
            </div>         
            <div className='container'>
            {
                data.map((item) => (
                    <div className="card-item">
                        <div className="card-inner">
                            <div className="card-top">
                                <Link to={`/SingleProduct/${item._id}`} style={{textDecoration:"none",color:"black"}}>

                                    <img className="card-img" src={item.images} />
                                </Link>    
                                <button onClick={() => handleAddToCart(item, window.location.reload())} className="cart-btn">
                                        <svg className="cart-button" xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg></button>
                            </div>
                            <div className="card-bottom">
                                <div className="card-info">
                                    <p className="title">{item.title}</p>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend"></Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                             }}  />
                                    </Box>
                                    {/* <p className='fieldsets'>{data.rating} ★</p> */}
                                    <p className="price">₹{item.price}</p>
                                    <p className='offer'>{item.discountPercentage}% OFF</p>
                                    {/* <p>{data.rating} ★</p> */}
                                </div>
                             </div>
                        </div>
                    </div>

                 ))
                    }
            </div>
        </div>
        
    )
}

export default Sofachairs