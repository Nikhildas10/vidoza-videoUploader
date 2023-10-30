import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './header.css'

function Header() {
  return (
    <>
      <div className="mainNav">
        <Navbar className="navv">
          <Container className="ms-5 nav-class">
            <Navbar.Brand href="/" className="">
              <div className="nav">
                <img
                  alt=""
                  src="https://i.postimg.cc/c18HjxfF/pngwing-com-2.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                <h4 className="text-white">VIDOZA</h4>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header