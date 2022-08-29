import React from "react";
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';  
import { useParams } from 'react-router-dom';
export default function PriceList() {
  const {id} = useParams();
  console.log(id)
    return (
      
  <>
  <SimpleSlider/> 
  <p>{id}</p>
  <Footer/>
  </>
);
}