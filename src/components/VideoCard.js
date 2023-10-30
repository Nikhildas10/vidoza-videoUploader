import React from 'react'
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './view.css'
import uniqid from "uniqid";
import { Trash } from 'react-feather';
import { deleteVideo, watchHist } from '../services/allRequest';
import { format } from 'date-fns';

function VideoCard({ video, deleteCard }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =async () => {setShow(true)
//id
let id=uniqid()
//name
let videoName = video.caption
//url
let url = video.video_url
//date
let date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
const body={id,videoName,url,date}
const result=await watchHist(body)
console.log(result);
}
  const deleteVideos = async (id) => {
    const deleteResult = await deleteVideo(id);
    if(deleteResult.status>=200&&deleteResult.status<300){
      deleteCard(deleteResult.data);
    }
  };

  const dragstart=(e,id)=>{
    e.dataTransfer.setData("cardId",id)
  }
  return (
    <>
      <div>
        <div className="cardd mb-3">
          <div className="singCard">
            <Card
              draggable
              onDragStart={(e) => dragstart(e, video.id)}
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ cursor: "pointer" }}
                onClick={handleShow}
                variant="top"
                src={`${video.cover_image}`}
              />
              <Card.Body className="cardBody">
                <Card.Title className="text-center  cardText ">
                  {video.caption.length > 58
                    ? video.caption.slice(0, 53) + "..."
                    : video.caption}{" "}
                  <i
                    class="fa-solid fa-trash  "
                    onClick={() => {
                      deleteVideos(video.id);
                    }}
                  ></i>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="">{video.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
              <iframe
                width="100%"
                height="300"
                src={`${video.video_url}`}
                title={`${video.caption}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Modal.Body>
            <Modal.Footer className="modalFooter">
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default VideoCard