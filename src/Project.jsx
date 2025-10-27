import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      image: '/path/to/project1.jpg', // Replace with your project image
      title: 'Airbnb Clone',
      description: 'A full-stack web application that replicates Airbnb functionality with booking systems, user authentication, and reviews.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'EJS'],
      githubLink: 'https://github.com/yourusername/airbnb-clone',
      liveLink: 'https://your-airbnb-clone.com'
    },
    {
      id: 2,
      image: '/path/to/project2.jpg',
      title: 'Social Platform',
      description: 'An interactive social media platform with real-time updates, user profiles, and content sharing capabilities.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubLink: 'https://github.com/yourusername/social-platform',
      liveLink: 'https://your-social-platform.com'
    },
    {
      id: 3,
      image: '/path/to/project3.jpg',
      title: 'E-Commerce Store',
      description: 'A modern e-commerce application with payment integration, product management, and shopping cart functionality.',
      technologies: ['MERN Stack', 'Stripe', 'JWT', 'Material-UI'],
      githubLink: 'https://github.com/yourusername/ecommerce-store',
      liveLink: 'https://your-store.com'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
            </div>
            
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <h3 className="tech-heading">Technologies Used:</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
