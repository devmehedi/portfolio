import React from 'react';
import mypic from '../../../images/Mypic.jpg';
import { Typewriter } from 'react-simple-typewriter';
import './Introduce.css'

const Introduce = () => {
    return (
        <div class="">
            <div class="intro">
                <div class="container">
                    <div className="d-flex justify-content-between text-white">
                        <div class="col-6 text-start my-5">
                            <h2 className='fw-bold'>MD. MEHEDI HASAN</h2>
                            <h5>I'm A <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Front end web developer❣️', 'Full stack web developer🖥️', 'MERN stack web developerⓂ️', 'React developer⚛️!']}
                                    loop={10}
                                    cursor
                                    cursorStyle='(❁´◡`❁)'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h5>
                            <br />
                            <address>
                                Chattogram, Bangladesh.
                            </address>
                            <p>Email: mahedihasanshowrov1@gmail.com</p>
                            <p>Phone: +8801878367418</p>
                            <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-github"></i></a>
                            <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-linkedin"></i></a>
                            <a href="/" class="mx-3 fs-1 social-icon"><i class="fab fa-twitter-square"></i></a>
                            <div>
                                <a href="https://drive.google.com/file/d/1mKnjVxgJo15onX1ngC0IfkycBfVsSNTz/view?usp=sharing"><button className='btn my-5'>Resume</button></a>
                            </div>
                        </div>
                        <div class="col-6 my-5">
                            <img style={{ width: '350px', borderRadius: '10%' }} src={mypic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-start my-5'>
                <h3>Hello !</h3>
                <p>I'm Mehedi, a Junior Front end Web developer. Solution-driven web developers specialize in contributing to a highly collaborative work environment,
                    finding solutions, and determining customer satisfaction. Proven experience building user-centric websites
                    using <span className='fw-bold'>HTML5, CSS3, Bootstrap, JS, React, React Router, Node JS, MongoDB, React Router Dom,
                        React Hooks Form, MUI, Firebase Authentication, Error solving, and Debugging.</span> Creating web
                    applications for desktop and mobile users. My goal is to meet the highest standards for web design and
                    web applications built across multiple APIs, third-party integrations, and databases.</p>
            </div>
        </div>
    );
};

export default Introduce;