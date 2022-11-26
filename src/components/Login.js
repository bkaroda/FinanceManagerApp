import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export function Login() {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} className={'text-center'}>
                        <Alert variant="primary">
                            Finance Manager App
                        </Alert>
                    </Col>
                    <Col lg={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Button type="submit" className="btn btn-success">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}