import React, { useEffect, useState } from "react";
import SimpleSlider from '../MyComponets/SimpleSlider';
import Footer from '../MyComponets/Footer';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./allproject.css"
import Layout from "../Layout";



import axios from "axios";
export default function Location() {
  const [pro, setUser] = useState([]);
  const { city_id } = useParams();
  // console.log(city_id)
  useEffect(() => {
    async function getData() {
      const response = await axios.post('http://192.168.43.7:3001/api/v1/newshow/cities', {
        city_id: city_id
      }, {
        headers: {
          "Content-Type": "application/json",

        }
      })
      setUser(response.data.locality);

    }
    getData();
  }, [])

  return (

    <>
      <Layout/>
      <SimpleSlider />
      <div className="row">
        {
          pro.map((item) => {
            // var image = (item.image.service_url);
            return (

              <div class="col-md-3 city-name">

                <div class="project-colm">
                  <div class="project-img">
                    <strong class="new-lounch"><img src="img/New-Launch.gif" /> </strong>
                    <img class="img-fluid" src="https://www.esri.com/is/image/esri/lidm-banner-square:11w?wid=605&hei=605" />

                  </div>
                  <div class="project-text">
                    <Button variant="denger"><Link to={"/localities/" + item.slug}>{item.title}</Link></Button>

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