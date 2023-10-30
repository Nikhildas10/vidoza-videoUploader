import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allRequest'
import './view.css'
function ViewVideo({refresh2}) {
  //state to delete
  const [deleteState, setDelete] = useState({});

  const [fetchedVideos, setData] = useState([]);
  const fetchVideos = async () => {
    const result = await getVideos();
    if (result.status >= 200 && result.status < 300) {
      setData(result.data);
    }
  };
  console.log(fetchedVideos);
  useEffect(() => {
    fetchVideos();
  }, [refresh2,deleteState]);

  return (
    <div className="mb-5 mainCardVideo">
      {fetchedVideos.length > 0 ? (
        fetchedVideos?.map((i) => <VideoCard deleteCard={setDelete} video={i}></VideoCard>)
      ) : (
        <h1>video not found</h1>
      )}
    </div>
  );
}

export default ViewVideo