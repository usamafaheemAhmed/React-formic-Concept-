import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import "./formic.css"
import { Slider } from '@mui/material'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'



const Formic = () => {
  let [range1 , setRange1]= useState(100000);
  let [range2 , setRange2]= useState(70000);
  let [range3 , setRange3]= useState(3500);

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
          <Button size="lg" variant='outline-success'>Get complete report</Button>
          <p>Yes, it's really free and we do not need your
          name and email address to show your results
          </p>
          </Col>
          <Col md="7">
          <div className="card text-start p-3 ">
            <div className="card-body">
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
                            <input type='number' id="input1" className='form-control firstInput' placeholder="$ 00" value={range1} onChange={(e)=>{setRange1(e.target.value)}} />
                            <span class="input-group-text append">CHF</span>
                            </div> 
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12 mt-2">
                      <Slider aria-label="Temperature" step={1} min={10000} max={500000} value={range1} onChange={(e)=>{setRange1(e.target.value)}}  defaultValue={100000} />
                  </div>
                  <div className="col-md-12" id="limit">
                      <p>10,000 CHF <span className="float-end">500,000 CHF</span></p>
                  </div>
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
                        <input type='number' id="input2" className='form-control firstInput' placeholder="$ 00" value={range2} onChange={(e)=>{setRange2(e.target.value)}} />
                        <span class="input-group-text append">CHF</span>
                        </div> 
                      </div>
                  </div>
              </div>
              <div className="col-md-12 mt-2">
                  <Slider aria-label="Temperature" step={1} min={10000} max={700000} value={range2} onChange={(e)=>{setRange2(e.target.value)}}  defaultValue={100000} />
              </div>
              <div className="col-md-12" id="limit">
                  <p>10,000 CHF <span className="float-end">700,000 CHF</span></p>
              </div>
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
                          <input type='number' id="input3" className='form-control firstInput' placeholder="$ 00" value={range3} onChange={(e)=>{setRange3(e.target.value)}} />
                          <span class="input-group-text append">CHF</span>
                          </div> 
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    <Slider aria-label="Temperature" step={1} min={500} max={7000} value={range3} onChange={(e)=>{setRange3(e.target.value)}} defaultValue={100000} />
                </div>
                <div className="col-md-12" id="limit">
                    <p>500 CHF <span className="float-end">7,000 CHF</span></p>
                </div>
              </div>
              <div className='col-md-12 text-center'>

                <button className='btn btn-outline-light w-25 CheckBtn'>Check now</button>
              </div>
            </div>
          </div>
          </Col>
        </Row>
    </div>
  )
}

export default Formic
