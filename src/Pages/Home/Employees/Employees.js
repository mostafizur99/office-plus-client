import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Employee from './Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        fetch('https://mighty-escarpment-69704.herokuapp.com/employees')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    // console.log(employees)
    const handleShow = () => {
        setShow(true)
    }
    const handleHide = () => {
        setShow(false)
    }

    return (
        <div className="employees-section">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12}>
                        <div className="action-btn">
                            {show && <button className="btn-hide" onClick={handleHide}>Hide</button>}
                            {!show && <button className="btn-show" onClick={handleShow}>Show</button>}

                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={12}>
                        <div className="employees-heading">
                            <h2>Employee Information</h2>
                            <h4>Total Employee: {employees.length}</h4>
                        </div>
                    </Col>
                </Row>
                {
                    show && <Row className="align-items-center">
                        {
                            employees.map(employee =>
                                <Employee
                                    key={employee._id}
                                    employee={employee}>
                                </Employee>)
                        }
                    </Row>
                }

            </Container>
        </div>
    );
};

export default Employees;