import React from 'react';
import { Col } from 'react-bootstrap';

import './Employee.css';

const Employee = ({ employee }) => {
    const { employee_name, email, employee_age, employee_salary, employee_duration } = employee;

    return (
        <Col xs={12} md={4}>
            <div className="employee">
                <h4 className="my-2">Name: {employee_name}</h4>
                <h6>Email: {email}</h6>
                <h6>Age: {employee_age}</h6>
                <h6> Salary: {employee_salary}</h6>
                <h6> Duration: {employee_duration}</h6>
            </div>
        </Col>

    );
};

export default Employee;