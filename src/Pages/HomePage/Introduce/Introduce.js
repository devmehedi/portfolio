import React from 'react';
import mypic from '../../../images/Mypic.jpg';
import { Typewriter } from 'react-simple-typewriter';
import './Introduce.css'
import { Col, Container, Row } from 'react-bootstrap';

const Introduce = () => {
    return (
        <div>
            <Container className='intro'>
                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6} className='my-5'>
                        <img style={{ width: '350px', borderRadius: '10%' }} src={mypic} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduce;


