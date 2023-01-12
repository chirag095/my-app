import React,{useEffect,useState} from 'react'
import axios from 'axios'




export default function Highlights() {
  const [highlight,setUser] = useState([]);
  useEffect(()=>{ async function getData(){
    const res = await axios.get('https://vistaarr.in/api/v1/highlights');
    console.log(res.data)
    setUser(res.data.highlights);
  }
  getData();
  },[])
  return (
<>

{
  highlight.map((item)=>{
   
    return(
      
      <h1>{item.title}</h1>

   
    

    

       
   )
  })
}



</>
  );
}