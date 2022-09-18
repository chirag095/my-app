import "./singlebanner.css"
import React from 'react';
// import { MDBFooter } from './MyComponets/Footer';

export default function Singlepagebanner() {
  return (
      <>
  
      
     
         
           
         
           
           
         <div class="formbox col-sm-3">
            <div class="form-box">
               <h1>GODREJ RESIDENTIAL <span>PROJECTS</span></h1>
               <h4 class="Location-heading">DELHI NCR</h4>
               <h4 class="animate-heading"><i class="fa fa-video-camera" aria-hidden="true"></i> Schedule Digital Presentation</h4>
               <h2><strong> APARTMENTS & VILLAS</strong></h2>
               <h4>STARTS : <i class="fa fa-inr "></i>₹ 1.46 Cr* Onwards</h4>
               <h3><i class=" fa fa-edit"></i>GET IN TOUCH WITH US</h3>
               <div class="form-group select-option-section">
                
               </div>
               <div class="input-container"> 
                  <input class="input-field" type="text" placeholder="Name" name="usrnm" id="qSenderName"/>
               </div>
               <div class="input-container"> 
                  <input class="input-field email-address" type="text" placeholder="Email" name="email" id="qEmailID"/>
               </div>
               <div class="input-container"> 
                  <input class="input-field number-only" type="text" placeholder="Mobile No." name=" " id="qMobileNo"/>
               </div>
              
               <div class="frmbtn">
                  <input type="button" class="" value="SUBMIT" id="SubmitQuery"/>
                  <b class="animate-heading-2"><a href="tel:919513461101">Call : +91-9513461101</a></b> 
               </div>
            </div>
         </div>
         <div class="price-banner">
            <div class="container">
               <div class="wrapper flex-wrp">
                  <p>Price : <strong>₹ 1.46 Cr* Onwards</strong></p>
                  <p>Typology :<strong>1, 2, 3, 4 & 5 BHK APARTMENTS & VILLAS</strong></p>
                  <p>Developer : <strong>GODREJ GROUP</strong></p>
                  <p>Location : <strong>Delhi NCR</strong></p>
               </div>
            </div>
         </div>
         
      
    



      </>
    
  );
}