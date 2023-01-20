// import React from "react"; 
import React, { useEffect, useState } from "react";
import SimpleSlider from '../MyComponets/SimpleSlider';
import Footer from '../MyComponets/Footer';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
// import "./allproject.css"
import Layout from "../Layout";
import { Helmet } from 'react-helmet';


import axios from "axios";
export default function Location() {
  const [pro, setUser] = useState([]);
  const [local, setLocal] = useState([]);
  const { city_id } = useParams();
  console.log(city_id)
  useEffect(() => {
    async function getData() {
      const response = await axios.post('https://vistaarr.in:3000/api/v1/newshow/cities', {
        city_id: city_id
      }, {
        headers: {
          "Content-Type": "application/json",

        }
      })
      setUser(response.data.locality);
      setLocal(response.data.locality.data);

    }
    getData();
  }, [])

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
      <div className="row">
        {
          local.map((item) => {
            // var image = (item.image.service_url);
            return (

              <div class="col-md-3 city-name">

                <div class="project-colm">
                  <div class="project-img">
                    <strong class="new-lounch"><img src="img/New-Launch.gif" /> </strong>
                    <img class="img-fluid" src="https://www.esri.com/is/image/esri/lidm-banner-square:11w?wid=605&hei=605" />

                  </div>
                  <div class="project-text">
                    <Button variant="denger"><Link to={`/${city_id}/${item.slug}`}>{item.title}</Link></Button>

                  </div>
                </div>
              </div>







              // <div className="col-md-4">
              //   <Card style={{ width: '18rem' }}>
              //     {/* <Card.Img variant="top" src={image} /> */}
              //     <Card.Body>
              //       <Card.Title>{item.title}</Card.Title>
              //      <Button variant="denger"><Link to={"/pricelist/" + item.id}>{item.title}</Link></Button>
              //     </Card.Body>
              //   </Card>








            )
          })
        }
      </div>
      <Footer />
    </>
  );
}