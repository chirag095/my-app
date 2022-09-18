import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./slide.css"
import { } from 'react-router-dom';
import { Link } from "react-router-dom";






export default function City() {
  const [cities, setUser] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://192.168.43.7:3001/api/v1/cities');
      console.log(res.data)
      setUser(res.data);
    }
    getData();
  }, [])
  return (

   
  <>
 
   <br></br> 
   <center><h1 class="main-title">PROJECT CITY</h1></center>
  
   <br></br>
  
   <div class="row">  
  
   
   
        {
          cities.map((item) => {
            var image = (item.image.service_url);
            return (
              
<div class="col-md-3 city-name">

<div class="project-colm">
   <div class="project-img">  
      <strong class="new-lounch"><img src="img/New-Launch.gif"/> </strong>   
      <img class="img-fluid" src={image}/> 
   </div>
   <div class="project-text">
   
       <Button variant="denger"><Link to={"/localities/" + item.id}>{item.title}</Link></Button>
     
   </div>
</div>
</div>










              //               <div className='col-md-4'>
//                 <div class="card">
  
  
//   <Card style={{ width: '18rem'}}>
//                   <Card.Img variant="top" src={image} style={{ width: '18rem' }}/>
//                   <Card.Body>
                    
//                  <p> <Button variant="denger"><Link to={"/localities/" + item.id}><h1>{item.title}</h1></Link></Button></p>
                  
//                   </Card.Body>
//                 </Card>

// </div>
               
               
                             
//                 </div>
     
                
      
              

            )
          })
        }
        </div>
      
     
    
    </>
  );
}


