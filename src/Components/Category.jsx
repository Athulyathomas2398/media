import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../Service/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category({setDeleteVideoCategoryResponse ,deleteVideoViewResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  console.log(categoryName);
  const [allCategory, setAllCategory] = useState([])
  console.log(allCategory);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getCategory()

  }, [deleteVideoViewResponse])



  const handleAddCategory = async () => {
    if (categoryName) {
      //api call
      try {
        await addCategory({ categoryName, allVideos: [] })
        handleClose()
        getCategory()
        setCategoryName("")
      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("Enter the category name")

    }

  }

  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      setAllCategory(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }

  const delCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      getCategory()
    }
    catch (err) {
      console.log(err);

    }

  }



  const videoDropped = async (e, categoryId) => {
    console.log("dropped", categoryId);
    const videoId = e.dataTransfer.getData("VideoId")
    console.log(`draged video with id ${videoId} and droped in category id ${categoryId}`);

    try {
      const { data } = await getSingleVideo(videoId)
      console.log(data);

      const selectedCategory = allCategory.find(item => item.id == categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);

      await updateCategory(categoryId, selectedCategory)
      getCategory()

     const result=await deleteVideo(videoId)
     setDeleteVideoCategoryResponse(result.data)


    }
    catch (err) {
      console.log(err);

    }


  }
  const dragOverCategory = (e) => {
    e.preventDefault()

  }

  //draggbale
  const dragStarted=(e,videoDetails,categoryId)=>{
    console.log(`dragging started with video details: ${videoDetails} and category id: ${categoryId}`);
    const dataShare={videoDetails,categoryId}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    

  }



  return (
    <>
      <div className="d-flex justify-content-around">
        <h4 className='text-warning'>All Category</h4>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder '>+</button>
      </div>
      <div className="container-fluid mt-3 ">
        {
          allCategory.length > 0 ?
            allCategory.map(category => (

              <div dropable={true} onDragOver={(e) => dragOverCategory(e)} onDrop={(e) => videoDropped(e, category?.id)}
              

               className="border border-light border-3 rounded p-3">
                <div className="d-flex justify-content-between">
                  <h6>{category.categoryName}</h6>
                  <button onClick={() => delCategory(category.id)} className='btn '><i className='fa-solid fa-trash' style={{ color: "red" }}></i></button>

                </div>
                <div className="row mt-3">
                  {
                    category.allVideos.length>0 &&
                    category.allVideos?.map(video => (
                      <div draggable={true} onDragStart={(e)=>dragStarted(e,video,category.id)} className="col-lg-6">
                        <VideoCard displayData={video} insideCategory={true}/>
                      </div>
                    ))
                  }
                </div>

              </div>

            ))
            :
            <div className='text-danger'>Nothing to display</div>

        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border boreder-2 border-warning rounded'>
            <FloatingLabel controlId="categoryId" label="Category">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category" />
            </FloatingLabel>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />

    </>
  )
}

export default Category