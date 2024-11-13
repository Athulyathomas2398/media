import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";
//save video details
//save video api call by add.jsx

export const addVideo=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//fetch video api call
export const getAllVideos=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//api call for deleting video card
export const deleteVideo=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

//api call for save history
export const saveHistory=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
//fetch video api call from history
export const getAllhistory=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//api call for deleting history
export const deleteHistory=async(videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//api call for add category
export const addCategory=async(categoryDetails)=>{
   return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}

//fetch category api call
export const getAllCategory=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}