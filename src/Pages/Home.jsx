import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [addVideoResponse,setaddVideoResponse]=useState("")
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
        <View addVideoResponse={addVideoResponse}/>

      </div>
      <div className="col-lg-6">
        <Category/>
        
      </div>
    </div>
    </>
  )
}

export default Home