import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, getAllCategory } from '../Service/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Category() {
  const [show, setShow] = useState(false);
  const[categoryName,setCategoryName]=useState("")
  console.log(categoryName);
  const[allCategory,setAllCategory]=useState([])
  console.log(allCategory);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  useEffect(() => {
    getCategory()
    
  },[])

  

  const handleAddCategory=async()=>{
    if(categoryName){
      //api call
      try{
        await addCategory({categoryName,allVideos:[]})
        handleClose()
        getCategory()
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.warning("Enter the category name")

    }

  }

  const getCategory=async()=>{
    try{
      const result=await getAllCategory()
      setAllCategory(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
   <div className="d-flex justify-content-around">
   <h4 className='text-warning'>All Category</h4>
   <button  onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button> 
   </div>
   {
    allCategory.length>0?
    allCategory.map(category=>(
      <div className="container-fluid mt-3">
     <div className="border border-light border-3 rounded p-3">
       <div className="d-flex justify-content-between">
         <h6>{category.categoryName}</h6>
         <button className='btn '><i className='fa-solid fa-trash' style={{color:"red"}}></i></button>
 
       </div>
 
     </div>
    </div>
    ))
    :
    <div className='text-danger'>Nothing to display</div>

   }
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
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
      </FloatingLabel>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
    
    </>
  )
}

export default Category