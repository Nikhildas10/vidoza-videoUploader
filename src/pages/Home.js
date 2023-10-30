import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Add from "../components/Add";
import ViewVideo from "../components/ViewVideo";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  //state lifting
  const[refresh,setRefresh]=useState({})
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container className="heading">
        <h1>Upload. Share. Enjoyy!</h1>
        <Link to={"/history"} style={{ textDecoration: "none" }}>
          <a className="watchHistory">
            View watch history <i class="fa-solid  fa-bookmark"></i>
          </a>
        </Link>
        <div className=""></div>
      </Container>
      <div className="mainHome">
        <Container>
          <div className="mt-3 cate">
            <Add refresh={setRefresh}></Add>
          </div>
          <Row className="mt-4 gx-3">
            <Col className="mainCardVideo">
              <ViewVideo refresh2={refresh}></ViewVideo>
            </Col>
            <Col lg={3}>
              <Category></Category>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
