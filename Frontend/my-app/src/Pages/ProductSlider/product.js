import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../Store/ProductSlice";
import { ProductFetch } from "../../Store/ProductSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductList from "./productList";
import { useEffect } from "react";
import { Dispatch } from "react";

import '../../Styles/product.css'
import { Helmet } from "react-helmet";
import NewArrivals from './../Category/NewArrivals';
import CategoryNavbar from "../Navbar/CategoryNavbar";

const Product = () => {
const items = useSelector(getAllProduct);
const {loading}=useSelector((state)=>state.product)
const dispatch = useDispatch();
    
    let renderSofa = ""
    let renderDecor = ""
    let renderDining = ""
    let renderGarden = ""
    let renderLighting = "";
    let renderNewArrivals = "";



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    const NewArrivals = items.filter((product) => product.category === 'New Arrivals');        
    const Decor = items.filter((product) => product.category === 'decor');
    const Dinning = items.filter((product) => product.category === 'dinning');
    const Garden = items.filter((product) => product.category === 'plant');
    const Light = items.filter((product) => product.category === 'lighting');
    const Sofa = items.filter((product) => product.category === 'SofaChairs');

    renderNewArrivals =
        items.length > 0 ? (
            NewArrivals.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );

    renderDecor =
        items.length > 0 ? (
            Decor.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );

    renderDining =
        items.length > 0 ? (
            Dinning.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );

    renderGarden =
        items.length > 0 ? (
            Garden.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );

    renderLighting =
        items.length > 0 ? (
            Light.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );
    
    renderSofa =
        items.length > 0 ? (
            Sofa.map((item, index) => (
                <ProductList key={index} data={item} />
            ))
        ) : (
            console.log("error")
        );

    return (
        <div>
            <CategoryNavbar/>
            <Helmet><title>Products</title></Helmet>
           { loading ? 
           <div class="d-flex align-items-center" style={{marginTop:"10%",marginLeft:"35rem"}}>
           <strong>Loading...</strong>
           <div class="spinner-border align-items-centre" style={{width:"30px",height:"30px"}} role="status" aria-hidden="true"></div>
          </div>:
            <div className="product-wrapper">
                <div className="product-list">
                    <h2>Our Products</h2>
                        <div className="product-container">
                             <h6>New Arrivals &nbsp;
                           <Link to='/new-arrivals'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                            </h6>
                             <Slider {...settings}>{renderNewArrivals}</Slider>
                        &nbsp;
                        <h6>Shop Sofa Set  &nbsp;
                           <Link to='/Sofachairs'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                        </h6>
                        <Slider {...settings}>{renderSofa}</Slider>
                        &nbsp;
                        <h6>Shop Decor Items  &nbsp;
                        <Link to='/Decor'> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                        </h6>
                        <Slider {...settings}>{renderDecor}</Slider>
                        &nbsp;
                        <h6>Shop Dinning Set  &nbsp;
                        <Link to='/Dinning'><svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                        </h6>
                        <Slider {...settings}>{renderDining}</Slider>
                        &nbsp;
                        <h6>Shop Planter  &nbsp;
                        <Link to='/Garden'><svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                        </h6>
                        <Slider {...settings}>{renderGarden}</Slider>
                        &nbsp;
                        <h6>Shop Wall Light  &nbsp;
                        <Link to='/Lighting'> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></Link>
                        </h6>
                        <Slider {...settings}>{renderLighting}</Slider>
                    </div>
                </div>
            </div>
}
        </div>
    );
}

export default Product;