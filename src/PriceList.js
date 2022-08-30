import React from "react";
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';  
import { useParams } from 'react-router-dom';
export default function PriceList() {
  const {city_id} = useParams();
  console.log(city_id)
    return (
      
  <>
  <SimpleSlider/> 
  <p>{city_id}</p>
  <Footer/>
  </>
);
}