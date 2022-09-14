import React, { Fragment } from "react";
import "../../Styles/dashboard.css";
import Sidebar from "./components/Sidebar/Sidebar";
import SingleCard from "./components/reuseable/SingleCard";
import DecorStatsChart from "./charts/DecorStatsChart";
import RecommendDecorCard from "./components/UI/RecommendDecorCard";
import recommendDecors from "../../assets/dummy-data/recommendDecors";
import BargraphChart from "./charts/BargraphChart";
import '../../Styles/sidebar.css';
import '../../Styles/top-nav.css';


const decorObj = {
  title: "Total Products",
  totalNumber: 5750,
  icon: "ri-store-2-line",
};

const saleObj = {
  title: "Daily Sales",
  totalNumber: 697,
  icon: "ri-shopping-cart-2-line",
};

const supplierObj = {
  title: "Suppliers",
  totalNumber: "200",
  icon: "ri-user-line",
};

const totalObj = {
  title: "Total Sales",
  totalNumber: 2167,
  icon: "ri-creative-commons-nc-line",
};

const Dashboard = () => {
  return (
    <Fragment>
       <div className="layout">
        <Sidebar />
      <div className="main__layout">
        {/* <TopNav /> */}

        <div className="content">
        </div>
      </div>
    </div>
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={decorObj} />
          <SingleCard item={saleObj} />
          <SingleCard item={supplierObj} />
          <SingleCard item={totalObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">HomeDecor BarGraph Statistics</h3>
            <BargraphChart/>
          </div>

          <div className="stats">
            <h3 className="stats__title">HomeDecor Week Statistics</h3>
            <DecorStatsChart/>
          </div>
        </div>

        <div className="recommend__decor-wrapper">
          {recommendDecors.map((item) => (
            <RecommendDecorCard item={item} key={item.id} />
          ))}
        </div>
      </div>

      </div>
      </Fragment>
  );
};

export default Dashboard;
