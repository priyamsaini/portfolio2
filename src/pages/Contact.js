import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-header'>
      <h1>You can reach me at<br/>below platforms </h1>
      <ul>
      <li><a href='https://www.linkedin.com/in/priyam-saini-861155255/' target='_blank'><LinkedInIcon fontSize='large'/></a></li>
      <li><a href='https://github.com/priyamsaini' target='_blank'><GitHubIcon fontSize='large'/></a></li>
      <li><a href='mailto:webdev.priyam@gmail.com'><EmailIcon fontSize='large'/></a></li>
      </ul>
      </div>
      <div className='contact-body'>
      <h2>Let's connect</h2>
      <div className='map-container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.72821623758!2d77.22901220892716!3d30.1322403532904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1690269053531!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='form'>
      <form action='https://formspree.io/f/xdorkjnk' method='post'>
        <label htmlFor='name'>Name </label>
        <input type='text' name='name' required/><br/>
        <label htmlFor='email'>Email </label>
        <input type='email' name='email' required/><br/>
        <textarea rows="3" cols="5" name='message' required placeholder='Write your message here.'/><br/>
        <button type='submit'>Send</button>
      </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact