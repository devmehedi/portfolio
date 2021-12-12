import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="foot">
                <address>
                    <h2>My Location</h2>
                    <div className='text-white'>
                        <li>Bandar, Chattogram.</li>
                        <li>E-mail: <small>mahedihasanshowrov1@gmail.com</small></li>
                        <li>Phone: <span>01878367418</span></li>
                    </div>
                </address>
            </div>
            <div className="foot">
                <h2>My Projects</h2>
                <a className='text-decoration-none text-white' href="https://mobi-com-e8f33.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Mobi_com mobile shop</a><br />
                <a className='text-decoration-none text-white' href="https://traveledor-authentication.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Travelador Tour & Travel</a><br />
                <a className='text-decoration-none text-white' href="https://dental-ui-healthcare.web.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i>Dental_UI Health Care</a><br />
                <a className='text-decoration-none text-white' href="https://jolly-keller-365377.netlify.app/"><i class="fas fa-link fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i> Developing Pathshala</a>
            </div>
            <div className="foot">
                <h2>Social Link</h2>
                <a className="social-icon" href="https://github.com/devmehedi"><i class="fab fa-github"></i></a>
                <a className="social-icon" href="https://www.linkedin.com/in/mahedi-hasan-974a66209/"><i class="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href="https://twitter.com/?lang=en"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div >
    );
};

export default Footer;