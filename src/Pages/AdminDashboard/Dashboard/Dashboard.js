import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Col, Container, Nav, Row } from 'react-bootstrap';

import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="dashboard-section">
                <Container fluid>
                    <Row>
                        <Col md={3} lg={3} >
                            <div className="dashboard-nav bg-dark h-100">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link as={Link} to="/dashboard">Summary</Nav.Link>
                                    <Nav.Link as={Link} to="/dashboard/manageEmployee">Manage Employee</Nav.Link>
                                    <Nav.Link as={Link} to="/dashboard/createEmployee">Create Employee</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} lg={9} >
                            <div className="dashboard-container">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Dashboard;