import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../Service/allAPI';



function VideoCard({ displayData, setdeleteVideo,insideCategory }) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = async () => {

    const { caption, youtubeUrl } = displayData
    const localTime = new Date()
    console.log(localTime);
    const formatedDate = localTime.toLocaleString()
    console.log(formatedDate);

    const videoHistory = { caption, youtubeUrl, formatedDate }
    try {
      await saveHistory(videoHistory)
    }
    catch (err) {
      console.log(err);

    }


    setShow(true)
  };
  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await deleteVideo(videoId)
      console.log(result);
      setdeleteVideo(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }

  const dragStarted = (e, videoId) => {
    console.log(videoId);
    console.log("video card dragged with id",`${videoId}`);
    e.dataTransfer.setData("VideoId",videoId)
    
    


  }




  return (
    <>
      <Card draggable={true} onDragStart={(e) => dragStarted(e, displayData?.id)} style={{ width: '12rem', height: '16rem' }}>
        <Card.Img onClick={handleShow} style={{ height: '180px' }} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center justify-content-between'>
          <h6>{displayData?.caption}</h6>

        {!insideCategory&&
            <button onClick={() => handleRemoveVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{ color: 'red', fontSize: '20px' }}></i></button>

        }

        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={`${displayData?.youtubeUrl}?autoplay=1`} title="Suttum Vizhi Video Song - Ghajini | Suriya | Asin | Nayanthara | Harris Jayaraj | A.R. Murugadoss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>



    </>
  )
}

export default VideoCard