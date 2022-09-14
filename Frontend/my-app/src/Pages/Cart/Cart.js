import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseCart, decreaseCart, clearCart, cartTotal,getCompleteCart, getCart} from "../../Store/CartSlice";
import { Link } from "react-router-dom";
import '../../Styles/Cart.css';
import axios from "axios";
import {publicRequest, TOKEN} from "../../requestMethods";
import jwt_decode from "jwt-decode";

const Cart = () => {
    const cart = useSelector(getCart);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const [stock, setStock] = useState('Instock');
    const [mystyle, setMystyle] = useState({ textColor: "green", fontSize: "15px" });
    let subtotal = useSelector(getCompleteCart);
    subtotal = subtotal.cartTotalAmount;
    console.log(subtotal);
    const [subtotalamount,setSubtotalamount] = useState(subtotal); 
    const dispatch = useDispatch();
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const state = useSelector((state)=>state.cart);
    let key = 0;

    useEffect(() => {
        dispatch(cartTotal());
    }, [subtotal]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
     const toggle=(()=>{
        if(cart.stock>10)
        {
            setStock('instock')
            setMystyle({textColor:"red"})
        }
        else{
            setStock('Instock')
            setMystyle({background:"green"})
        }
     })
     const handleCoupon=()=>{
        alert("Congrats! Discount Coupon is applied 👏")
         console.log(subtotalamount);
         if(key==0){
            setSubtotalamount(subtotalamount -(0.25)*subtotalamount);
            key = 1;
         }
       
       
        console.log(subtotalamount);
        // console.log(setCartTotalAmount)
    }
     const handcheckout=()=>{
//         let arr = [];
        console.log(cart);
        console.log(TOKEN);
        var decoded = jwt_decode(TOKEN);
console.log(decoded);
let email = decoded.email;
console.log("!23");

publicRequest.post('sales/record',{email,cart}).then((res)=>console.log(res)).catch(res=>console.log("error"));
   
        // var decode1 = jwt.decode(TOKEN);
        // console.log(decode1);
        // axios.post()
        handleClearCart();
        alert("congrats!! Order is placed successfully")
     }
    
    return (
        <div className="carting-container">
            <h2>Shopping Cart ({cartTotalQuantity} items)</h2>
            {cart.length === 0 ? (
                <div className="carting-empty">
                    <p>Your cart is currently empty</p>
                    <div className="carting-start-shopping">
                        <Link to="/product">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="carting-titles">
                        <h3 className="carting-product-title">Product</h3>
                        <h3 className="carting-price">Price</h3>
                        <h3 className="carting-quantity">Quantity</h3>
                        <h3 className="carting-total">Total</h3>
                    </div>
                    <div className="carting-items">
                        {cart &&
                            cart.map((cartItem) => (
                                <div className="carting-item" key={cartItem.id}>
                                    <div className="carting-product">
                                        <img src={cartItem.images} alt={cartItem.title} />
                                        <div>
                                            <h3>{cartItem.title}</h3>
                                            <p>{cartItem.description}</p>
                                            <p>
                                           <span>Available :</span>
                                           {cartItem.stock> 0 ?'In stock':'Out of stock'}
                                           </p>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="carting-product-price">₹{cartItem.price}</div>
                                    <div className="carting-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>
                                            -
                                        </button>
                                        <div className="carting-count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                    </div>
                                    <div className="carting-product-total-price">
                                    ₹{cartItem.price * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="carting-summary">
                        <button className="carting-clear-btn" onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                        <div className="carting-checkout">
                            <div className="carting-subtotal">
                                <span>Subtotal</span>
                                <span className="carting-amount">₹{subtotalamount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                                <button onClick={() => handcheckout()}>Check out</button>
                                
                            <div>
                                <button onClick={()=>handleCoupon()}>Apply discount</button>
                            </div>    
                            
                            <div className="carting-continue-shopping">
                                <Link to="/product">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;