import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar, Container, Nav } from '../node_modules/react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends React.Component {
    render() {

        return (
            
            <Navbar bg="light" expand="lg">
                <Container>
                <LinkContainer to="/home"><Navbar.Brand>Cocktail Analyzer</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            )
    }
}

export default NavigationBar;