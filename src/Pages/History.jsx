import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllhistory } from '../Service/allAPI'
import './History.css'





function History() {
  const [videoHistory, setVideoHistory] = useState([])
  console.log(videoHistory);

  useEffect(() => {
    getHistory()

  }, [])


  const getHistory = async () => {
    try {
      const result = await getAllhistory()
      // console.log(result.data);
      setVideoHistory(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }

  const delHistory=async(videoId)=>{
    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }


  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3 className='text-danger' >Watch History</h3>
        <Link to={'/home'} className='text-warning' style={{ textDecoration: 'none', fontSize: '18px' }} >Back to <i className="fa-solid fa-house" />
        </Link>
      </div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          </tr>
        </thead>
        <tbody>
          {
            videoHistory.length > 0 ?
              videoHistory?.map((items,index) => (
                <tr key={items?.id}>
                  <td>{index+1}</td>
                  <td>{items?.caption}</td>
                  <td><a href={items?.youtubeUrl} target='_blank'>{items?.youtubeUrl}</a></td>
                  <td>{items?.formatedDate}</td>
                  <td><button className='btn' onClick={()=>delHistory(items?.id)}><i class="fa-solid fa-trash" style={{ color: 'red' }}></i></button></td>
                </tr>
              ))
              :
              <div className='text-danger fw-bold fs-3'>Nothing to display</div>
              
          }
        </tbody>
      </table>


    </div>
  )
}

export default History