import React from 'react'
import PageNotFoundImg from '../assets/images/pnf2.jpg'

function PageNotFound() {
  return (
    <div className='flex flex-col justify-between items-center'>
      <h2 className='text-3xl'>Page not found</h2>
      <img src={PageNotFoundImg} alt="page not found" />
      <button className='text-3xl'>Home</button>
    </div>
  )
}

export default PageNotFound