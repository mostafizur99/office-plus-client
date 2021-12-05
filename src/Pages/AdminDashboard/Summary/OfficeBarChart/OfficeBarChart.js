import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';


const OfficeBarChart = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://mighty-escarpment-69704.herokuapp.com/employees')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);


    return (
        <div>
            <Row>
                <Col md={12}>
                    <h4 className="my-3">Employee age data</h4>
                    <BarChart width={420} height={250} data={employees}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="employee_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="employee_salary" fill="#8884d8" /> */}
                        {/* <Bar dataKey="employee_age" fill="#82ca9d" /> */}
                        <Bar dataKey="employee_age" fill="#8884d8" />
                    </BarChart>
                </Col>
            </Row>
        </div>
    );
};

export default OfficeBarChart;