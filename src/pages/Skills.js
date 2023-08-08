import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

const Skills = () => {
  return (
    <>
      <Navbar/>
      <div className='skills'>
      <h2>Skills Timeline</h2>
        <div className='timeline'>
        <div className='timeline-container'>
          <h3>June 2023</h3>
          <span></span>
          <p>Master of Computer Applications<br/>completed mca</p>
        </div>
        <div className='timeline-container'>
          <h3>September 2022</h3>
          <span></span>
          <p>Android Development</p>
        </div>
        <div className='timeline-container'>
          <h3>June 2021</h3>
          <span></span>
          <p>BCA Completed</p>
        </div>
        <div className='timeline-container'>
          <h3>September 2019</h3>
          <span></span>
          <p>Web Development </p>
        </div>
        <div className='timeline-container'>
          <h3>March 2018</h3>
          <span></span>
          <p>12th</p>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Skills