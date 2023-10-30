import baseUrl from "./baseUrl";
import { request } from "./commonReq";

//add video
export const addVideos=async(body)=>{
 return await request("POST",`${baseUrl}/videos`,body)
}

//get video
export const getVideos=async()=>{
  return await request("GET",`${baseUrl}/videos`,{})
}
//delete video
export const deleteVideo=async(id)=>{
  return await request("DELETE",`${baseUrl}/videos/${id}`,{})
}
//add category
export const addCategory=async(body)=>{
  return await request("POST",`${baseUrl}/categories`,body)
}
//get category
export const getCategory = async () => {
  return await request("GET", `${baseUrl}/categories`,{});
};
//delete category
export const delCategory = async (id) => {
  return await request("DELETE", `${baseUrl}/categories/${id}`, {});
};

//watch history
export const watchHist=async(body)=>{
 return await request("POST",`${baseUrl}/history`,body)
}

//get history
export const getHist=async()=>{
  return await request("GET",`${baseUrl}/history`,{})
}

//delete history
export const delHist=async(id)=>{
  return await request("DELETE",`${baseUrl}/history/${id}`,{})
}
//drag and drop category

//access single video
export const getSingle = async (id) => {
  return await request("GET", `${baseUrl}/videos/${id}`, {});
};

//update category
export const updateCat=async(id,body)=>{
  return await request("PUT",`${baseUrl}/categories/${id}`,body)
}

//get category
export const getCat = async () => {
  return await request("GET", `${baseUrl}/categories`, );
};

//delete category
export const delCat=async(videoId)=>{
  return await request(
    "DELETE",
    `${baseUrl}/categories/${videoId}`,
    {}
  );
}