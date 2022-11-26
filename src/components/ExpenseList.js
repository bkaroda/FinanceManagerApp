import React, { useEffect } from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { viewAllExpenses } from "../actions/TransactionAction,";
import axios from 'axios'




export function ExpenseList() {

    const res = useSelector((state) => state.rootReducer.transactionReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewAllExpenses());
        // console.log(res);
    })

    // const [response, setResponse] = React.useState([])
    // React.useEffect(() => {
    //         axios.get('http://localhost:3001').then(res => {
    //             setResponse(res)
    //         }).catch(err => console.log(err))
    //     }, [])
    const arr = ['amount', 'date', 'source', 'remark']

    return (
        <>
            <Container className="mt-5 text-center">
                <Row>
                    <Col lg={{ offset: 2, span: 8 }}>
                        <Alert variant={'danger'}>View Your Expenses</Alert>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Table>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Source</th>
                            <th>Remark</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(res)
                                ?
                                res.map((value, key) => {
                                    return (
                                        <tr>
                                            <td>{key + 1}</td>
                                            <td>Rs {value.amount}</td>
                                            <td>{value.date}</td>
                                            <td>{value.source}</td>
                                            <td>{value.remark}</td>
                                            <td>
                                <Button typr='button' variant="primary" className="me-1">Edit</Button>
                                <Button typr='button' variant="primary">Delete</Button>
                            </td>
                                        </tr>
                                    )
                                })
                                : null}
                        <tr>

                            
                        </tr>
                    </tbody>

                </Table>
            </Container>

        </>
    )
}