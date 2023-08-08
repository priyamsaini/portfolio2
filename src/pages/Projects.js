import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div className='projects'>
      <Navbar />
      <h2>Projects</h2>
      <div className='projects-container'>
        <div className='project-1'>
          <div className='project-container'>
            <img src='./images/project1.png' className='project-image' />
            <p><h4>Keeper App</h4><br />Introduction: The Keeper App with MySQL Integration is a modern web application designed to help users organize, store, and manage their notes effectively. The app is built using the React JavaScript library for the frontend and MySQL as the backend database to store, delete and retrieve user-generated notes. The app aims to provide a seamless and user-friendly experience for capturing, editing, and accessing notes across different devices.
            Key Features:
            Create and Edit Notes: Users can create new notes with a title and content, and they have the flexibility to delete their notes at any time.
            User-Friendly Interface: The app features an intuitive and responsive user interface, enabling smooth navigation and interaction across various devices, including desktops, tablets, and mobile phones.
            Real-time Updates: The app utilizes real-time updates to ensure that users can collaborate on shared notes simultaneously and see changes made by other users in real-time.
            MySQL Database Integration: MySQL is used as the backend database to store and manage user-generated notes, providing robust data persistence and scalability.Technology Stack:
            Frontend: React, HTML, CSS, JavaScript
            Backend: Node.js, Express.js
            Database: MySQL
            Authentication: JSON Web Tokens (JWT)
            Real-time Updates: WebSocket (or similar technology)
            Deployment: Hosting platforms like AWS, Heroku, or Netlify
            Conclusion:
            The React Notes Taking App with MySQL Integration aims to enhance users' note-taking experience by providing a feature-rich and secure platform for capturing and organizing ideas. With its modern frontend built on React and the robust MySQL backend, the app is poised to offer users a seamless, efficient, and enjoyable notes management system. The app's user-friendly interface and real-time collaboration capabilities set it apart, making it an ideal solution for individuals and teams seeking an intuitive and reliable note-taking application.
</p>
          </div>
        </div>
        <div className='project-2'>
          <div className='project-container'>
          <img src='./images/project2.png' className='project-image' />
          <p><h4>Flutter App</h4><br />The Favorite Places Flutter app is a mobile application designed to allow users to capture and store their favorite places along with their corresponding map locations. This app aims to provide an easy and intuitive interface for users to create a personalized collection of memorable locations, enabling them to revisit or share these places with friends and family.
          Key Features:
          Location Capture: The app utilizes the device's GPS capabilities to enable users to pinpoint and mark their favorite places on the map. Users can either manually input location coordinates or rely on automatic location detection.
          Map Integration: The app integrates with popular mapping services, such as Google Maps, to display an interactive map that visualizes the marked favorite places. Users can view their favorite places on the map and explore nearby locations.Place Details: Users can add essential information about each favorite place, such as a title and images. This allows them to recall the significance and context of each location.
          Development Stack:
          Flutter: The app is built using the Flutter framework, allowing for cross-platform development for both Android and iOS devices.
          Google Maps API: Integration with Google Maps API enables interactive map functionality and location-based services.
          SQLite Database: Local storage of favorite places may be achieved using either SQLite for relational databases or NoSQL databases for flexibility and speed.
          The Favorite Places Flutter app offers a user-friendly and visually appealing way for users to cherish and revisit their treasured locations.This app becomes a valuable companion for capturing and organizing memorable places.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects