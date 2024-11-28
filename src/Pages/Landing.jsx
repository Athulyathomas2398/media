import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landingimg from '../assets/music4.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.png'
import category from '../assets/categoryy.png'
import history from '../assets/history.png'
import './Landing.css'


function Landing() {
  return (
    <>
    {/* landing page 1 */}
   <div className="container landing">
    <div className="row  align-items-center mt-5 ">
      <div className="col-lg-5 ">
        <h3>Welcome to <br /><span className='text-warning ms-5'>mediaplay</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem nisi est? Optio, libero delectus. Exercitationem repudiandae doloribus recusandae quo aut nulla, error culpa ex laudantium ducimus et consequatur voluptatum.</p>
        <Link to={'/home'} className='btn btn-warning'>Get Started</Link>

      </div>
      <div className="col"></div>
      <div className="col-lg-6">
      <img style={{width:'400px'}}  src={landingimg} alt="" /></div>
    </div>
   </div>
   {/* features */}
   <div className="feature container">
    <h2 className='text-center text-warning'>Features</h2>
    <div className="row">
      <div className="col-lg-4">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={settings} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload,view and remove videos.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>



      <div className="col-lg-4">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={category} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can upload,view and remove videos.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

      <div className="col-lg-4">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={history} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

    </div>
   </div>

   {/* landing footer */}
   <div className="container my-5 p-5 border border-white border-3 rounded">
      <div className="row">
        <div className="col-lg-6">
          <h3 className='text-warning'>Simple,Fast and Powerfull</h3>
          <div className="mt-5 text-white">
            <p><span className='fs-5 fw-bold'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore excepturi harum id alias dolor iusto, eligendi facilis.</p>

            <p><span className='fs-5 fw-bold'>Manage Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore excepturi harum id alias dolor iusto, eligendi facilis.</p>

            <p><span className='fs-5 fw-bold'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore excepturi harum id alias dolor iusto, eligendi facilis.</p>
          </div>

        </div>
        <div className="col-lg-6 p-5">
        <iframe className='utube' width="400" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=GQJJhmurpClld8tB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
   </div>
    </>
  )
}

export default Landing