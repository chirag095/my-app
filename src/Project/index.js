import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./slide.css"
import {  } from 'react-router-dom';
import {Link } from "react-router-dom";

export default function City() {
  const [cities,setUser] = useState([]);
  useEffect(()=>{ async function getData(){
    const res = await axios.get('http://192.168.43.7:3001/api/v1/cities');
    console.log(res.data)
    setUser(res.data);
  }
  getData();
  },[])
  return (

<>

{
  cities.map((item)=>{
    var image = (item.image.service_url);
    return(
      
      <section class="propertyPrice p-hot-deal" id="price">
         <div class="container text-center hotdeals_container">
           <h2><span>Hot Deal</span></h2>
             <div class="row">
            
             <div class="owl-stage hot_detail_owl_stage"></div>
 <div class="owl-stage hot_detail_owl_stage">
 <div class="owl-item">
 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {image} />
      <Card.Body>
      <center> 
        <Button variant="denger"><Link to={"/priceList/"+item.id}>{item.title}</Link></Button>
      </center>
      </Card.Body>
    </Card>
   
    </div>

    </div>
    </div>
    </div>
    </section>

   
    

    

       
   )
  })
}



</>
  );
}