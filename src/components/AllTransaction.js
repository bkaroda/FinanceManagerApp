import React from 'react'
import { useEffect } from 'react';
import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { viewAllTransactions } from '../actions/TransactionAction,';

export  function AllTransaction() {

    const res = useSelector((state) => state.rootReducer.transactionReducer);

    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(viewAllTransactions());
        // console.log(res);
    })

  return(
  <>
  <Container className="mt-5 text-center">
  <Row>
      <Col lg={{ offset: 2, span: 8 }}>
          <Alert variant={'danger'}>View Your All Transactions</Alert>
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
                          </tr>
                      )
                  })
                  : null}
          <tr>

              <td>
                  <Button typr='button' variant="primary">Edit</Button>
                  <Button typr='button' variant="primary">Delete</Button>
              </td>
          </tr>
      </tbody>

  </Table>
</Container>

</>
  )
}
