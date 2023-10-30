import React, { useEffect, useState } from "react";
import "../components/view.css";
import { Card, Container } from "react-bootstrap";
import { delCat, getCat, getSingle } from "../services/allRequest";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/view.css";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";

function Singcat() {
  const [fetchCat, setData] = useState([]);
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  const getCategory = async () => {
    const result = await getCat();
    setData(result.data);
  };

  console.log(fetchCat);
const[sing,setSing]=useState([])

  useEffect(() => {
    getCategory();
  }, []);

  const fetchSing=async(id)=>{
  const result= await getSingle(id)
  setSing(result.data);
  setShow(true);
  }

const deleteVideos = async (categoryId, videoId) => {
   toast.success("Successfully deleted!", {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: true,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
   });
  try {
    const response = await delCat(categoryId, videoId);
    
    console.log("API Response:", response); // Log API response
    if (response.status >= 200 && response.status < 300) {
       
      setData((prevState) => {
        console.log("Previous State:", prevState); // Log previous state
        const updatedCategories = prevState.map((category) => {
          if (category.id === categoryId) {
            const updatedVideos = category.videos.filter(
              (video) => video.id !== videoId
            );
            return { ...category, videos: updatedVideos };
          }else{
            
            return category
      }});
        console.log("Updated Categories:", updatedCategories); // Log updated state
        return updatedCategories;
      });
    } else {
      console.error("Failed to delete video");
    }
  } catch (error) {
    console.error("Error deleting video:", error);
  }
};


  return (
    <>
      <Container>
        <div className="mainSingCat">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "800",
              marginBottom: "35px",
            }}
          >
            CATEGORIES
          </h1>
          <div className="apiCard mb-5">
            {fetchCat?.length > 0 ? (
              fetchCat?.map((category) => (
                <div key={category.id}>
                  <h4 className="mt-3 mb-3 text-uppercase">{category?.name}</h4>
                  <hr />
                  <div className="mainCategory mb-3 ">
                    {category.videos?.length > 0 ? (
                      category.videos?.map((video) => (
                        <div>
                          <Card  style={{ width: "18rem" }}>
                            <Card.Img
                              onClick={() => fetchSing(video.id)}
                              style={{ cursor: "pointer" }}
                              // onClick={handleShow}
                              variant="top"
                              src={`${video.cover_image}`}
                            />
                            <Card.Body className="cardBody">
                              <Card.Title className="text-center cardText ">
                                {video.caption}
                                <i
                                  class="fa-solid fa-trash  "
                                  onClick={() => {
                                    deleteVideos(category.id,video.id);
                                    
                                  }}
                                ></i>
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </div>
                      ))
                    ) : (
                      <p>No videos found in this category</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <h5>No categories found</h5>
            )}
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{sing.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="100%"
                height="300"
                src={`${sing.video_url}`}
                title={`${sing.caption}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
       <Link to={"/home"}>
          <div className="text-center mt-4 mb-5">
            <button className="backBtn">Go Back</button>
          </div>
       </Link>
      </Container>
    </>
  );
}

export default Singcat;
