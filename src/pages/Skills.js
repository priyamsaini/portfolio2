import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Aos from 'aos';
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);
  return (
    <>
      <Navbar />
      <div className='skills'>
        <h2>Skills Timeline</h2>
        <div className='timeline'>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">2021 - 2023</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Master of Computer Applications (MCA)</h4><br />
              <a href='https://www.timt.ac.in/'>Tilak Raj Chadha Institute of Management & Technology, Yamunanagar</a></p>
          </div>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">Aug - Sep 2022</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Android App Development</h4><br />
              <a href='https://www.thinknext.co.in/'>Think Next Technology Pvt. Ltd. , Mohali</a></p>
          </div>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">2018 - 2021</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Bachelor of Computer Applications (BCA)</h4><br />
              <a href='https://www.mmumullana.org/' target='_blank'>Maharishi Markandeshwar University, Mullana</a></p>
          </div>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">Jun - Sep 2019</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Web Development</h4><br/>
            <a href='#' target='_blank'>Grapess Solutions, Yamunanagar</a> </p>
          </div>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">2017 - 2018</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Higher Secondary Certificate (Class 12th)</h4>
            <a href='https://www.facebook.com/Sps.jagadhri123/' target='_blank'>Saraswati Public School, Jagadhri</a></p>
          </div>
          <div className='timeline-container'>
            <h3 data-aos="fade-right">2015 - 2016</h3>
            <span data-aos="fade-down"></span>
            <p data-aos="fade-left"><h4>Secondary School Certificate (Class 10th)</h4>
            <a href='https://www.facebook.com/ipsjagadhri/' target='_blank'>Indian Public School, Jagadhri</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills