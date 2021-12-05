import React from 'react';
import OfficeBarChart from './OfficeBarChart/OfficeBarChart';
import OfficePieChart from './OfficePieChart/OfficePieChart';
import './Summary.css';

const Summary = () => {
    return (
        <div className="">
            <h2>Summary</h2>
            <OfficeBarChart></OfficeBarChart>
            <OfficePieChart></OfficePieChart>
        </div>
    );
};

export default Summary;