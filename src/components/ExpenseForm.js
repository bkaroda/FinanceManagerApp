import { useState } from "react";
import { Alert, Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { insertExpense } from "../actions/TransactionAction,";

export function ExpenseForm() {
    const [expense,setExpense]=useState({type:"D",user:"63216995904d8bd60ec17db9"});
    const dispatch=useDispatch();
    const handleChange=(event)=>{
              const {value,name}=event.target
              setExpense({...expense,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(insertExpense(expense))
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
    }


  

    return (
        <>
            <Container className="mt-5 text-center">
                <Row>
                    <Col lg={{ offset: 2, span: 8 }}>
                        <Alert variant={"danger"}>Insert Your Expenses</Alert>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <FormGroup className="mb-3">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" placeholder="enter name" name="amount" onChange={handleChange}></Form.Control>
                            </FormGroup>

                        </Col>
                        <Col lg={6}>
                            <FormGroup className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" onChange={handleChange}></Form.Control>
                            </FormGroup>

                        </Col>
                        <Col lg={6}>
                            <FormGroup className="mb-3">
                                <Form.Label>Source</Form.Label>
                                <Form.Control type="text" placeholder="enter Sorce" name="source" onChange={handleChange}></Form.Control>
                            </FormGroup>

                        </Col>
                        <Col lg={6}>
                            <FormGroup className="mb-3">
                                <Form.Label>Remark</Form.Label>
                                <Form.Control type="text" placeholder="enter Remark" name="remark" onChange={handleChange}></Form.Control>
                            </FormGroup>

                        </Col>
                    </Row>
                    <Button type={'submit'}>Insert Expenses</Button>
                </Form>
            </Container>
        </>
    )
}