import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import Introduce from '../Introduce/Introduce';
import Projects from '../Projects/Projects';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Introduce></Introduce>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;