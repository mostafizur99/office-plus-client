import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './CreateEmployee.css';

const CreateEmployee = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const salaryRef = useRef();
    const durationRef = useRef();

    const handleAddEmployee = e => {
        const employee_name = nameRef.current.value;
        const email = emailRef.current.value;
        const employee_age = ageRef.current.value;
        const employee_salary = salaryRef.current.value;
        const employee_duration = durationRef.current.value;

        const newEmployee = { employee_name, email, employee_age, employee_salary, employee_duration };

        // POST employee data 
        fetch('http://localhost:5000/employees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully added the Employee.')
                }
            })
        e.preventDefault();
        e.target.reset();
    }


    return (
        <div className="add-employee">
            <Row>
                <Col md={12}>
                    <h2 className="mb-3">Please add An Employee</h2>
                </Col>
            </Row>

            <Row>
                <Col md={12} >
                    <div className="update-form-wrap">
                        <div className="update-form">

                            <form onSubmit={handleAddEmployee}>
                                <div className="mb-2">
                                    <label htmlFor="name">Employee Name</label>
                                    <input ref={nameRef} type="text" className="form-control" name="name" id="name" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email">Employee Email</label>
                                    <input ref={emailRef} type="email" className="form-control" name="email" id="email" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="age">Employee Age</label>
                                    <input ref={ageRef} type="number" className="form-control" name="age" id="age" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="salary">Employee Salary</label>
                                    <input ref={salaryRef} type="number" className="form-control" name="salary" id="salary" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="duration">Working duration(month)</label>
                                    <input ref={salaryRef} type="number" className="form-control" name="duration" id="duration" />
                                </div>
                                <div className="mb-2">
                                    <input className="btn-update" type="submit" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>


                </Col>
            </Row>

        </div >
    );
};

export default CreateEmployee;