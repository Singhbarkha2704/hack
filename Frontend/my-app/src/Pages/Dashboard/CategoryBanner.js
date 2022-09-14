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
              <img src={require("../../assets/images/diwali.jpg")} alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'#D45634 '}} href="/new-arrivals">New Arrivals</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="singlee-banner">
              <img src={require("./sofa.jpg")} alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'orange'}} href="/sofachairs">Sofa</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("./dinning.jpg")} alt="" />
              <div className="inner-text">
                <h4><a style={{textDecoration: 'none', color:'brown'}} href="/dinning">Dinning</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("./garden.jpg")} alt="garden" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'teal'}} href="/Garden">Garden</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src={require("../../assets/images/lights.jpg")} alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'red'}} href="/lighting">Lights</a> </h4>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="singlee-banner">
              <img src={require("../../assets/images/walldecor.jpg")} alt="" />
              <div className="inner-text">
              <h4><a style={{textDecoration: 'none', color:'#19355C'}} href="/decor">Decor</a> </h4>
              </div>
            </div>
          </Col>

          
        </Row>
      </Container>
    </div>
  )
}