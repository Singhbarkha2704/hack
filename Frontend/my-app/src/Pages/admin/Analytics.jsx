import React, { Fragment } from "react";
import luxury from "../../assets/images/luxury.jpg";
import Sidebar from "./components/Sidebar/Sidebar";
import TopNav from "./components/TopNav/TopNav";
import "../../Styles/analytics.css";
import TrackingChart from "./charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import '../../Styles/sidebar.css';
import '../../Styles/top-nav.css';

const Analytics = () => {
  const percentage = 95;
  const percentage02 = 45;
  return (
    <Fragment>
      <div className="layout">
      <Sidebar />
      <div className="main__layout">

        <div className="content">
        </div>
      </div>
    </div>
    <div className="analytics">
      <div className="analytics-wrapper">
        <h2 className="analytics-title">Analytics of HomeDecors</h2>
        <div className="analytics-top">
          <div className="analytics-img">
            <h2>2022 Best Luxury Sofa</h2>
            <img src={luxury} alt=""  className="luxury"/>
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="pro__wrapper">
          <div className="pro__top">
            <h2 className="analytics-title">Suppliers</h2>

            <div className="filter__widget-01">
              <select>
                <option value="sofa">Sofa</option>
                <option value="dinning">Dinning</option>
                <option value="garden">Garden</option>
              </select>
            </div>
          </div>

          <div className="pro__list">
            <div className="pro__item">
              <div className="box__01">
                <h3 className="supplier__name">Karan Kundra</h3>
                <h6 className="supdet">
                Supplier <span>Manufacturer</span>
                </h6>

                <h6 className="prodet">Sofa-Products</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="pricedet">
                  <i class="ri-chat-download-line"></i>
                </span>
                <h6 className="prod__amount">₹ 4,00,000</h6>
                <p className="prod__title">Cost Price</p>
              </div>

              <div className="box__04">
                <span className="pricedet">
                  <i class="ri-chat-upload-line"></i>
                </span>
                <h6 className="prod__amount">₹ 5,00,000</h6>
                <p className="prod__title">Market Sold Price</p>
              </div>

              <div className="box__05">
                <span className="pricedet">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="prod__amount">₹ 1,00,000</h6>
                <p className="prod__title">Profit</p>
              </div>
            </div>
            <div className="pro__list">
            <div className="pro__item">
              <div className="box__01">
                <h3 className="supplier__name">Rishabh Kundra</h3>
                <h6 className="supdet">
                Supplier <span>Manufacturer</span>
                </h6>

                <h6 className="prodet">Dinning-Products</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="pricedet">
                  <i class="ri-chat-download-line"></i>
                </span>
                <h6 className="prod__amount">₹ 1,00,000</h6>
                <p className="prod__title">Cost Price</p>
              </div>

              <div className="box__04">
                <span className="pricedet">
                  <i class="ri-chat-upload-line"></i>
                </span>
                <h6 className="prod__amount">₹ 1,20,000</h6>
                <p className="prod__title">Market Sold Price</p>
              </div>

              <div className="box__05">
                <span className="pricedet">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="prod__amount">₹ 20,000</h6>
                <p className="prod__title">Profit</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    
  );
};

export default Analytics;
