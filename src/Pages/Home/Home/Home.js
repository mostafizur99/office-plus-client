import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Employees from '../Employees/Employees';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Navigation></Navigation>
            <Employees></Employees>
        </div>
    );
};

export default Home;