import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useState } from "react";
import {  Container, Row, Button, Alert, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userSignup } from "../actions/UserActions";
import { saveUser } from "../services/UserService";
import { signUpSchema } from '../validation-schema/SignUpSchema';
import '../assets/styles/FormStyle.css';


export function SignUp() {
    const initialValues = {
        name: "",
        phone: "",
        email: "",
        pan: ",",
        password: ""

    };
    // const [user,setUser]=useState({});
    const [show,setShow]=useState(false)
    const handleClose=()=>{setShow(false)}
    const handleOpen=()=>{setShow(true)}
    const dispatch = useDispatch();
    // const handleChange=(event)=>{
    //           const {name,value}=event.target
    //           setUser({...user,[name]:value})
    // }
    const handleSubmit = (event) => {
        // event.preventDefault();
        // dispatch(userSignup(user)).then((data)=>{
        //     console.log(data);
        // })
        alert('signup successful')

    }

    return (
        <>
            <Container className="text-center mt-5">
                <Row>
                    <Col lg={{ offset: 2, span: 8 }}>
                        <Alert>Register here!</Alert>
                    </Col>
                </Row>
            </Container>
            <Container>
                {/* <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name='name' onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone" name='phone' onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name='email' onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>PAN</Form.Label>
                            <Form.Control type="text" placeholder="Enter PAN"  name='pan' onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name='password' onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type={'submit'}>Sign Up</Button>
            </Form> */}
                <Formik initialValues={initialValues}
                    validationSchema={signUpSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        dispatch(userSignup(values)).then((data)=>{
                            console.log(data);
                        });
                        handleOpen()
                    }}>
                    {(formik) => {
                        const {
                            errors, touched, isValid, dirty
                        } = formik;
                        return (
                            <Form>
                                <Row>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label for='name' className="form-label">Name</label>
                                        <Field type='text' name='name' id='name' className="form-control" ></Field>
                                        <ErrorMessage name="name" component="span" className="error"></ErrorMessage>
                                    </div>

                                </Col>
                                <Col lg={6}>

                                    <div className="mb-3">
                                        <label for='phone' className="form-label">Phone</label>
                                        <Field type='text' name='phone' id='phone' className="form-control" ></Field>
                                        <ErrorMessage name="phone" component="span" className="error"></ErrorMessage>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                
                                <div className="mb-3">
                                    <label for='email' className="form-label">Email</label>
                                    <Field type='text' name='email' id='email' className="form-control" ></Field>
                                    <ErrorMessage name="email" component="span" className="error"></ErrorMessage>
                                </div>
                                
                                
                                </Col>
                                <Col lg={6}>
                                
                                <div className="mb-3">
                                    <label for='pan' className="form-label">Pan</label>
                                    <Field type='text' name='pan' id='pan' className="form-control" ></Field>
                                    <ErrorMessage name="pan" component="span" className="error"></ErrorMessage>
                                </div>
                                
                                
                                </Col>
                                <Col lg={6}>
                                
                                <div className="mb-3">
                                    <label for='password' className="form-label">Password</label>
                                    <Field type='password' name='password' id='password' className="form-control" ></Field>
                                    <ErrorMessage name="password" component="span" className="error"></ErrorMessage>
                                </div>
                                
                                
                                </Col>
                                </Row>
                                <Button type='submit' variant={'primary'}>Sign Up</Button>

                            </Form>
                        );
                    }}

                </Formik>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, Sign Up Successful!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}