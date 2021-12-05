import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';

import './UpdateEmployee.css';

const UpdateEmployee = () => {
    const [employee, seEmployee] = useState({});
    let { updateId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/employee/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => seEmployee(data));
    }, []);




    // Update Employee 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newEmployeeData = { ...employee };
        newEmployeeData[field] = value;
        seEmployee(newEmployeeData);
    }

    const handleUpdateSubmit = e => {
        const url = `http://localhost:5000/employee/${updateId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    // seEmployee({});
                    // e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <>
            <Navigation></Navigation>

            <div className="update-section">
                <Container>
                    <Row>
                        <Col md={12} >
                            <h2 className="my-3">Update</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >
                            <div className="update-form-wrap">
                                <div className="update-form">
                                    <form onSubmit={handleUpdateSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="employee_name"
                                                value={employee.employee_name || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="email"
                                                id="email" aria-describedby="emailHelp" value={employee.email || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="age">Age</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="employee_age"
                                                id="age" aria-describedby="ageHelp" value={employee.employee_age || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="salary">Salary</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="employee_salary"
                                                id="salary" aria-describedby="salaryHelp" value={employee.employee_salary || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="duration">Duration(Month)</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="employee_duration"
                                                id="duration" aria-describedby="durationHelp" value={employee.employee_duration || ''} />
                                        </div>

                                        <button type="submit" className="btn-update my-2">Update</button>
                                    </form>
                                </div>
                            </div>

                            <Link to={'/dashboard/manageEmployee'}><button className="btn-update">&#11013; Go Back</button></Link>

                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default UpdateEmployee;