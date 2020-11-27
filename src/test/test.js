import React, { Component } from 'react'
import Image from '../images/hdfc1.png'
import Accordion from 'react-bootstrap/Accordion'

export class index extends Component {
    render() {
        return (
            <div className="container">
               <section className="p-3">
                <div className="container" >
                    <div className="row">
                        <div className="col">
                        <div className="card d-flex justify-content-center">
                                <div className="card-header text-black"> 
                                    <h3>Online Mandate Registration</h3>
                                    <h6>Online Mandate Registration is supported by version IE9+ | Chrome  35+| Firefox 35+  | Safari 5+</h6>
                                </div>
                              <Accordion defaultActiveKey="0">
                              <div className="container" >
                                      <div className="row">
                                            <div className="col  d-flex justify-content-center m-2 p-2">
                                            <div className="card d-flex justify-content-center  col-sm-6">
                                <form>
                                     <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label for="inputEmail4">NAME</label>
                                          <input type="email" class="form-control" id="inputEmail4" placeholder="Name" disabled/>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label for="inputPassword4">DUE DATE</label>
                                          <input type="date" class="form-control" id="inputPassword4"  disabled/>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label for="inputAddress"> YOUR EMAIL ID</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Email Id" disabled/>
                                      </div>
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label for="inputEmail4">CONTACT NUMBER</label>
                                          <input type="email" class="form-control" id="inputEmail4" placeholder="Number" disabled/>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label for="inputPassword4">PREMIUM AMOUNT</label>
                                          <input type="number" class="form-control" id="inputPassword4" placeholder="Amount"disabled/>
                                        </div>
                                      </div>
                                        <div class="form-row d-flex justify-content-center">
                                            <h6>
                                            Do you want to fix a particular date for payment as per your convinience?
                                            </h6>
                                        <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
                                                <label class="custom-control-label" for="customRadioInline1">No</label>
                                        </div>
                                           <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
                                                     <label class="custom-control-label" for="customRadioInline2">yes</label>
                                           </div>
                                          <div class="form-group col-md-4">
                                            <select id="inputState" class="form-control" disabled>
                                              <option selected>Choose...</option>
                                              <option>...</option>
                                                 </select>
                                               </div>
                                               </div>
                                             <div class="form-group">
                                               <div class="form-check">
                                                 <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                 <label class="form-check-label" for="gridCheck">
                                                 I have read and agreed to <a href="#">TERMS AND CONDITIONS</a>
                                                 </label>
                                               </div>
                                             </div>
                                             <a href="/PaymentModel" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">PAY</a>
                                             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                  <div class="modal-dialog" >
                                                    <div class="modal-content">
                                                      <div class="modal-header bg-info text-white">
                                                      <img src={Image} alt="logo" class="rounded" style={{width:100, height: 70,marginLeft:10}}/>
                                                        <div>
                                                        <h5 class="modal-title" id="exampleModalLabel">HDFC LIFE INSURANCE</h5>
                                                        
                                                        <small>POLICYNO:123456</small><br></br>
                                                        <small>TXN.ID:HDFC67890</small><br></br>
                                                        <span>INR: 2 RUPEES</span><br></br>
                                                        <small>Mandate amount limit is upto INR 10 Lakh except for Credit Card,HDFC Bank and ICICI Bank</small>
                                                        </div>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                        </button>
                                                      </div>
                                                      <div class="modal-body">
                                                          <h6 className="bg-light">
                                                            DIGITAL MANDATE
                                                          </h6>
                                                          <small>
                                                            REGISTER MANDATE USING
                                                          </small>
                                                          <br></br>
                                                      <div class="custom-control custom-radio custom-control-inline">
                                             <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"/>
                                                <label class="custom-control-label" for="customRadioInline3">Account</label>
                                        </div>
                                           <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadioInline4" name="customRadioInline1" class="custom-control-input"/>
                                                     <label class="custom-control-label" for="customRadioInline4">Credit Card</label>
                                           </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                        <button type="button" class="btn btn-primary">Proceed Payment</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                             <div >
                                             <small>
                                        Note: To verfiy your account /card details, a refundable token amount will be debited from your account/card chichis subject to bank in order to deactivate the auto debit in future kindly raise a request 12 days prior to the due date.
                                         *non refundable for ICICI Bank account.
                                        </small>
                                             </div>
                                           </form>
                                     </div>
                                       

                                             </div>
                                        </div>
                                   </div>
                                   </Accordion>
                                 <div className="card-footer text-black">
                                    <h6>For All Policy Releted Quries Simplechat</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default index

/*

Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
     Policy Details
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
                     <form>
                                     <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label for="inputEmail4">NAME</label>
                                          <input type="email" class="form-control" id="inputEmail4" placeholder="Name" disabled/>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label for="inputPassword4">DUE DATE</label>
                                          <input type="date" class="form-control" id="inputPassword4"  disabled/>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label for="inputAddress"> YOUR EMAIL ID</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Email Id" disabled/>
                                      </div>
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label for="inputEmail4">CONTACT NUMBER</label>
                                          <input type="email" class="form-control" id="inputEmail4" placeholder="Number" disabled/>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label for="inputPassword4">PREMIUM AMOUNT</label>
                                          <input type="number" class="form-control" id="inputPassword4" placeholder="Amount"disabled/>
                                        </div>
                                      </div>
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label for="inputEmail4">AMOUNT IN DEPOSIT</label>
                                          <input type="email" class="form-control" id="inputEmail4" placeholder="Amount" disabled/>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label for="inputPassword4">NET PAYABLE</label>
                                          <input type="number" class="form-control" id="inputPassword4" placeholder="Amount"disabled/>
                                        </div>
                                      </div>
                                        
                                        
                                             <button class="btn btn-primary" eventKey="1">Next</button>
                                             </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Payment details
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
*/




/**
  <form>
                        <div class="form-row">
                           <div class="form-group col-md-6">
                            <label for="inputEmail4">NAME</label>
                               <input type="email" class="form-control" id="inputEmail4" placeholder="Name" disabled/>
                               </div>
                               <div class="form-group col-md-6">
                               <label for="inputPassword4">DUE DATE</label>
                             <input type="date" class="form-control" id="inputPassword4"  disabled/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputAddress"> YOUR EMAIL ID</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="Email Id" disabled/>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">CONTACT NUMBER</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Number" disabled/>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputPassword4">PREMIUM AMOUNT</label>
                            <input type="number" class="form-control" id="inputPassword4" placeholder="Amount"disabled/>
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">AMOUNT IN DEPOSIT</label>
                             <input type="email" class="form-control" id="inputEmail4" placeholder="Amount" disabled/>
                          </div>
                          <div class="form-group col-md-6">
                             <label for="inputPassword4">NET PAYABLE</label>
                            <input type="number" class="form-control" id="inputPassword4" placeholder="Amount"disabled/>
                          </div>
                         </div>
                         <div class="form-check">
                                   <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                    I have read and agreed to <a href="#">TERMS AND CONDITIONS</a>
                                    </label>
                                               </div>
                                        <button className="btn-primary" data-toggle="collapse" data-target="#collapseOneA">NEXT</button>
                                            
                                             </form>
 */

 /*
 <div className="card">
            <div id="collapse1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" id="child1">
                <div className="card">
              <form className="d-flex justify-content-between m-2" >
                <label>POLICY:15211000</label><br></br>
                <label>AMOUNT:17700.00</label> <br></br>
                <lebel>TXN ID: HDFC12233224</lebel>
              </form>
               </div>
                    <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneA">
                              NETBANKING</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneA">
                            <div className="row">
                                  <div class="card m-2" style={{width:100,height:100}}>
                                   <img className="img-fluid" src={Axis}/>
                                      AXIS BANK
                                  </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={icici}/>
                                        ICICI BANK
                                     </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={yes}/>
                                    YES BANK
                                     </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={indian}/>
                                    INDIAN BANK
                                     </div>
                                 <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={sbi}/>
                                    SBI BANK
                                     </div>
                            </div>
                              <br></br>
                            <select className="col-sm-6 mt-3 ">
                              <option>Select a Bank</option>
                              <option>Others</option>
                            </select>
                            <br></br>
                            <button className="btn-primary mt-2">PAY</button>
                            </div>
                            
                        </div>
                        <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneB">Child B</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneB">
                            Another flipp runch wolf moon tempor, sunt aliqua put a bird.
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
 */