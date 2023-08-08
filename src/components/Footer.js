import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-grid'>
                <div className='footer-content'>
                    <Link to="/"><img src='./images/logo.png' /></Link>
                </div>
                <div className='footer-content'>
                    <ul>
                    <h3>Connect</h3>
                        <li><a href='https://www.linkedin.com/in/priyam-saini-861155255/'>LinkedIn</a></li>
                        <li><a href='https://github.com/priyamsaini'>Github</a></li>
                        <li><a href='mailto:webdev.priyam@gmail.com'>Mail</a></li>
                    </ul>
                </div>
                <div className='footer-content'>
                    <ul>
                    <h3>Reach</h3>
                        <li> <HomeIcon className='footer-icon'/> Yamunanagar,HR</li>
                        <li><MailIcon className='footer-icon'/> webdev.priyam@gmail.com</li>
                    </ul>
                </div>
            </div>
            <p>Copyright @ PRIYAM INC.</p>
        </div>
    )
}

export default Footer