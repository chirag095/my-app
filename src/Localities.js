import React, { useEffect, useState, image } from "react";
import SimpleSlider from './MyComponets/SimpleSlider';
import Layout from './Layout'
import Footer from './MyComponets/Footer';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./card.css"
import { Helmet } from 'react-helmet';


import axios from "axios";
export default function Localities() {
  const [pro, setUser] = useState([]);
  const [proLoc, setLocal] = useState([]);
  const { locality_id, city_id } = useParams();
  console.log(locality_id)
  useEffect(() => {
    async function getData() {
      const response = await axios.post('https://vistaarr.in:3000/api/v1/newshow/localities', {
        locality_id: locality_id
      }, {
        headers: {
          "Content-Type": "application/json",

        }
      })
      setUser(response.data.project);
      setLocal(response.data.project.data);
      
    }
    getData();
  }, [])

if(!city_id && !locality_id) return null
  return (

    <>

     <Helmet>
     <title>{pro.seoTitle}</title>
        <meta name="description" content={pro.seo_description} />
        <meta name="keywords" content={pro.seo_keyword} />
        <link rel="canonical" href={pro.slug} />
      </Helmet>
      <Layout/>
       
      <SimpleSlider />
      <br></br>
      <center> <h1>City Location Project</h1></center>
      <br></br>
      <div className="row">
       {
          proLoc.map((item) => {
            
            // var image = (item.image.service_url);
            return (
              
          <div class="col-md-4 city-name">

                <div class="project-colm">
                  <div class="project-img">
                    <strong class="new-lounch"><img src="img/New-Launch.gif" /> </strong>
                    <img class="img-fluid" src={item.image} />
                  </div>
                  <div class="project-text">
                    <h2>{item.title}</h2>
                  
                    
                    <h4>{item.locality_title}</h4>
                    <p>{item.builder_title}</p>
                    <h5>{item.project_type}</h5>
                    
                    
                    <p>{item.project_features}</p>
                    <h5>{item.start_price}</h5>
                    <p>{item.project_status}</p>
                    <Button variant="denger"><Link to={`/${city_id}/${locality_id}/${item.slug}`}>{item.title}</Link></Button>
                  </div>
                </div>
              </div>











              //  <div className="col-md-4">
              //     <Card style={{ width: '18rem' }}>
              //       <Card.Img variant="top" src={image} />
              //       <Card.Body>
              //         <Card.Title>{item.title}</Card.Title>

              //         <Card.Text>
              //           {item.locality}
              //         </Card.Text>
              //         <Button variant="denger"><Link to={"/Singlepage/" + item.id}>{item.title}</Link></Button>
              //       </Card.Body>
              //     </Card>
              //     </div>
            )
          })
        }
      </div>

      <Footer />
    </>
  );
}