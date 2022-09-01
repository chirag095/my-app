import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./slide.css"
import { Router } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
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
<br></br>
<center><h2>Project Location</h2></center>
{
  cities.map((item)=>{
    var image = (item.image.service_url);
    return(
        
     
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {image} />
      <Card.Body>
      <center> 
        <Button variant="denger"><Link to={"/priceList/"+item.id}>{item.title}</Link></Button>
      </center>
      </Card.Body>
    </Card>
 
   
   )
  })
}
</>
  );
}