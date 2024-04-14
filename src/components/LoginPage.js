import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="left-nav">
          <li onClick={() => handleNavigation('home')}>Hi Dev</li>
        </ul>
        <ul className="right-nav">
          <li onClick={() => handleNavigation('about')}>About</li>
          <li onClick={() => handleNavigation('skills')}>Skills</li>
          <li onClick={() => handleNavigation('projects')}>Projects</li>
          <li onClick={() => handleNavigation('hireme')}>Hire Me</li>
        </ul>
      </nav>
      
      <main className="main">
        {activeSection === 'home' && (
          <section className="home">
            <div className='h-container'>
            <h1 className="animate__animated animate__zoomIn head1">Hello  </h1>
            <h2 className='head2'>I'm a Web <br/> Developer</h2>
            <h3 className='head3'>I build things for web</h3>
            <div className="social-icons">
              <a href="#" className="icon animate__animated animate__pulse">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="icon animate__animated animate__pulse">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon animate__animated animate__pulse">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon animate__animated animate__pulse">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            </div>
          </section>
        )}
        {activeSection === 'about' && (
          <section className="about">
            <h1>About Me</h1>
            <p>As A Web Developer, I Am Responsible For <br/>Developing Web Pages.<br/>
              My Primary Focus Is TO Create Responsive,<br/> User-Friendly Experiences That Meet The
              Needs <br/>  Of A Diverse Online Audience.
            </p>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="skills">
            <h1>My Skills</h1>
            
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects">
            <h1>Projects</h1>
            <p>Some Things I've built so far</p>
            <div className="container">
            <div className="row"> 
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" alt="Non-Veg Starters" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" alt="Non-Veg Starters" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" alt="Non-Veg Starters" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" alt="Non-Veg Starters" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" alt="Non-Veg Starters" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <a href="#" className="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Repeat the same structure for other menu items */}
            </div>
            </div>
          </section>
        )}

        {activeSection === 'hireme' && (
          <section className="hireme">
            <h1>Let's discuss <br/>
            on something cool together</h1>
            
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
