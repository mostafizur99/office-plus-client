import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const OfficePieChart = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://mighty-escarpment-69704.herokuapp.com/employees')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    // console.log(employees);


    return (
        <div className="mt-5 py-5">
            <Row>
                <Col md={12}>
                    <h4 className="mt-5">Employee working duration</h4>
                    <LineChart
                        width={500}
                        height={300}
                        data={employees}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="employee_age" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="employee_duration" stroke="#82ca9d" />
                    </LineChart>
                </Col>
            </Row>
        </div>
    );
};

export default OfficePieChart;