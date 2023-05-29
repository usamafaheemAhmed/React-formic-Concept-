import React from 'react'
import './MuiLoginPage.css'
import imgage1 from './Scenes/Scenes08.svg'
import { Card, Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'

function MuiLoginPage() {
  return (
    <div className='box'>
    <Row>
    <Col md='2'></Col>
    <Col md='8'>
        <Card>
        <Card.Body>
        <Row className=''>
        <Col md='6'> 
           <p className='text-center'><img src={imgage1} alt="logoImage" height={200} width={300} /></p>
           <p className='text-center w-50 subTitle'>Our Services are Free for New Customers for 1 month</p>
        </Col>
        <Col md='6'>
        <Card className='card2'>
            <Card.Body><h5 className='text-center' >Login Page</h5>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Card.Body>
        </Card>
        </Col>
        </Row>
        
        </Card.Body>
        </Card>
    </Col>
    <Col md='2'></Col>
    </Row>   
       

    </div>
  )
}

export default MuiLoginPage
