import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">Finance Manager App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    <LinkContainer to={'/'}>
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/add-income'}>
                            <Nav.Link>Add Income</Nav.Link>
                        </LinkContainer>   
                        
                        <LinkContainer to={'/add-expense'}>
                            <Nav.Link>Add expense</Nav.Link>
                        </LinkContainer>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}