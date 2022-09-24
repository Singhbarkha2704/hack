import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./CategoryBanner.css"
export default function CategoryBanner() {
  return (
    <div className="banner-section">
      <Container fluid>
        <Row>
          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://pbblogassets.s3.amazonaws.com/uploads/2022/01/04092901/iphone_13_cover.jpg" alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'#D45634 '}} href="/new-arrivals">New Arrivals</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://webneel.com/daily/sites/default/files/images/daily/12-2020/smartphone-photography-samsung-pre-booking-banner.jpg" alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'orange'}} href="/sofachairs">Samsung</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled2715.jpg" alt="" />
              <div className="inner-text">
                <h4><a style={{textDecoration: 'none', color:'brown'}} href="/dinning">MI</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKtUQ2F2WGeRLIYTj5uMqu9alForvldxFtQ&usqp=CAU" alt="garden" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'teal'}} href="/Garden">Oppo</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/v4/about-us/milestones/banner01_new.png" alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'red'}} href="/lighting">Huawei</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src="https://www.androidauthority.com/wp-content/uploads/2021/03/OnePlus-9-Pro-vs-OnePlus-9-spooning.jpg" alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'#19355C'}} href="/decor">OnePlus</a> </h4>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}