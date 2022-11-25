
import "./singlebanner.css"

import React from 'react'
// import { MDBFooter } from './MyComponets/Footer';


class Singlebanner extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       message: ''
     }
   }
   render() {
     return(
       <div className="App">
         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <div className="form-group">
             <label htmlFor="name">Name</label>
             <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
           </div>
           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
           </div>
           <div className="form-group">
             <label htmlFor="message">Message</label>
             <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
           <div class="submit-success" data-submit=""><p>Message sent!🎉</p></div>
<div class="submit-error" data-submit=""><p>Error.</p></div>
         </form>
       </div>
     );
   }
   onNameChange(event) {
     this.setState({name: event.target.value})
   }
   onEmailChange(event) {
     this.setState({email: event.target.value})
   }
   onMessageChange(event) {
     this.setState({message: event.target.value})
   }
   handleSubmit(event) {
   }
 }

export default Singlebanner;























// export default function Singlepagebanner() {
//    const [name,setName] = useState("")
//    const [email,setEmail] = useState("")
//    const [contact,setContact] = useState("")
  
//    const query_form = async () => {
//       let res = await axios.post('http://192.168.43.7:3001/api/v1/customer/create',{
//          name:name,
//          email:email,
//          contact:contact
         
//       }
//       )
//    }
//   return (
//       <>
//          <div class="formbox col-sm-3">
//             <div class="form-box">
//                <h1>GODREJ RESIDENTIAL <span>PROJECTS</span></h1>
//                <h4 class="Location-heading">DELHI NCR</h4>
//                <h4 class="animate-heading"><i class="fa fa-video-camera" aria-hidden="true"></i> Schedule Digital Presentation</h4>
//                <h2><strong> APARTMENTS & VILLAS</strong></h2>
//                <h4>STARTS : <i class="fa fa-inr "></i>₹ 1.46 Cr* Onwards</h4>
//                <h3><i class=" fa fa-edit"></i>GET IN TOUCH WITH US</h3>
//                <div class="form-group select-option-section">
                
//                </div>
//                <div class="input-container"> 
//                   <input class="input-field" type="text" placeholder="Name" value={name}  onChange = {(e)=> setName(e.target.value)} id="qSenderName"/>
//                </div>
//                <div class="input-container"> 
//                   <input class="input-field email-address" type="text" placeholder="Email" value={email}  onChange = {(e)=> setEmail(e.target.value)} id="qEmailID"/>
//                </div>
//                <div class="input-container"> 
//                   <input class="input-field number-only" type="text" placeholder="Mobile No." value={contact}  onChange = {(e)=> setContact(e.target.value)} id="qMobileNo"/>
//                </div>
              
//                <div class="frmbtn">
//                   <input type="button" class="" value="SUBMIT" onClick ={query_form} id="SubmitQuery"/>
//                   <b class="animate-heading-2"><a href="tel:919513461101">Call : +91-9513461101</a></b> 
//                </div>
//             </div>
//          </div>
//          <div class="price-banner">
//             <div class="container">
//                <div class="wrapper flex-wrp">
//                   <p>Price : <strong>₹ 1.46 Cr* Onwards</strong></p>
//                   <p>Typology :<strong>1, 2, 3, 4 & 5 BHK APARTMENTS & VILLAS</strong></p>
//                   <p>Developer : <strong>GODREJ GROUP</strong></p>
//                   <p>Location : <strong>Delhi NCR</strong></p>
//                </div>
//             </div>
//          </div>
         
      
    



//       </>
    
//   );
// }