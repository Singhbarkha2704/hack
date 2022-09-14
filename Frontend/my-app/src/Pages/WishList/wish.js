import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Userwish = () => {
    console.log("jhvbsvchjvc");
    const [wish, setWish] = useState([])
    // const [pro,setPro] = useState([]);
    let pro = [];
    const [dummy, setDummy] = useState('');
    let result = []
    const [lastfinal, setLastfinal] = useState([]);

    useEffect(() => {
        console.log("calling useffect");
        axios.get(`http://localhost:3005/api/wishlist/find/6320f42ef664c6baa7c70e95`).then((res) => setWish(res.data)).catch((err) => console.log(err));
        console.log(wish);
    }, [dummy])

    console.log(wish);
    let promises = [];
    let final = [];
    console.log(wish);
    useEffect(() => {
        if (wish.length > 0) {
            console.log(wish);
            wish.map((item) => {
                promises.push(axios.get(`http://localhost:3005/api/products/find/${item.productId}`).then(res => pro.push(res.data)).catch((err) => {
                    console.log(err);
                }));
            })
            Promise.all(promises).then(() => setLastfinal(pro));
        }


    }, [wish])
    // console.log();
    console.log(pro.length);

    console.log(lastfinal.length);




    const handleClear = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:3005/api/wishlist/clearall', { "userId": "6320f42ef664c6baa7c70e95" }).then((res) => console.log(res))
        console.log('inside clear')
        setDummy([])
        setLastfinal([])
       
    }

    return (
        <div className="wishlist-container">
            <h3 className="wish-header">Your favourites<img className="wish-topicon" src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/000000/external-wishlist-retail-anggara-filled-outline-anggara-putra.png" /> </h3>
            {lastfinal.length === 0 ? (
                <div className="wish-empty">
                    <h6 className="wish-para">Your wishlist is currently empty!!!</h6>
                    <img className="wishemp-img" src="https://img.icons8.com/external-doodle-color-bomsymbols-/91/000000/external-avatar-avatar-basic-colors-doodle-doodle-color-bomsymbols--4.png" alt=""/>
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
                    <div>
                        <div className="container">
                            {/* <div className="row>"> */}
                            {
                                lastfinal.map((wishItem) => (
                                    <div className="card-item">
                                        <div className="card-top" key={wishItem._id}>

                                            <img className="wish-img" src={wishItem.images} alt={wishItem.description} />
                                            <div className="card-bottom">
                                                <div className="card-info">
                                                    <h5 className="wish-title">{wishItem.title}</h5>
                                                    <p className="wish-price">${wishItem.price}</p>
                                                    <p className='wish-offer'>{wishItem.discountPercentage}% OFF</p>
                                                    <div>

                                                        <button className="wish-btn">Add to wishlist</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <button className="wish-clearbtn" onClick={(e) => handleClear(e)}>
                        Clear WishList
                    </button>
                </div>

            )}
        </div>
        // <div>Wishlist</div>
    );
};

export default Userwish;