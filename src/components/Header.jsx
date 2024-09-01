import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h2 className="text-decoration-none text-light mx-2 display-6">Registration Portal</h2>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;