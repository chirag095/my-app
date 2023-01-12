import React from 'react';
import {useEffect,useState} from 'react';
import "./App.css"
const Modalform = () => {
    
  const[record,setRecord] = useState([])
  const [rs,setrs] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:''
  })
  
   const getData = () =>
   {
       fetch('')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
  
   useEffect(() => {
      getData();
   },[])
    
    const showDetail = (id) =>
    {
       
      fetch(`${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setrs(res))
    }
  
  
    return (
    <div class="container mt-2">
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12">
              <h4 class="mt-3 mb-3 text-secondary">
               ReactJS Display Record in Modal Box Bootstrap Modal with json API
              </h4>
                <div class=" mt-5">
                    <table class="table table-striped table-sm">
                        
                        <tbody>
                         
                          {record.map((names,index)=>
                          
                           <tr key={index}>
                              
                              <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-bs-toggle="modal" data-bs-target="#myModal">View Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
 
 
      <div class="modal" id="myModal">
        <div class="modal-dialog" style={{width:"700px"}}>
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Employee Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form id="ModalForm" class="form-content">
                <div class="form-group">
                  <div class="name-cont">
                    <input type="text" id="ModalForm_Name" class="form-control" placeholder="Your Name*"
                      pattern="[a-zA-Z ]{4,35}" onpaste="return false;" oncopy="return false;"
                      onkeypress="return OnlyAlphaValidationWithSpace(event)" required />
                  </div>
                  <div class="contry-code-mb-number">
                  <div class="name-cont">
                    <input type="text" id="ModalForm_email" class="form-control" placeholder="Your Email*"
                      pattern="[a-zA-Z ]{4,35}" onpaste="return false;" oncopy="return false;"
                      onkeypress="return OnlyAlphaValidationWithSpace(event)" required />
                     
                    </div>
                    <div class="m-number-cont">
                      <input id="ModalForm_Number" class="form-control" placeholder="Mobile No*" type="tel"
                        pattern="[0-9]{10}$" onpaste="return false;" oncopy="return false;"
                        onkeypress="return OnlyNumberValidationDash(event)" maxlength="10" required />
                    </div>
                  </div>
                  <button value="Enquire Now" class="register-submit btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
              
           
              
          </div>
        </div>
      </div>
  
    </div>
    )
}
  
  
export default Modalform