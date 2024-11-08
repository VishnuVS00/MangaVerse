import React from 'react'
import PageNotFoundImg from '../assets/images/pnf2.jpg';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center border h-[80vh]'>
      <h2 className='text-2xl font-semibold'>Page not found</h2>
      <img src={PageNotFoundImg} alt="page not found" style={{ width: "50vh" }} />
      <div
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Go to
        <span className='text-2xl font-semibold'>{" "}Home</span>
      </div>
    </div>
  )
}

export default PageNotFound