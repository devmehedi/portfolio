import React from 'react';
const Project = ({ project }) => {
    const { title, points1, points2, points3, images, technology, liveLink, clientGit, serverGit, linkedIn } = project;
    return (
        <div className="d-flex justify-content-between my-4">
            <div class="col-5 m-3 p-3">
                <img style={{ width: '100%', margin: 10, alignItems: 'center' }} src={images} alt="" />
            </div>
            <div class="col-7 m-3 p-3 text-start">
                <h3 className='mb-5'>⚛️ {title} _ _</h3>
                <li className='list-unstyled'>{points1}</li>
                <li className='list-unstyled'>{points2}</li>
                <li className='list-unstyled'>{points3}</li><br />
                <h6>{technology}</h6>
                <a href={liveLink}><i class="fas fa-link fs-2 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                <a href={clientGit}><i class="fab fa-github-square fs-2 mx-5 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                <a href={serverGit}><i class="fab fa-node fs-2 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Live Site"></i></a>
                <a href={linkedIn}><i class="fab fa-linkedin fs-2 mx-5 social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Linked In"></i></a>
            </div>
        </div>
    );
};

export default Project;


