import React from 'react'
import './landing.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div>
      <div class="full-page-div">
        <Container>
          <div class="text-content ms-5 mt-5 hero">
            <h1>
              <span>vidoza</span> - video uploader
            </h1>
            <p className="w-75">
              "Welcome to vidoza: Where Your Stories Take Flight! Dive into a
              world of limitless possibilities, where your videos find a home
              and your stories come to life. Upload your creativity, share your
              moments, and watch your content shine. With seamless
              uploading.Join us, and let your videos spark a global conversation
              today.
            </p>
            <Link to={"/home"}>
              {" "}
              <button>Get started →</button>
            </Link>
          </div>
        </Container>
        <div class="image-content">
          <img
            className="hero-img"
            src="https://i.postimg.cc/KjJ90P2X/wangsina-333-03-2022-41.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-center text-white mt-3 mb-5">FEATURES</h1>
      <div className="d-flex justify-content-center gap-5 cardMain">
        <Row className="mb-5">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/Y9nfrxkx/fbd636d695a9c16d1a24cb850241f943.gif"
              />
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Managing Video
                </Card.Title>
                <Card.Text className="cardText">
                  Easily upload, edit, and organize your video content with our
                  intuitive interface. From uploading new videos to updating
                  existing ones, you have complete control.
                </Card.Text>
                <Link to={"/home"}>
                  <div className="text-center">
                    <Button variant="primary">Get starded</Button>
                  </div>{" "}
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="card2"
                variant="top"
                src="https://i.postimg.cc/y8G6MR1z/ba8c5e76bab76e9f4e4a781f62cdefda.gif"
              />
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Categorize Videos
                </Card.Title>
                <Card.Text className="cardText">
                  Sort videos seamlessly into categories like music, tutorials,
                  or entertainment for viewers to quickly find their favorite
                  content. <br />
                  <br />{" "}
                </Card.Text>
                <Link to={"/home"}>
                  <div className="text-center">
                    <Button variant="primary">Get starded</Button>
                  </div>{" "}
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="Card3"
                variant="top"
                src="https://i.postimg.cc/KY5L7Q75/video-player-4967507-4682275.gif"
              />
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Watch History
                </Card.Title>
                <Card.Text className="cardText">
                  Effortlessly track viewing history. Our platform remembers
                  watched videos, allowing seamless resuming and rediscovery of
                  favorite content
                </Card.Text>
                <Link to={"/home"}>
                  <div className="text-center">
                    <Button variant="primary">Get starded</Button>
                  </div>{" "}
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Landing