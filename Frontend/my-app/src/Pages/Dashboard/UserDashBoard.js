import React, { Fragment } from "react";
import "./UserDashBoard.css"
import dash1 from "./dash1.jpg"
import dash2 from "./dash2.gif"
import dash3 from "./dash3.gif"
import { Carousel } from "react-bootstrap";
import CategoryBanner from "./CategoryBanner";
import Benefits from "./Benefts";
import Advertisement from "./Advertisement";
import VideoAd from "./VideoAd";

function UserDashBoard(props) {
  return (
    <Fragment>
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
              backgroundImage: `url(${dash3})`,
              marginTop:0
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
            backgroundImage: `url(${dash1})`,
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
    <Advertisement/>
        <VideoAd/>
      </div>
      </Fragment>
  );
}

export default UserDashBoard;
  