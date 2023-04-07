
import React, { useState } from 'react'
import "./ReactBootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert, Button, Col, Dropdown, Row, ToastContainer, ToggleButton } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import date from "date-and-time";


const ReactBootstrap = () => {
    let [show, setShow]= useState(false);
    let dates= new Date();
    dates = date.format(dates, 'ddd, MMM-DD-YYYY HH:mm:ss'); 
    let [show2, setShow2]= useState([{id:1,Task:"First Task",Status:"complete",date:dates},{id:2,Task:"second Task",Status:"progress",date:dates}]);
   

    let  statusShift = (e)=>{
      console.log(e);
      let singleData = e ;
      setShow2((current) => 
      current.filter((show2) => show2.id !== e.id));
      singleData.Status="complete";
      console.log("singleData",singleData);

      setShow2(show2=>[...show2, singleData]);

    }
    let  statusShift2 = (e)=>{
      console.log(e);
      let singleData = e ;
      setShow2((current) => 
      current.filter((show2) => show2.id !== e.id));

      singleData.Status="progress";
      console.log("singleData",singleData);

      setShow2(show2=>[...show2, singleData]);

    }
  
  return (

    <div>
        <Row >
        <Col md="3"></Col>
        <Col md="6" align="center">
         <Button variant="outline-secondary" onClick={()=>{setShow(true)}}>Alert</Button>
         <Row  align="left">
         <Col md="6">
         <ul>
         {show2.map((show2)=>{
              if(show2.Status==="progress"){
                return(
                    <li>
                      <div className='col-md-12 p-0 m-0'>
                      <p> {show2.Task} / {show2.date}
                        <FontAwesomeIcon icon={faCheckSquare} className='float-right mx-4' onClick={()=>{statusShift(show2)}}></FontAwesomeIcon>
                      </p>
                                            
                      <ToggleButtonGroup type="radio" name="options" defaultValue={show2.Status}>
                      <ToggleButton variant='outline-success' id="tbg-radio-1" value="initiated">
                        low
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" variant='outline-secondary' value="progress">
                        high
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" variant='outline-danger' value="complete">
                        Urgent 
                      </ToggleButton>
                    </ToggleButtonGroup>
                      </div>
                    
                    </li>
                );
              }
          })}
          </ul>
         </Col>
         
         <Col md="6">
         
         <ul>
         {show2.map((show2)=>{
              if(show2.Status==="complete"){
                return(
                    <li>  
                    <div className='col-md-12'>
                      <p> {show2.Task} / {show2.date} <FontAwesomeIcon className='float-right mx-4' icon={faXmark} onClick={()=>{statusShift2(show2)}}></FontAwesomeIcon> 
                      <Dropdown className="d-inline mx-2 bg-light" >
                      <Dropdown.Toggle id="dropdown-autoclose-true" variant="light">
                      </Dropdown.Toggle>
              
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Low Priority</Dropdown.Item>
                        <Dropdown.Item href="#">High Priority</Dropdown.Item>
                        <Dropdown.Item href="#">Urgent</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                      </p>
                      </div>
                    </li>
                );
              }
          })}
          </ul>
          </Col>
         
         
         </Row>
       





         </Col>
        <Col md="3">
        <Alert key="danger" variant="danger" show={show} align="left">
        <Alert.Heading>Item Deleted</Alert.Heading>
        <p>
         Task is Deleted
       </p>
       <hr />
       <div className="d-flex justify-content-end">
         <Button onClick={() =>{setShow(false)}} variant="outline-danger">
           Ok
         </Button>
       </div>
        </Alert>
        
        </Col>
        </Row>
        <ToastContainer position='bottom-end'>
        
        <Toast bg="danger" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="text-light" >Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer>

    </div>

  )
}

export default ReactBootstrap
