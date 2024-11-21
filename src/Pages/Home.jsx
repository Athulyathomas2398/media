import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [addVideoResponse,setaddVideoResponse]=useState("")
  const[deleteVideoCategoryResponse,setDeleteVideoCategoryResponse]=useState("")
  const[deleteVideoViewResponse,setDeleteVideoViewResponse]=useState("")
  return (
    <>
    <div className="container m-5 d-flex  justify-content-between">
      <Add setaddVideoResponse={setaddVideoResponse}/>
      <Link to={'/history'}className='text-warning fs-5' style={{textDecoration:'none'}}>Watch History
      </Link>

    </div>

    <div className="row m-5">
      <div className="col-lg-6">
        <h4 className='text-warning'>All Videos</h4>
        <View addVideoResponse={addVideoResponse} deleteVideoCategoryResponse={deleteVideoCategoryResponse} setDeleteVideoViewResponse={setDeleteVideoViewResponse} />

      </div>
      <div className="col-lg-6">
        <Category setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} deleteVideoViewResponse={deleteVideoViewResponse}/>
        
      </div>
    </div>
    </>
  )
}

export default Home