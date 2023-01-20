
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { MDBFooter } from './MyComponets/Footer';
import Footer from './MyComponets/Footer';
import axios from "axios";
// import ConfirmModal from "./ConfirmModal";
import "./App.css"

import swal from 'sweetalert';

import { Modal,Button} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet';



export default function Singlepage() {
  const [pro, setUser] = useState([]);
  const [flat, setData] = useState([]);
  const [img, setImage] = useState([]);
  const [logo, setLogo] = useState([]);
  const [locationamenity, setLocation] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  console.log(id, "----------")
  useEffect(() => {
    async function getData() {
      const response = await axios.post('https://vistaarr.in:3000/api/v1/projects', {
        id: id
      }, {
        headers: {
          "Content-Type": "application/json",

        }
      })
      setUser(response.data.project);
      setData(response.data.project.flats)
      setImage(response.data.project.gallary)
      setLogo(response.data.project.logo)
      setLocation(response.data.project.locationamenity)

    }
    getData();
  }, [])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")

  const query_form = async () => {
    let res = await axios.post('https://vistaarr.in:3000/api/v1/customer/create', {
      project_id: pro.id,
      name: name,
      email: email,
      contact: contact
      
    }).then(result => {
      console.log(result.data)
      swal({
        title: "Thank You",
        text: "Submit Success!",
        icon: "success",
      });
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      

    }
    )
  }

  return (
     
    <>
     
      <Helmet>

        <title>{pro.seo_title}</title>
        <meta name="description" content={pro.seo_description} />
        <meta name="keywords" content={pro.seo_keyword} />
        <link rel="canonical" href={pro.slug} />
        <meta name="theme-color" content="#008f68" />

      </Helmet>

      <header id="header" class="top-bar sticky-top">
        <div class="header-first-row">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
              <div class="mainlogo">
                <a class="Logo" href="#"><img data-src="{https://www.vecteezy.com/free-vector/real-estate-logo" src="{}"
                  class="img-fluid" alt="#" /></a>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon icon-menu "></span>
              </button>

              <div class="justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                <div class="blink mx-4"><b>Possession: {pro.possession_date}</b></div>
                <ul class="navbar-nav justify-content-lg-centerd">
                  <li class="nav-item"><a href="#Overview" class="nav-link">Overview</a></li>
                  <li class="nav-item"><a href="#highlight" class="nav-link">Highlight</a></li>
                  
                  <li class="nav-item"><a href="#price_plan" class="nav-link">Price Plan</a></li>
                  <li class="nav-item"><a href="#floor_plan" class="nav-link">Floor Plan</a></li>
                  <li class="nav-item"><a href="#gallery" class="nav-link">Gallery</a></li>
                  <li class="nav-item"><a href="#location" class="nav-link">Location </a></li>
                  <li class="nav-item">
                    <div class="ph-no"><i class="icon-phone-1"></i><a class="phone_url" href="tel:{logo.Contact}"><span
                      class="phone_no"></span></a>{logo.country_code}{logo.Contact}</div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="background-div">
        <div className="bg-container">
          <div class="formbox col-sm-3">
            <div class="form-box">
              <h1>{pro.title}</h1>
            
              <h4 class="animate-heading"><i class="fa fa-video-camera" aria-hidden="true"></i> GET A FREE SITE VISIT</h4>
              <h2><strong> {pro.project_type}</strong></h2>
              {/* <h2><strong> {pro.amenity}</strong></h2> */}
              <h4 class="animate-heading"><i class="fa fa-video-camera" aria-hidden="true"></i> {pro.site_Plan_content}</h4>
              {/* <h4>{pro.site_Plan_content}<i class="fa fa-inr "></i>  </h4> */}
              <h3><i class=" fa fa-edit"></i>GET IN TOUCH WITH US</h3>
              <div class="form-group select-option-section">

              </div>
              <div class="input-container">
                <input class="input-field" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} id="qSenderName" />
              </div>
              <div class="input-container">
                <input class="input-field email-address" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="qEmailID" />
              </div>
              <div class="input-container">
                <input class="input-field number-only" type="text" placeholder="Mobile No." value={contact} onChange={(e) => setContact(e.target.value)} id="qMobileNo" />
              </div>

              <div class="frmbtn">
                <input type="button" class="" value="SUBMIT" onClick={query_form} id="SubmitQuery" />
                
                <b class="animate-heading-2"><a href="tel:{logo.country_code}{logo.Contact}">Call : {logo.country_code}{logo.Contact}</a></b>
              </div>
            </div>
          </div>
        </div>
        <img class="d-block w-100 imgsize" data-src={pro.image} src={pro.image} alt="image" />
      </div>
    
   

      <section class="overview" id="Overview">
        <div class="container">
          <div class="main-title text-center">
            <span>Overview </span>
            <h2>{pro.title}</h2>
          </div>
          <div class="row">

            <div class="overv-box col-lg-12">
              <p>
                {pro.project_overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="highlight" id="highlight">
            <div class="main-title text-center">
              <span> Highlights </span>
              <h2> {pro.t} </h2>
            </div>
            <div class="highlight-points">
              <ul class="hl-listing">
                <li>
                  <span>
                    {pro.title1}
                  </span>
                </li>
                <li>
                  <span>
                    {pro.title2}
                  </span>
                </li>
                <li>
                  <span>
                    {pro.title3}
                  </span>
                </li>
                <li>
                  <span>
                    {pro.title4}
                  </span>
                </li>
                <li>
                  <span>
                    {pro.title5}
                  </span>
                </li>
                <li>
                  <span>
                    {pro.title6}
                  </span>
                </li>

                <li>
                  <span>
                    {pro.title7}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container cta-box">
          <img data-src="/image/nitin.jpg" src="https://sales.ind.in/img/undraw_calling_kpbp.svg" alt="#" class="cta-img lazy" />
          <div class="cta-content">
            <h3 class="request">REQUEST OFFICE / HOME / VIDEO PRESENTATION</h3>
            <Button variant="primary" onClick={handleShow}>
            Enquire Now
            </Button>
          </div>
        </div>
      </section>
      <section class="gallery-box" id="gallery">
        <div class="container">
          <div class="main-title text-center">
            <span> Gallery </span>
            <h2>{pro.title}</h2>
          </div>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href="https://sales.ind.in/img/image1.png" data-fancybox="group">

                  <img class="d-block w-100" data-src="https://sales.ind.in/img/image1.png" src={pro.image} alt="image" />
                </a>
              </div>
              {
                img.map((item) => {
                  var image = (item.image.service_url);
                  return (
                    <div class="carousel-item">
                      <a href={image} data-fancybox="group">

                        <img class="d-block w-100 caseimage" data-src={image} src={image} alt="image" />
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section class="price-plan" id="price_plan">

        <div class="price-section">

          <div class="container">
            <div className="row">
              <div class="main-title text-center">
                <span> Price plan </span>
                <h2>{pro.t} </h2>
              </div>

              {
                flat.map((item) => {
                  
                  return (


                    <div className="col-md-4">
                      <div class="price-box">
                        <ul class="price-card-listing">
                          <li class="price-item">
                            <div class="typology">

                              <span>{item.title}</span>
                            </div>
                            <div class="area">
                              <span>Carpet Area</span>
                              {item.carpet_area}
                            </div>
                            <div class="pricing">
                              <span>Price</span>
                              {item.price}
                            </div>
                            <div class="btm-pr-btn">
                            <Button variant="primary" onClick={handleShow}>
                View
            </Button>
                            </div>
                          </li>




                        </ul>
                      </div>
                    </div>

                  )
                })
              }

            </div>
          </div>

        </div>
      </section>


      <section class="cta-video-section">
        <div class="container">
          <div class="cta-content">
            <h4>TAKE A 360 DEGREE TOUR OF THE PROJECT </h4>
            <center>Schedule A Virtual Tour With Our Expert</center>
            <Button variant="primary" onClick={handleShow}>
            Schedule A Site Visit Virtual
              Tour
            </Button>
              
          </div>
        </div>
      </section>

      <section class="floor-plan" id="floor_plan">
        <div class="floorplan-section">
          <div class="container">
            <div class="f-p-rhs">
              <div class="main-title text-center">
                <span> Floor Plan </span>
                <h2>{pro.t}</h2>
              </div>
              <ul class="flor-p-cont">
                <li class="floor-img-cont">
                  <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                    <img data-src="https://sales.ind.in/img/floor-plan.png" src="https://sales.ind.in/img/floor-plan.png" class="img-fluid lazy" alt="Responsive image" />
                    <div class="overlay-div">
                    <Button variant="primary" onClick={handleShow}>
                    FLOOR PLAN
            </Button>
                    </div>
                  </div>
                </li>
                <li class="floor-img-cont">
                  <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                    <img data-src="img/fp/fp2.webp" src="https://sales.ind.in/img/floor-plan.png" class="img-fluid lazy" alt="Responsive image" />
                    <div class="overlay-div">
                    <Button variant="primary" onClick={handleShow}>
                    FLOOR PLAN
            </Button>
                    </div>
                  </div>
                </li>
                <li class="floor-img-cont">
                  <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                    <img data-src="img/fp/fp3.webp" src="https://sales.ind.in/img/floor-plan.png" class="img-fluid lazy" alt="Responsive image" />
                    <div class="overlay-div">
                    <Button variant="primary" onClick={handleShow}>
                    FLOOR PLAN
            </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
      <section class="dowload-brochure ">
        <div class="container">
          <div class="cta-content">
            <h4>Receive a digital copy of our brochure and learn more about our spacious residences.</h4>
            <center>Request A Private Visit To Our Site Office / Sales Office</center>
            <Button variant="primary" onClick={handleShow}>
            DOWNLOAD BROUCHURE
            </Button> 
          </div>
        </div>
      </section>

      <section class="location" id="location">
        <div class="container">
          <div class="main-title text-center">
            <span> Location </span>
            <h2>{pro.title}</h2>
          </div>
          <div class="map-content-box">
            <p class="loc-map-text">
              {pro.location_map_content}
            </p>

          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="map-box">
                <div class="loc-map-img">
                  <iframe width="300" height="300" src={pro.new_title} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
              </div>
            </div>
      
            <div class="col-lg-6 nearby">
              <div class="location-content">
       
                <div class="benefit">
                  <div class="nearby-connect">
                    <div class="accordion" id="accordionExample1">
                      
                    {
        locationamenity.map((item) => {
         return (
                      <div class="accordion-item">

                     
                        <h2 class="accordion-header" id="headingEleone">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseEleone" aria-expanded="true" aria-controls="collapseEleone">
                            {item.title}
                          </button>
                        </h2>
                        <div id="collapseEleone" class="accordion-collapse collapse show" aria-labelledby="headingEleone"
                          data-bs-parent="#accordionExample1">
                          <div class="accordion-body">
                            <ul>
                              <li>{item.dec1}</li>
                              <li>{item.dec2}</li>
                              <li>{item.dec3}</li>
                              <li>{item.dec4}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      )
    })
  }
    

                      
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="primary" onClick={handleShow}>
              Get Site
                Visit
            </Button>
            </div>

          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
     
        
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">{pro.title} Site Visit </h4>
              <button type="button" class="btn-close" onClick={handleClose} data-bs-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body">
              <form id="ModalForm" class="form-content">
                <div class="form-group">
                  <div class="name-cont">
                    <input type="text" id="ModalForm_Name" class="form-control" placeholder="Your Name*"
                     value={name} onChange={(e) => setName(e.target.value)} pattern="[a-zA-Z ]{4,35}" onpaste="return false;" oncopy="return false;"
                      onkeypress="return OnlyAlphaValidationWithSpace(event)" required />
                  </div>
                 
                  <div class="name-cont">
                    <input type="text" id="ModalForm_Name" class="form-control" placeholder="Your Email*"
                     value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-zA-Z ]{4,35}" onpaste="return false;" oncopy="return false;"
                      onkeypress="return OnlyAlphaValidationWithSpace(event)" required />
                  </div>

                  <div class="name-cont">
                    <input type="text" id="ModalForm_Name" class="form-control" placeholder="Your Number*"
                    value={contact} onChange={(e) => setContact(e.target.value)} pattern="{4,35}" onpaste="return false;" oncopy="return false;"
                      onkeypress="return OnlyAlphaValidationWithSpace(event)" required />
                  </div>

                  
                  <button value="Enquire Now" class="register-submit btn btn-primary" onClick={query_form} type="submit">Submit</button>
                </div>
               
              </form>
            </div>
          </div>
         
     
      </Modal>
      <Footer />




    </>


  );
}

