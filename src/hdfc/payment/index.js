import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axis from "../images/Axis1.png"
import icici from "../images/icici.png"
import indian from "../images/indian.png"
import sbi from "../images/sbi.png"
import yes from "../images/yes.png"
import phone from '../images/phone.png'
import google from '../images/google1.png'
import paytm from '../images/paytm4.png' 
import mobi from '../images/mobi2.png'
import freecharge from '../images/freecharge1.png'

export class index extends Component {
    render() {
        return (
        <div className="container">
               <section className="p-3">
                 <div className="d-flex justify-content-center">
                 <h3>Online Premium Payment</h3>
                 </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9">
      <div id="accordion">

      <div class="card">
            <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         POLICY DETAILS
        </button>
      </h5>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
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
                                             </form>
                                             <button class="btn btn-primary"  data-toggle="collapse" data-target="#collapseTwo"  aria-expanded="true" aria-controls="collapseOne">
                                              PAYMENT
                                              </button>
                </div>
            </div>
        </div>
          <div class="card">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0 d-inline">
                    <button class="btn btn-link"   data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    PAYMENT DETAILS
                    </button>
                 </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" id="child1">
                <div className="card">
              <form className=" m-2" >
                <label>POLICY:15211000</label><br></br>
                <label>AMOUNT:17700.00</label> <br></br>
                <lebel>TXN ID: HDFC12233224</lebel>
              </form>
               </div>
                    <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneA">NETBANKING</a>
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
                            <button className="btn btn-primary mt-2">PAY</button>
                            </div>
                            </div>
                            <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneB">DEBIT CARD</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneB">
                           <form class="no validation">
                           <h5>ALL DEBIT CARDS ARE ACCPTED</h5>
                           <div class="form-row">
                           <div class="form-group col-md-4">
                            <label for="inputEmail4">CARD NUMBER</label>
                               <input type="email" class="form-control" id="inputEmail4" placeholder="Card number" />
                               </div>
                               <div class="form-group col-md-4">
                               <label for="inputPassword4">EXPIRY DATE</label>
                             <input type="text" class="form-control" id="inputPassword4" placeholder="EXPIRY DATE" />
                          </div>
                          <div class="form-group col-md-4">
                               <label for="inputPassword4">CVV</label>
                             <input type="text" class="form-control" id="inputPassword4" placeholder="CVV" />
                          </div>
                        </div>
                        <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">REMEMBER CARD</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">REGISTER FOR AUTO-DEBIT</label>
</div><br></br>
                        <button className="btn btn-primary">PAY</button>
                           </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneC">CREDIT CARD</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneC">
                           <form class="no validation">
                           <h5>ALL CREDIT CARDS ARE ACCPTED</h5>
                           <div class="form-row">
                             
                           <div class="form-group col-md-4">
                            <label for="inputEmail4">CARD NUMBER</label>
                               <input type="email" class="form-control" id="inputEmail4" placeholder="Card number" />
                               </div>
                               <div class="form-group col-md-4">
                               <label for="inputPassword4">EXPIRY DATE</label>
                             <input type="text" class="form-control" id="inputPassword4" placeholder="EXPIRY DATE" />
                          </div>
                          <div class="form-group col-md-4">
                               <label for="inputPassword4">CVV</label>
                             <input type="text" class="form-control" id="inputPassword4" placeholder="CVV" />
                          </div>
                        </div>
                        <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">REMEMBER CARD</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">REGISTER FOR AUTO-DEBIT</label>
</div><br></br>
                        <button className="btn btn-primary">PAY</button>
                           </form>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneD">UPI</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneD">
                        <div className="row">
                                  <div class="card m-2" style={{width:100,height:100}}>
                                   <img className="img-fluid" src={phone}/>
                                      PHONEPE
                                  </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={google}/>
                                        GOOGLEPAY
                                     </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={paytm}/>
                                    PAYTM
                                     </div>
                            </div>
                              <br></br>
                            <select className="col-sm-6 mt-3 ">
                              <option>Select a UPI</option>
                              <option>Others</option>
                            </select>
                            <br></br>
                            <button className="btn btn-primary mt-2">PAY</button>
                            </div>
                            </div>

                            <div class="card">
                        <div class="card-header">
                            <a href="#" data-toggle="collapse" data-target="#collapseOneE">WALLET</a>
                        </div>
                        <div class="card-body collapse" data-parent="#child1" id="collapseOneE">
                        <div className="row">
                                  <div class="card m-2" style={{width:100,height:100}}>
                                   <img className="img-fluid" src={phone}/>
                                      PHONEPE WALLET
                                  </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={freecharge}/>
                                        FREECHARGE 
                                     </div>
                                  <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={paytm}/>
                                    PAYTM WALLET
                                     </div>
                                     <div className="card m-2" style={{width:100,height:100}} >
                                    <img className="img-fluid" src={mobi}/>
                                    MOBIWIK WALLET
                                     </div>
                            </div>
                              <br></br>
                            <select className="col-sm-6 mt-3 ">
                              <option>Select a WALLET</option>
                              <option>Others</option>
                            </select>
                            <br></br>
                            <button className="btn btn-primary mt-2">PAY</button>
                            </div>
                            </div>
                            <div>

                            </div>
                        </div>
                       
                    </div>
                    
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
