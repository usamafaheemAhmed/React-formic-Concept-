import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import "./formic.css"
import { Slider } from '@mui/material'
import { useState , useRef , useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'



const Formic = () => {

  const [show, setShow] = useState(false);
  const [result, setResult] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const ref = useRef(700);
  useEffect(() => {
    const height = ref.current.offsetHeight;
    document.documentElement.style.setProperty('--main-height', `${height}px`);
  }, []);
  
 
  return (
    <div className='FormicBackGround container-fluid'>
        <Row className='mb-4'>
          <nav className="nav">
          <Col md="6" className='Logo' >
          <a className="nav-link active" href="./Formic" aria-current="page">Active link</a>
          </Col>
          <Col md='6' className='Menu'>
          <a className="nav-link  " href="./Formic">Stay Informed</a>
          <a className="nav-link " href="./Formic">Get Personal Report</a>
          </Col>
          </nav>
        </Row>
        <Row className='mainArea text-light px-5'>
          <Col md="5" className=' pt-5'>
          <span>You Can Afford More <br/> Than You Think.</span>
          <p className='Lpara1 pr-5'>With interest rates historically low, <br/>
          your own home may be closer than <br/>
          you think.
          </p>
          <Button size="lg" variant='outline-success' onClick={handleShow}>Get complete report</Button>
          <p>Yes, it's really free and we do not need your
          name and email address to show your results
          </p>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login form</Modal.Title>
          </Modal.Header>
          <Formik
          initialValues={{email:'',password:'' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = '*Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = '*Invalid email address';
            }
            if (!values.password) {
              errors.password = '*Password is required';
            } else if (
              !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/i.test(values.password)
            ) {
              errors.password = '*Password must contain Capital letter,Number and Special character ';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleClose();
            localStorage.setItem("logedin",1);
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}>
          {({isSubmitting})=>{
            return  (
              <Form>
          <Modal.Body>
                <label className="my-2" for="email">Email:</label>
                <Field type="text" id="email" name="email" className="form-control firstInput" />
                <ErrorMessage  name="email" component="div"/>
                <label className="my-2" for="password">Password:</label>
                <Field type="text" id="password" name="password" className="form-control firstInput" />
                <ErrorMessage  name="password" component="div"/>
          </Modal.Body>
          <Modal.Footer>
            <Button className="close" variant="outline-light" onClick={handleClose}>
              Close
            </Button>
            <Button className="login" variant="outline-success" type='submit' disabled={isSubmitting}>
              Login
            </Button>
          </Modal.Footer>
          </Form>)}}
          </Formik>
        </Modal>
      
            
            



          </Col>
          <Col md="7">
          <div className="card text-start p-3 ">
            <div className="card-body">
            <Formik
            initialValues={{range1:100000, range2 :70000, range3 :3500 }}
            validate={(values) => {
              const errors = {};
              if (values.range1 >= values.range2) {
                errors.range2 = "Yearly income before taxes must be Greater then Savings available for a down payment";
              }
              return errors;
            }}
            onSubmit={(values) => {
              let login = localStorage.getItem("logedin");
              if(!login){
                handleShow();
              }
              else{
                // Max affordable home price = (Yearly income before taxes - (Current rent x 12)) * Affordability factor + Savings available for a down payment
                let yearlyIncome = values.range1;
                let savingAvailable = values.range2;
                let currentRent = values.range3;

                let maxAffordable = (yearlyIncome - (currentRent * 12)) * 0.1792 + savingAvailable;

                setResult(Math.round(maxAffordable));

              }
      
            }}>

            {({values, isSubmitting, handleChange})=>{
              if(!result){
                return  (
                  <Form className="slide-in-left">  
                    <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-9 pt-2">
                                <label for="input1">
                                Yearly income before taxes
                                </label>
                            </div>
                            <div className="col-md-3">
                              <div className='input-group'>
                              <Field type='number' name='range1' className='form-control firstInput' placeholder="$ 00"  />
                              <span class="input-group-text append">CHF</span>
                              </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <Slider aria-label="Temperature" name='range1'  step={1} min={10000} max={500000} value={values.range1} onChange={handleChange} defaultValue={100000} />
                    </div>
                    <div className="col-md-12" id="limit">
                        <p>10,000 CHF <span className="float-end"> 500,000 CHF</span></p>
                    </div>
                    <ErrorMessage className="text-center" name="range1" component="div"/>
                </div>
              <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-9 pt-2">
                            <label for="input2">
                            Savings available for a down payment
                            </label>
                        </div>
                        <div className="col-md-3">
                          <div className='input-group'>
                          <Field type='number' id="input2" name="range2" className='form-control firstInput' placeholder="$ 00"  />
                          <span class="input-group-text append">CHF</span>
                          </div> 
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    <Slider aria-label="Temperature" name="range2" step={1} min={10000} max={700000} value={values.range2} onChange={handleChange}   defaultValue={100000} />
                </div>
                <div className="col-md-12" id="limit">
                    <p>10,000 CHF <span className="float-end">700,000 CHF</span></p>
                </div>
                <ErrorMessage className="text-center" name="range2" component="div"/>
                </div>
                <div className="row">
                  <div className="col-md-12">
                      <div className="row">
                          <div className="col-md-9 pt-2">
                              <label for="input3">
                              Current rent
                              </label>
                          </div>
                          <div className="col-md-3">
                            <div className='input-group'>
                            <Field type='number' id="input3" name="range3" className='form-control firstInput' placeholder="$ 00"  />
                            <span class="input-group-text append">CHF</span>
                            </div> 
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12 mt-2">
                      <Slider aria-label="Temperature" name="range3"  step={1} min={500} max={7000} value={values.range3} onChange={handleChange} defaultValue={100000} />
                  </div>
                  <div className="col-md-12" id="limit">
                      <p>500 CHF <span className="float-end">7,000 CHF</span></p>
                  </div>
                  <ErrorMessage className="text-center" name="range3" component="div"/>
                </div>
                <div className='col-md-12 text-center'>
  
                  <button className='btn btn-outline-light w-25 CheckBtn' type="submit">Check now</button>
                </div>
                </Form>
                )
              }
              else {
                return(
                  <div className='resultDiv slide-in-left'>

                    <span className='text-center'>You can afford {result} amount</span>
                  
                    <button className='btn btn-outline-light w-25 CheckBtn' onClick={()=>{setResult()}}>Calculate again</button>

                  </div>
                );

              }

              
              }
          
              }
        </Formik>




            </div>
          </div>
          </Col>
        </Row>
    </div>
  )
}

export default Formic
