import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] ,
    cartTotalQuantity : 0,
    cartTotalAmount : 0,
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id);
            if (tempIndex >=0) {
                state.cartItems[tempIndex].cartQuantity +=1;
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity : 1}
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart (state, action) {
            const nextCart = state.cartItems.filter( (item) => {
                return item.id !== action.payload.id;
            });
            state.cartItems = nextCart;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decreaseCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id );
            if ( state.cartItems[tempIndex].cartQuantity >1) {
                state.cartItems[tempIndex].cartQuantity -=1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
            else if(state.cartItems[tempIndex].cartQuantity === 1) {
                const tempProduct = state.cartItems.filter( (item) => item._id !== action.payload._id );
                state.cartItems = tempProduct;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        increaseCart (state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item._id === action.payload._id );
            state.cartItems[tempIndex].cartQuantity +=1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        clearCart (state, action) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        cartTotal (state) {
            let totalQ = 0;
            let totalA = 0;
            const temp = state.cartItems.map( (items, act) => {
                const { cartQuantity, price } = items;
                const totalAmount = price * cartQuantity;
                totalA += totalAmount;
                totalQ += items.cartQuantity;
                const temp = {
                    totalA,
                    totalQ
                }
                return temp;
            })
            state.cartTotalAmount = temp.length > 0 ? temp[temp.length-1].totalA ? temp[temp.length-1].totalA : 0 : 0;
            state.cartTotalQuantity = temp.length > 0 ? temp[temp.length-1].totalQ ? temp[temp.length-1].totalQ : 0 : 0;
        }
    }
});
export const { addToCart, removeFromCart, increaseCart, decreaseCart, clearCart, cartTotal } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cartItems;
export const getCompleteCart = (state) => state.cart;

