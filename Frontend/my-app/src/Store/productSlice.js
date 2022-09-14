import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValue={
items:[],
loading:true
}

export const ProductFetch=createAsyncThunk('product/ProductFetch',async(term)=>{
    try{
        const result= await axios.get(`http://localhost:3005/api/products?q=${term}`)
        return result.data
    }
    catch(err)
    {
        console.log(err)
    }
}
)

const productSlice=createSlice({
    name:"product",
    initialState:initialValue,
    reducers:{

    },
    extraReducers:{
        [ProductFetch.pending]:(state,action)=>{
            console.log("pending",action) //checks
            state.loading=true
        },
        [ProductFetch.fulfilled]:(state,action)=>{
            state.loading=false
            state.items=action.payload
        },
        [ProductFetch.rejected]:(state,action)=>{
            console.log("fulfilled",action)
            state.loading=false
        }
    }
})
export const getAllProduct = (state) => state.product.items;
export default productSlice.reducer