import React from "react";
import logo from '../logo.svg';
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';  
export default function city() {
    return (
       
<>
<img src= "/images/nitin.jpg" /> 
<img src={logo} width="100" height="50" />
       <h1>hjghjj</h1>

       <div className="background-div">
        <div className="bg-container">
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
                <input class="input-field" type="text" placeholder="Name" name="usrnm" id="qSenderName" />
              </div>
              <div class="input-container">
                <input class="input-field email-address" type="text" placeholder="Email" name="email" id="qEmailID" />
              </div>
              <div class="input-container">
                <input class="input-field number-only" type="text" placeholder="Mobile No." name=" " id="qMobileNo" />
              </div>

              <div class="frmbtn">
                <input type="button" class="" value="SUBMIT" id="SubmitQuery" />
                <b class="animate-heading-2"><a href="tel:91xxxxxxxx">Call : +91-xxxxxxxxx</a></b>
              </div>
            </div>
          </div>
        </div>
      </div>
  
       </>
      );
  }