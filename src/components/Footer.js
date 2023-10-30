import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <div className="mainFoot">
      <Container>
        <Row className="foot">
          <Col>
            <img
              className="footer-image"
              src="https://i.postimg.cc/c18HjxfF/pngwing-com-2.png"
              alt=""
            />
            <p>abcd@gmail.com</p>
            <div className="footLogo">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </Col>
          <Col>
            <p className="text-white">About company </p>
            <p>
              {" "}
              vidoza is a leading online platform that specializes in video
              uploading, sharing, and streaming services.
            </p>
          </Col>
          <Col>
            <p className="text-white">FAQ </p>

            <p>
              Need Help? Visit our [FAQs] section for answers to common
              questions about uploading and managing videos.
            </p>
          </Col>
          <Col>
            <div className="form-group">
              <p className="text-center">
                Don’t miss to subscribe to our new feeds.
              </p>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="text-center mt-3 mb-3">
              <button className="footButton">Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="text-center">
        <p className="copyright">All rights reserved © NIKHIL</p>
      </Row>
    </div>
  );
}

export default Footer;
