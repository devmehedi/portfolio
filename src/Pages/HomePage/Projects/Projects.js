import React, { useEffect, useState } from 'react';
import './Projects.css';
import mypic from '../../../images/Mypic.jpg';
import Project from '../Project/Project';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='fw-bold'>MY PROJECTS!</h2>
            <div class="container">
                <div>
                    {
                        projects.map(project => <Project
                            key={projects.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;