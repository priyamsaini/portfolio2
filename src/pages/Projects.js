import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  return (
    <>
    <Navbar />
    <div className='projects'>
      <h2>Projects</h2>
      <div className='inner-project'>
      <div className='projects-container'>
        <div className='project-1'>
          <div className='project-container'>
            <div className='project-img-div'>
            {/* <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} centerMode centerSlidePercentage={100}>
            <div className='project-image'>
            <img src='./images/project1.1.png'/>
            </div>
            <div className='project-image'>
            <img src='./images/project1.2.png'/>
            </div>
            <div className='project-image'>
            <img src='./images/project1.3.png'/>
            </div>
            <div className='project-image'>
            <img src='./images/project1.4.png'/>
            </div>
            <div className='project-image'>
            <img src='./images/project1.5.png'/>
            </div>
              </Carousel> */}
              <div className='project-image'>
            <img src='./images/project1.4.png'/>
            </div>
              <button><a href="https://github.com/priyamsaini/Keeper-App" target='_blank'>Code</a></button>
              <button><a href='https://priyamsaini.github.io/Keeper-App/' target='_blank'>Preview</a></button>  
            </div>
            
            <p><h4>Keeper App</h4><br /><b>Introduction:</b> The Keeper App with MySQL Integration is a modern web application designed to help users organize, store, and manage their notes effectively. The app is built using the React JavaScript library for the frontend and MySQL as the backend database to store, delete and retrieve user-generated notes. The app aims to provide a seamless and user-friendly experience for capturing, editing, and accessing notes across different devices.<br/>
              <br/><b>Key Features:</b><br/><br/>
              <em>1. Create and Edit Notes:</em> Users can create new notes with a title and content, and they have the flexibility to delete their notes at any time.<br/><br/>
              <em>2. User-Friendly Interface:</em> The app features an intuitive and responsive user interface, enabling smooth navigation and interaction across various devices, including desktops, tablets, and mobile phones.<br/><br/>
              <em>3. Real-time Updates:</em> The app utilizes real-time updates to ensure that users can collaborate on shared notes simultaneously and see changes made by other users in real-time.<br/><br/>
              <em>4. MySQL Database Integration:</em> MySQL is used as the backend database to store and manage user-generated notes, providing robust data persistence and scalability.<br/>
              <br/><b>Technology Stack:</b><br/><br/>
              <em>Frontend:</em> React, HTML, CSS, JavaScript<br/><br/>
              <em>Backend:</em> Node.js, Express.js<br/><br/>
              <em>Database:</em> MySQL<br/><br/>
              <em>Deployment:</em>Github and Netlify<br/>
              {/* Conclusion:
              The React Notes Taking App with MySQL Integration aims to enhance users' note-taking experience by providing a feature-rich and secure platform for capturing and organizing ideas. With its modern frontend built on React and the robust MySQL backend, the app is poised to offer users a seamless, efficient, and enjoyable notes management system. The app's user-friendly interface and real-time collaboration capabilities set it apart, making it an ideal solution for individuals and teams seeking an intuitive and reliable note-taking application. */}
            </p>
          </div>
        </div>
        <div className='project-2'>
          <div className='project-container'>
          <div className='project-img-div'>
          {/* <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} centerMode centerSlidePercentage={100}>
              <img src='./images/project2.1.jpg' className='project-image' />
              <img src='./images/project2.2.jpg' className='project-image' />
              <img src='./images/project2.3.jpg' className='project-image' />
              <img src='./images/project2.4.jpg' className='project-image' />
              <img src='./images/project2.5.jpg' className='project-image' />
              <img src='./images/project2.6.jpg' className='project-image' />
              </Carousel> */}
              <div className='project-image'>
            <img src='./images/project2.3.jpg'/>
            </div>
              <button><a href="https://github.com/priyamsaini/flutter_app" target='_blank'>Code</a></button>
              <button><a href='https://user-images.githubusercontent.com/40400546/259059490-136c87e9-91d2-4d90-aec5-e3e5a8f3f0e7.mp4' target='_blank'>Preview</a></button>
            </div>
            <p><h4>Flutter App</h4><br />
            <b>Introduction:</b> The Favorite Places Flutter app is a mobile application designed to allow users to capture and store their favorite places along with their corresponding map locations. This app aims to provide an easy and intuitive interface for users to create a personalized collection of memorable locations, enabling them to revisit or share these places with friends and family.<br/><br/>
              <b>Key Features:</b><br/><br/>
              <em>1. Location Capture:</em> The app utilizes the device's GPS capabilities to enable users to pinpoint and mark their favorite places on the map. Users can either manually input location coordinates or rely on automatic location detection.<br/><br/>
              <em>2. Map Integration:</em> The app integrates with popular mapping services, such as Google Maps, to display an interactive map that visualizes the marked favorite places. Users can view their favorite places on the map and explore nearby locations.<br/><br/>
              <em>3. Place Details:</em> Users can add essential information about each favorite place, such as a title and images. This allows them to recall the significance and context of each location.<br/><br/>
              <b>Development Stack:</b><br/><br/>
              <em>Flutter:</em> The app is built using the Flutter framework, allowing for cross-platform development for both Android and iOS devices.<br/><br/>
              <em>Google Maps API:</em> Integration with Google Maps API enables interactive map functionality and location-based services.<br/><br/>
              <em>SQLite Database:</em> Local storage of favorite places is done through the use of SQLite relational database for flexibility and speed.
              {/* The Favorite Places Flutter app offers a user-friendly and visually appealing way for users to cherish and revisit their treasured locations.This app becomes a valuable companion for capturing and organizing memorable places. */}
              </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Projects