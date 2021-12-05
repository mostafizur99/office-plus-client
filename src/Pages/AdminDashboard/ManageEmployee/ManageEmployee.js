import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './ManageEmployee.css';

const ManageEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    // All employee data 
    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, [isDeleted]);

    // DELETE an User 
    const handleDeleteEmployee = id => {
        const proceed = window.confirm('Are you sure, you want to delete Employee Data?');
        if (proceed) {
            const url = `http://localhost:5000/employee/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingEmployees = employees.filter(employee => employee._id == id);
                        setEmployees(remainingEmployees);
                        setIsDeleted(true);
                    } else {
                        setIsDeleted(false);
                    }
                })
        }
    }
    // console.log(employees)

    return (
        <div className="manage-employees">
            <Row>
                <Col md={12}>
                    <h2>Manage Employee data</h2>
                    <h5 className="my-3">Total: {employees.length}</h5>
                </Col>
            </Row>
            <div className="employees-wrap">
                <Row>
                    {
                        employees.map(employee =>
                            <Col md={4} >
                                <div key={employee._id} className="single-manage">
                                    <h4>Name: {employee.employee_name}</h4>
                                    <h5>Email: {employee.email}</h5>
                                    <h5>Age: {employee.employee_age}</h5>
                                    <h5>Salary: {employee.employee_salary}</h5>
                                    <div className="action">
                                        <Link to={`/employee/update/${employee._id}`}><button className="btn-update">Update</button></Link>
                                        <button onClick={() => handleDeleteEmployee(employee._id)} className="btn-detele">Delete</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageEmployee;