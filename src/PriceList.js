import React,{useEffect,useState} from "react";
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';  
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from "react-router-dom";



import axios from "axios";
export default function PriceList() {
   const[pro,setUser] = useState([]); 
  const {city_id} = useParams();
  // console.log(city_id)
  useEffect(()=>{ async function getData(){
    const response = await axios.post('http://192.168.43.7:3001/api/v1/show/cities',{
      city_id:city_id
  },{
      headers:{
          "Content-Type": "application/json",
        
      }
  })
  setUser(response.data.project);
  
  }
   getData(); 
  },[])
  
    return (
      
  <>
  <SimpleSlider/> 
  {
    
    pro.map((item)=>{
      // var image = (item.image.service_url);
        return(
            
            <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src = {image} /> */}
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>{item.locality}</Card.Title>
              <Card.Text>
              {item.locality}
              </Card.Text>
              <Button variant="denger"><Link to={"/Singlepage/"+item.title}>{item.title}</Link></Button>
            </Card.Body>
          </Card>
        )
    })
  }
  
  <Footer/>
  </>
);
}