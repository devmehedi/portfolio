import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Project = ({ project }) => {
    const { title, points1, points2, points3, images, technology, liveLink, clientGit, serverGit, linkedIn } = project;
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <img style={{ width: '100%', margin: 10, alignItems: 'center' }} src={images} alt="" />
                    </Col>
                    <Col md={6} className='my-5'>
                        <h3 className='mb-5'>⚛️ {title} _ _</h3>
                        <li className='list-unstyled'>{points1}</li>
                        <li className='list-unstyled'>{points2}</li>
                        <li className='list-unstyled'>{points3}</li><br />
                        <h6>{technology}</h6>
                        <a href={liveLink}><i class="fas fa-link fs-2 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                        <a href={clientGit}><i class="fab fa-github-square fs-2 mx-5 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                        <a href={serverGit}><i class="fab fa-node fs-2 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                        <a href={linkedIn}><i class="fab fa-linkedin fs-2 mx-5 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Linked In"></i></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;




