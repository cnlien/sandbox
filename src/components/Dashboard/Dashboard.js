import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Dashboard.scss';

import Notes from '../Notes/Notes.js';
import Sidebar from '../Sidebar/Sidebar.js';

const Dashboard = (props) => {

    const viewHeight = window.innerHeight;

    return(
        <Container className="dashboard" fluid={true} style={{height: viewHeight}}>
            <Row className="dashboard-row" style={{height: viewHeight}}>
                <Col md="4 auto" className="sidebar-col">
                    <Sidebar />
                </Col>

                <Col className="notes-col">
                    <Notes />
                </Col>
            </Row>
        </Container>
           
    )
}

export default Dashboard;