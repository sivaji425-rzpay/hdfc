import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axis from "../hdfc/images/Axis1.png"
import icici from "../hdfc/images/icici.png"
import indian from "../hdfc/images/indian.png"
import sbi from "../hdfc/images/sbi.png"
import yes from "../hdfc/images/yes.png"
import phone from '../hdfc/images/phone.png'
import google from '../hdfc/images/google1.png'
import paytm from '../hdfc/images/paytm4.png' 
import mobi from '../hdfc/images/mobi2.png'
import freecharge from '../hdfc/images/freecharge1.png'
import {MDBContainer, MDBCollapse, MDBCard, MDBCardBody,MDBRow,MDBCol,MDBView,MDBCardImage,MDBIcon, MDBCardHeader} from 'mdbreact'

export class index extends Component {
    state={
        collapseID: "collapse1",
        collapseID1: "collapse3"
      }
      toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
toggleCollapse1 = collapseID1 => () =>
this.setState(prevState => ({
  collapseID1: prevState.collapseID1 !== collapseID1 ? collapseID1 : ""
}));
    render() {
       const {collapseID,collapseID1}=this.state
        return (
        <div className="container">
               <section className="p-3">
               <h3>Online Premium Payment</h3>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9">
    <MDBContainer>
        <MDBContainer className='accordion md-accordion accordion-3 z-depth-1-half'>
          <MDBCardHeader
            onClick={this.toggleCollapse('collapse1')} tag='h3' tagClassName='red-text d-flex justify-content-between align-items-center'>
             <h4>POLICY DETAILS</h4>
            </MDBCardHeader>
          
            <MDBCollapse id='collapse1' isOpen={collapseID}>
              <MDBCardBody class='pt-0'>
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
                                             <button class="btn btn-primary" onClick={this.toggleCollapse('collapse2')} >
                                              PAYMENT
                                              </button>
              </MDBCardBody>
            </MDBCollapse>

          <MDBCard>
            <MDBCardHeader onClick={this.toggleCollapse('collapse2')} tag='h3' tagClassName='red-text d-flex justify-content-between align-items-center'>
            PAYMENT DETAILS
            </MDBCardHeader>
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0 '>
              <div className="d-flex justify-content-around">
              <form className="col-md-6" >
                <label>POLICY:15211000</label><br></br>
                <label>AMOUNT:17700.00</label> 
                <lebel>TXN ID: HDFC12233224</lebel>
              </form>
               </div>
               <MDBContainer className="accordion-gradient-bcg p-1 ">
          <div className="col-sm-3">
          <MDBCard style={{ backgroundColor: "rgba(0,0,0,0)",opacity:1,width:200}} className="my-1 ">
            <div onClick={this.toggleCollapse1("collapse3")}>
              <button className="white-text btn btn-primary" style={{width:200}} >NETBANKING</button>
            </div>
            </MDBCard>
            </div>
             <MDBCollapse id="collapse3" isOpen={collapseID1}>
              <MDBCardBody className="rgba-grey-light white-text p-3">
             
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
                            
                    
              </MDBCardBody>
            </MDBCollapse>
          
           
        <div className="col-sm-3">
          <MDBCard style={{ backgroundColor: "rgba(0,0,0,.003)",width:200}}>
            <div onClick={this.toggleCollapse1("collapse4")}>
            <button className="white-text btn btn-primary" style={{width:200}}>DEBIT CARD</button>
            </div>
            </MDBCard>
            </div>
          
            <MDBCollapse id="collapse4" isOpen={collapseID1}>
              <MDBCardBody className="rgba-grey-light white-text">
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
                      
              </MDBCardBody>
            </MDBCollapse>
            
            <div className="col-sm-3">
          <MDBCard style={{ backgroundColor: "rgba(0,0,0,0)",opacity:1,width:200}} className="my-1">
            <div onClick={this.toggleCollapse1("collapse5")}>
              <button className="white-text btn btn-primary" style={{width:200}} >CREDIT CARD</button>
            </div>
            </MDBCard>
            </div>
            <MDBCollapse id="collapse5" isOpen={collapseID1}>
              <MDBCardBody className="rgba-grey-light white-text p-4">
             
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
                    
              </MDBCardBody>
            </MDBCollapse>
        
            <div className="col-sm-3">
          <MDBCard style={{ backgroundColor: "rgba(0,0,0,0)",opacity:1,width:200}} className="my-1">
            <div onClick={this.toggleCollapse1("collapse6")}>
              <button className="white-text btn btn-primary" style={{width:200}} >UPI</button>
            </div>
            </MDBCard>
            </div>
            <MDBCollapse id="collapse6" isOpen={collapseID1}>
              <MDBCardBody className="rgba-grey-light white-text p-4">
             
             
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
                        
                    
              </MDBCardBody>
            </MDBCollapse>

            <div className="col-sm-3">
          <MDBCard style={{ backgroundColor: "rgba(0,0,0,0)",opacity:1,width:200}} className="my-1">
            <div onClick={this.toggleCollapse1("collapse7")}>
              <button className="white-text btn btn-primary" style={{width:200}} >WALLET</button>
            </div>
            </MDBCard>
            </div>
            <MDBCollapse id="collapse7" isOpen={collapseID1}>
              <MDBCardBody className="rgba-grey-light white-text p-4">
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
              </MDBCardBody>
            </MDBCollapse>
        </MDBContainer>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
        </div>
        
            </div>
            </div>
            
                </section>
            </div>
        )
    }
}

export default index
