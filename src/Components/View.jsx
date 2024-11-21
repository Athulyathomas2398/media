import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideo, getAllVideos, getSingleCategory, updateCategory } from '../Service/allAPI'




function View({ addVideoResponse, deleteVideoCategoryResponse ,setDeleteVideoViewResponse }) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideo, setdeleteVideo] = useState("")

  useEffect(() => {
    getVideos()

  }, [addVideoResponse, deleteVideo, deleteVideoCategoryResponse])


  console.log(allVideos);
  const getVideos = async () => {
    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }

  const dragOverView = (e) => {
    e.preventDefault()

  }

  const dropCategoryVideo=async(e)=>{
    //to covert string data into normal form use parse
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`video details${videoDetails } and category${ categoryId}`);
    console.log(videoDetails,categoryId);

    try{
      const {data}=await getSingleCategory(categoryId)
      console.log("data",data);
      const updatedCategoryVideoList=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(updatedCategoryVideoList);
      const {id,categoryName}=data
      const categoryResult=await updateCategory(id,{id,categoryName,allVideos:updatedCategoryVideoList})
      setDeleteVideoViewResponse(categoryResult.data)
      await addVideo(videoDetails)
      getVideos()
      
      

    }
    catch(err){
      console.log(err);
      
    }
    
    
  }


  return (
    <>
      {
        allVideos.length > 0 ?
          <Row droppable={true} onDragOver={(e) => dragOverView(e)} onDrop={(e)=>dropCategoryVideo(e)} className='border border-3 p-3' >
            {
              allVideos?.map(video => (
                <Col key={video?.id} lg={4} md={6} sm={12} className='mb-5' >
                  <VideoCard displayData={video} setdeleteVideo={setdeleteVideo} />
                </Col>
              ))
            }

          </Row>
          :
          <div className='text-danger fs-3 fw-bold'>Nothing to display</div>
      }








    </>
  )
}

export default View