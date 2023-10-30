import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import { Trash2 } from 'react-feather';
import { delHist, getHist } from '../services/allRequest';
import '../components/view.css'
import { Link } from 'react-router-dom';
function History() {
    const [deleteState, setDelete] = useState({});

    const[hist,setHist]=useState([])
    const fetchHist=async()=>{
const result=await getHist()
setHist(result.data);
    }

const delHistory=async(id)=>{
const deleteResult = await delHist(id);
      if(deleteResult.status>=200&&deleteResult.status<300){
      fetchHist()
      }

}
console.log(hist);
    useEffect(()=>{
fetchHist()
    },[])
  return (
    <div>
      <Container style={{ height: "28.125", paddingTop: "3rem" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Video Name</th>
              <th>Video url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {hist.length > 0 ? (
              hist?.map((i, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.date} </td>
                  <td>{i.videoName}</td>
                  <td>{i.url}</td>
                  <td>
                    <Trash2
                      className="text-danger trashh"
                      onClick={() => delHistory(i.id)}
                      style={{
                        backgroundColor: "transparent",
                        filter: "invert()",
                      }}
                    ></Trash2>
                  </td>
                </tr>
              ))
            ) : (
              <h1>not found</h1>
            )}
          </tbody>
        </Table>
        <Link to={"/home"}>
          <div className="text-center mt-4 mb-5">
            <button className="backBtn">Go Back</button>
          </div>
        </Link>{" "}
      </Container>
    </div>
  );
}

export default History