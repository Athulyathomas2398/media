import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-warning" >
    <Container>
      <Navbar.Brand  style={{color:"white"}}>
   <Link to={'/'} style={{textDecoration:"none"}}  className='text-white'>
   <i className="fa-solid fa-file-video" /> &nbsp;
    
        mediaplay
   </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header