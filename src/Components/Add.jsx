import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../Service/allAPI';

function Add({setaddVideoResponse}) {

  const [videoDetails, setVideoDetails] = useState({ caption: '', imageUrl: "", youtubeUrl: '' })
  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const [isinvalidUrl,setisInvalidUrl]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedUrl = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
      console.log(videoId);
      setisInvalidUrl(false)
    }
    else {
      setVideoDetails({ ...videoDetails, youtubeUrl:"" })
      setisInvalidUrl(true)
      
    }
    // https://www.youtube.com/watch?v=tOM-nWPcR4U
    //https://www.youtube.com/embed/tOM-nWPcR4U

  }

  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){
     try{
      const result=await addVideo(videoDetails)
      if(result.status>=200 && result.status<300){
        setaddVideoResponse(result.data)
        toast.success(`${result.data.caption} added to your collection`)
        handleClose()
        setVideoDetails("")
      }
      
     }
     catch(err){
      console.log(err);
      
     }
      

    }
    else{
      // alert("Please enter the fields")
      toast.warning("Please enter the fields")
  
    }
  }



  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details..</p>


          <div className='border border-3 border-warning rounded p-3'>
            {/* caption */}
            <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="enter video caption" />
            </FloatingLabel>


            {/* image url */}
            <FloatingLabel controlId="floatingInputimage" label="Image Url" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="enter image url" />
            </FloatingLabel>

            {/* youtube url */}
            <FloatingLabel controlId="floatingInputurl" label="Youtube Url" className="mb-3">
              <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="enter youtube url" />
            </FloatingLabel>
            {
              isinvalidUrl &&
              <h5 className='text-danger'>Invalid url</h5>
            }
            

          </div>
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>





      
    </>
  )
}

export default Add