import React from 'react'
import "./Home.css";
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <>
            <div className='home-content'>

                <div className='info-content'>
                    <div className='home-header'>
                        <h1>Hi, I'm <span>PRIYAM</span></h1>
                        <h4>from</h4>
                        <h2>Yamunanagar, HR </h2>
                    </div>
                </div>
                <div className='about-content'>
                    <h2>About Me</h2>
                    <div className='grid-container'>
                        <div className='container1'>
                            <div className='resume-container'>
                                <img src="./images/profile.jpg" />
                                <a href="./assets/resume.pdf" download>Download Resume</a>
                            </div>
                        </div>
                        <div className='container2'>
                            <p>Hello, I'm Priyam, A Web Developer with a Passion for building websites. <br />Who Am I: I am a web Developer with a genuine passion for Web Development. My journey in this industry began in 2018. Since then, I have been on a quest to challenge my skills to meet the industry standards.</p>
                            <p>What I Do: As a Web Developer , I try to make modern webstes. I have a strong focus on react. With a keen eye for detail and a commitment to excellence, I strive to give my all in work.</p>
                            <p>My Approach: In my work, I believe in consistency is essential. I am dedicated to to be consistent in my work. Collaboration and open communication are integral to my process, as I believe they lead to the best results.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home