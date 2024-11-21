
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <Header />

      <Routes>
        <Route element={<Landing />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<History />} path='/history' />

      </Routes>


      <Footer />

    </>
  )
}

export default App
