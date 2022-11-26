import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import  { useEffect } from "react";
import { getFinacialSummary, viewAllExpenses } from "../actions/TransactionAction,";

import React from "react";
import {  useNavigate } from "react-router-dom";


export function Dashboard() {
    const summary=useSelector((state)=>state.rootReducer.transactionReducer);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    
    const openExpenseList=()=>{
        // console.log('redirecting');
        navigate('/all-expense')
    }
    const openIncomList=()=>{
        // console.log('redirecting');
        navigate('/all-income')
    }
    const allTransactions=()=>{
        // console.log('redirecting');
        navigate('/all-transactions')
    }
    useEffect(()=>{
        dispatch(getFinacialSummary());
        // console.log(summary);
    })
   

    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const pieData = [
        {
            name: "Travel",
            value: 10
        },
        {
            name: "Recharge",
            value: 2.3
        },
        {
            name: "Shoes",
            value: 15
        },
        {
            name: "Apple iPhone",
            value: 65
        },
        {
            name: "Others",
            value: 7.7
        }
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };
    return (
        <>
            <Container className={'mt-5 text-center'}>
                <Row>
                    <Col lg={4}>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>Total Income</Card.Title>
                                <Card.Text>
                                    <Alert variant="success">Rs. {summary.totalIncome}</Alert>
                                </Card.Text>
                                <Button variant="primary" onClick={openIncomList}>View All Income</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>Total Expenses</Card.Title>
                                <Card.Text>
                                    <Alert variant="danger">Rs. {summary.totalExpense}</Alert>
                                </Card.Text>
                                <Button variant="danger" onClick={openExpenseList}>View All Expense</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>NetWorth</Card.Title>
                                <Card.Text>
                                    <Alert variant="primary">Rs. {summary.netWorth}</Alert>
                                </Card.Text>
                                <Button variant="success" onClick={allTransactions} >View All Transactions</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <PieChart width={730} height={300}>
                            <Pie
                                data={pieData}
                                color="#000000"
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                fill="#8884d8">
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </Col>
                </Row>
            </Container>
        </>
    )
}