import { useState } from "react";
import { Alert, Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { insertIncome } from "../actions/TransactionAction,";

export function IncomeForm() {
    // const initialValues = {
    //     amount: "",
    //     date: "",
    //     source: "",
    //     remark: ","
        

    // };
    const [income,setIncome]=useState({type:"C",user:"63216995904d8bd60ec17db9"});

    const dispatch=useDispatch();
    const handleChange=(event)=>{
              const {value,name}=event.target
              setIncome({...income,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(insertIncome(income))
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
                        <Alert variant="success">Insert Your Incomes</Alert>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group claaaName='mb-3'>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" placeholder="enter amount" name="amount" onChange={handleChange}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group  claaaName='mb-3'>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" onChange={handleChange}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group  claaaName='mb-3'>
                                <Form.Label>Source</Form.Label>
                                <Form.Control type="text" placeholder="enter source" name="source" onChange={handleChange}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group  claaaName='mb-3'>
                                <Form.Label>Remark</Form.Label>
                                <Form.Control type="text" placeholder="enter Remark" name="remark" onChange={handleChange}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type={'submit'} className='mt-3'>Insert Income</Button>
                </Form>
            </Container>





        </>
    )
}