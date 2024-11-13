import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../Service/allAPI'



function View({addVideoResponse}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideo,setdeleteVideo]=useState("")

  useEffect(() => {
    getVideos()

  }, [addVideoResponse,deleteVideo])


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


  return (
    <>
      {
        allVideos.length > 0 ?
          <Row className='border border-3 p-3' >
            {
              allVideos?.map(video => (
                <Col key={video?.id} lg={4} md={6} sm={12} className='mb-5' >
                  <VideoCard displayData={video} setdeleteVideo={setdeleteVideo}/>
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