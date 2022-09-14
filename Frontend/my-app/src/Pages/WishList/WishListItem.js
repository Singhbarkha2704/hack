import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToWish,
    clearWish,
    removeFromWish,
} from "../../Store/WishListSlice"
import { Link } from "react-router-dom";
import { addToCart } from "../../Store/CartSlice";
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// import '../../Styles/Cart.css';
import "../../Styles/WishList.css"
const WishList = () => {
    const wish = useSelector((state) => state.wish);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [wish, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    
    const handleRemoveFromWish = (product) => {
        dispatch(removeFromWish(product));
    };
    const handleClearWish = () => {
        dispatch(clearWish());
    };
    return (
        <div className="wishlist-container">
            <h3 className="wish-header">Your favourites<img className="wish-topicon" src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/000000/external-wishlist-retail-anggara-filled-outline-anggara-putra.png" alt=""/> </h3>
            {wish.wishItems.length === 0 ? (
                <div className="wish-empty">
                    <h6 className="wish-para">Your wishlist is currently empty!!!</h6>
                    <img  className="wishemp-img" src="https://img.icons8.com/external-doodle-color-bomsymbols-/91/000000/external-avatar-avatar-basic-colors-doodle-doodle-color-bomsymbols--4.png" alt=""/>
                    <div className="add-favorates">
                        <Link to="/">
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
                    {/* <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div> */}
                    <div>
                        <div className="container">
                        {wish.wishItems &&
                            wish.wishItems.map((wishItem) => (
                                <div className="card-item">
                                <div className="card-top" key={wishItem.id}>
                                    
                                        <img className="wish-img" src={wishItem.images} alt={wishItem.description} />
                                        <div className="card-bottom">
                                            <div className="card-info">
                                            <h5 className="wish-title">{wishItem.title}</h5>
                                            <p className="wish-price">${wishItem.price}</p>
                                            <p className='wish-offer'>{wishItem.discountPercentage}% OFF</p>
                                            <div>
                                                <ClearIcon
                                                    className="wishremove-icon"
                                                    onClick={() => handleRemoveFromWish(wishItem)} />
                                                    
                                            <button className="wish-btn" onClick={() => handleAddToCart()}>Add to Cart</button>
                                        </div>
                                        </div>
                                        </div>
                                    </div> 
                               </div>
                            ))}
                    </div>
                    
                        </div>
                        <button className="wish-clearbtn" onClick={() => handleClearWish()}>
                            Clear WishList
                        </button>
                        </div>
                   
            )}
        </div>
    );
};

export default WishList;