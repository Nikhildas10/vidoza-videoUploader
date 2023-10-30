import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./view.css";
import uniqid from "uniqid";
import { addVideos } from "../services/allRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({refresh}) {
  //state to store input data from form
  const [input, setInput] = useState({
    id: "",
    caption: "",
    cover_image: "",
    video_url: "",
  });

  const inputData = (e) => {
    let { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  const extractUrl = (e) => {
    let videoUrl = e.target.value;
    if(videoUrl.includes("v=")){
       if(videoUrl.includes("v=")){
      let index=videoUrl.indexOf("v=")
     let mainUrl=videoUrl.slice(index+2,index+13)
        const finalurl = `https://www.youtube.com/embed/${mainUrl}?autoplay=1&cc_load_policy=1.`;
setInput({...input,["video_url"]:finalurl})}
  };
  }
  const addVideo= async () => {
    let id = uniqid();
    setInput({ ...input, ["id"]: id });

    const { caption, cover_image, video_url } = input;
    if (caption == "" || (cover_image == "") | (video_url == "")) {
      toast.warn("All fields are necessary!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const result = await addVideos(input);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        refresh(result.data)
        toast.success("Successfully added!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShow(false);
      }
    }
  }
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="upload" onClick={handleShow}>
        <img src="https://i.postimg.cc/50xSt9G5/upload.png" alt="" />
        {"Upload Video "}
        {/* <h9>
          {" "}
          <i class="fa-solid fa-upload text-info"></i>upload video
        </h9> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className="border border-2">
          <Modal.Header closeButton>
            <Modal.Title className="text-white">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  name="caption"
                  onChange={(e) => inputData(e)}
                  className="inputSpace"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  name="cover_image"
                  onChange={(e) => inputData(e)}
                  className="inputSpace"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Video URL</Form.Label>
                <Form.Control
                  name="video_url"
                  onChange={(e) => extractUrl(e)}
                  className="inputSpace"
                  placeholder=""
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addVideo}>
              Add
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Add;
