import React,{useEffect,useState} from "react";
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';  
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from "axios";
export default function PriceList() {
   const[pro,setUser] = useState([]); 
  const {city_id} = useParams();
  console.log(city_id)
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
        return(
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>{item.assets_type}</Card.Title>
              <Card.Text>
              {item.project_overview}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
    })
  }
  
  <Footer/>
  </>
);
}