import React, { Fragment } from "react";
import "./UserDashBoard.css"
import dash1 from "../../assets/images/gradient-mobile-isometric-technology-background_52683-4499.jpg"
import dash2 from "../../assets/images/super-sale-phone-banner-mobile-clearance-sale-discount-poster-smartphone-sale-marketing-special-offer-promotion_433751-53.jpg"
import dash3 from "../../assets/images/2805145.jpg"
import { Carousel } from "react-bootstrap";
import CategoryBanner from "./CategoryBanner";
import Benefits from "./Benefts";
import VideoAd from "./VideoAd";
import { Helmet } from 'react-helmet';

function UserDashBoard() {
  return (
    <Fragment>
      <Helmet><title>Mobile Store App</title></Helmet>
      <div className="custom-carousel">
        <Carousel className="custom-carousel"
          style={{
            marginTop:0,
            padding:0,
          }}>
        <Carousel.Item className="custom-carousel first-car">
          <div
            className="d-block w-100 main_slider"
            style={{
              backgroundImage: `url(${dash1})`,
              // marginTop:0
            }}
          >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <div className="red_button shop_now_button">
                    <a href="/product">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
          
      <Carousel.Item>
        <div
          className="d-block w-100 main_slider"
          style={{
            backgroundImage: `url(${dash3})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <div className="red_button shop_now_button">
                    <a href="/product">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 main_slider"
          style={{
            backgroundImage: `url(${dash2})`,
          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                  <div className="red_button shop_now_button">
                    <a href="/product">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    <CategoryBanner/>
    <Benefits/>
        <VideoAd/>
      </div>
      </Fragment>
  );
}

export default UserDashBoard;
