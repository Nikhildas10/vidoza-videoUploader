import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  addCategory,
  delCategory,
  getCategory,
  getSingle,
  updateCat,
} from "../services/allRequest";
import Accordion from "react-bootstrap/Accordion";
import uniqid from "uniqid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Trash } from "react-feather";
import "../components/view.css";
import { Link } from "react-router-dom";


function Category() {
  const [activeKey, setActiveKey] = useState("0");

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey);
  };
  const [finalCat, setFinalCat] = useState([]);
  const [show, setShow] = useState(false);
  const [AllCat, setCat] = useState({
    id: "",
    name: "",
    videos: [],
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //catgeory
  const getCategoryName = (e) => {
    const { name, value } = e.target;
    setCat({ ...AllCat, [name]: value });
  };

  const getId = async () => {
    const id = uniqid();
    setCat({ ...AllCat, ["id"]: id });
    const { name } = AllCat;
    if (name == "") {
      toast.warn("input caption", {
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
      const result = await addCategory(AllCat);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Category added", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        fetchCategory();
      }
      setShow(false);
    }
  };

  const fetchCategory = async () => {
    const result = await getCategory();
    setFinalCat(result.data);
  };
  // console.log(finalCat);
  useEffect(() => {
    fetchCategory();
  }, []);

  const catDelete = async (id) => {
    const result = await delCategory(id);
    if (result.status >= 200 && result.status < 300) {
      fetchCategory();
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
    console.log("hover");
  };
  const dropOn = async (e, id) => {
    console.log(id);
    const videoId = e.dataTransfer.getData("cardId");
    // console.log(videoId);
    const data = await getSingle(videoId);
    console.log(data.data);

    const selectedCategory = finalCat.find((i) => i.id == id);

    selectedCategory.videos?.push(data.data);
    console.log(selectedCategory);
    await updateCat(id, selectedCategory);
    fetchCategory();
  };
  return (
    <div>
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        add category{" "}
      </Button>
      {finalCat.length > 0 ? (
        finalCat?.map((i) => (
          // <div
          // droppable
          // onDragOver={(e) => dragOver(e)}
          // onDrop={(e) => dropOn(e, i.id)}
          //   className="border border 5 pt-3 ps-3 pe-3 pb-3 mainCat"
          // >
          //   <p className="text-white ">
          //     {i.name}
          //     <Trash
          //       className="delCat"
          //       onClick={() => {
          //         catDelete(i.id);
          //       }}
          //     ></Trash>
          //   </p>
          // {i.videos?.map((j) => (
          //     <div className=" cat ">
          //      <Link to={"/category"}>
          //             <img
          //               style={{
          //                 objectFit: "contain",
          //                 width: "100px",
          //                 padding: "none",
          //                 cursor:"pointer"
          //               }}
          //               src={j.cover_image}
          //               alt=""
          //             />
          //      </Link>
          //       <p>
          //         {j.caption.length >= 36
          //           ? j?.caption.slice(0, 36) + "..."
          //           : j.caption}
          //       </p>
          //     </div>
          // ))}
          // </div>
          <div
            className="mainCat"
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dropOn(e, i.id)}
          >
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {i.name}
                  <Trash
                    className="delCat"
                    onClick={() => {
                      catDelete(i.id);
                    }}
                  ></Trash>
                </Accordion.Header>
                <Accordion.Body>
                  {i.videos?.map((j) => (
                    <div className=" cat ">
                      <Link to={"/category"}>
                        <img
                          style={{
                            objectFit: "contain",
                            width: "100px",
                            padding: "none",
                            cursor: "pointer",
                          }}
                          src={j.cover_image}
                          alt=""
                        />
                      </Link>
                      <p>
                        {j.caption.length >= 36
                          ? j?.caption.slice(0, 36) + "..."
                          : j.caption}
                      </p>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))
      ) : (
        <h1>no category found</h1>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>category name</Form.Label> */}
              <Form.Control
                type="email"
                onChange={(e) => getCategoryName(e)}
                name="name"
                placeholder="category name"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={getId}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
