
import React,{useEffect,useState} from "react";
import { useParams} from 'react-router-dom';
// import { MDBFooter } from './MyComponets/Footer';
import Footer  from './MyComponets/Footer'; 
import axios from "axios";
import "./App.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Singlepage() {
  const[pro,setUser] = useState([]); 
  const {title} = useParams();
console.log(title)
useEffect(()=>{ async function getData(){
  const response = await axios.post('http://192.168.43.7:3001/api/v1/projects',{
    title:title
},{
  headers:{
    "Content-Type": "application/json",
  
}
})
console.log(response.data.project)
setUser(response.data.project);

}
 getData(); 
},[])
  return (
      <>
      
      {/* <img src={pro.image.service_url} />  */}
     {/* <h1>{pro.title}</h1>
      <h1>{pro.project_type}</h1>
     <h1>{pro.assets_type}</h1>
     <h1>{pro.amenity}</h1>
     <h1>{pro.site_Plan_content}</h1>  */}
    <br></br>
    <br></br>
     {/* <h1>{pro.title}</h1>
     <h3> {pro.project_type}</h3>
     <p> {pro.locality_id}</p> */}
     
     
     
     {/* <table>
   
    
     
   <div class="new">
   <td></td>
   
   </div>
   
 
  

  <tr>
   
    <td>Eve</td>
    <td>Jackson</td>
   
  </tr>
  <tr>
    <td>Adam</td>
    <td>Johnson</td>
   
  </tr>
</table> */}


<div class="banner-form-part">

        <div class="form-container">
        
          <div class="form-heading">
            <div class="form-offer">
              <h4 class="ps-hd">Kohinoor Kaleido Kharadi</h4>
            </div>
            </div>
            <h1>
              Premium 2 & 3 BHK Homes
              Starts at Rs 64 Lacs*
            </h1>
            </div>
            <form class="form-content" id="dropEnquiry">
            <div class="form-group">
              <div class="name-cont">
                <input class="form-control" id="dropEnquiry_Name" placeholder="Your Name*" pattern="[a-zA-Z ]{4,35}"
                  onpaste="return false;" oncopy="return false;" onkeypress="return OnlyAlphaValidationWithSpace(event)"
                  required/>
              </div>
              </div>
              <div class="country-code">
                <select name="cars" id="dropEnquiry_CountryCode">
                </select>
              </div>
              <div class="m-number-cont">
                <input class="form-control" id="dropEnquiry_Number" placeholder="Mobile No*" type="tel"
                  pattern="[0-9]{10}$" onpaste="return false;" oncopy="return false;"
                  onkeypress="return OnlyNumberValidationDash(event)" maxlength="10" required/>
              </div>
             
              <input value="Submit" class="register-submit btn btn-primary" type="submit"/>
            
          </form>
         
        </div>
     
   
   

      
       


  <header id="header" class="top-bar sticky-top">

    <div class="header-first-row">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <div class="mainlogo">
            <a class="Logo" href=""><img data-src="{img}" src=""
                class="img-fluid" alt="#"/></a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon icon-menu "></span>
          </button>

          <div class="justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
            <div class="blink mx-4"><b>Possession Date : December 2024</b></div> 
            <ul class="navbar-nav justify-content-lg-centerd">
              <li class="nav-item"><a href="#Overview" class="nav-link">Overview</a></li>
              <li class="nav-item"><a href="#highlight" class="nav-link">Highlight</a></li> 
              <li class="nav-item"><a href="#Amenities" class="nav-link">Amenities</a></li>
              <li class="nav-item"><a href="#price_plan" class="nav-link">Price Plan</a></li>
              <li class="nav-item"><a href="#floor_plan" class="nav-link">Floor Plan</a></li>
              <li class="nav-item"><a href="#gallery" class="nav-link">Gallery</a></li>
              <li class="nav-item"><a href="#location" class="nav-link">Location </a></li>
              <li class="nav-item">
                <div class="ph-no"><i class="icon-phone-1"></i><a class="phone_url" href="tel:"><span
                      class="phone_no"></span></a></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

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
            <h2>Kohinoor Kaleido Kharadi </h2>
          </div>
          <div class="highlight-points">
            <ul class="hl-listing">
              <li>
                <span>
                  2 & 3 BHK Homes in Kharadi
                </span>
              </li>
              <li>
                <span>
                  Potential for great ROI
                </span>
              </li>
              <li>
                <span>
                  Three-tier security for worry-free living
                </span>
              </li>
              <li>
                <span>
                  20+ World-Class Amenities
                </span>
              </li>
              <li>
                <span>
                  Ample daylight and ventilation
                </span>
              </li>
              <li>
                <span>
                  Well-connected to prime destinations
                </span>
              </li>

              <li>
                <span>
                  Contemporary homes with world-class amenities
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container cta-box">
        <img data-src="image" src="image" alt="#" class="cta-img lazy"/>
        <div class="cta-content">
          <h3 class="request">REQUEST OFFICE / HOME / VIDEO PRESENTATION BY, Kohinoor Kaleido Kharadi, Mumbai</h3>
          <button class="btn btn-primary" data-toggle="modal" data-target="video_call">Enquire Now</button>
        </div>
      </div>
    </section>

   
    <section class="gallery-box" id="gallery">
      <div class="container">
        <div class="main-title text-center">
          <span> Gallery </span>
          <h2>Kohinoor Kaleido Kharadi </h2>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="/image/nitin.jpg" data-fancybox="group">
                <img class="d-block w-100" data-src="/image/nitin.jpg" src="/image/nitin.jpg" alt="image"/>
              </a>
              
            </div>
            <div class="carousel-item">
              <a href="img/gallery/g2.webp" data-fancybox="group">

                <img class="d-block w-100" data-src="img/gallery/g2.webp" src="img/gallery/g2.webp" alt="image"/>
              </a>
            </div>
            <div class="carousel-item">
              <a href="img/gallery/g3.webp" data-fancybox="group">
                <img class="d-block w-100" data-src="img/gallery/g3.webp" src="img/gallery/g3.webp" alt="image"/>
              </a>
            </div>
            <div class="carousel-item">
              <a href="img/gallery/g4.webp" data-fancybox="group">
                <img class="d-block w-100" data-src="img/gallery/g4.webp" src="img/gallery/g4.webp" alt="image"/>
              </a>
            </div>
            <div class="carousel-item">
              <a href="img/gallery/g5.webp" data-fancybox="group">
                <img class="d-block w-100" data-src="img/gallery/g5.webp" src="img/gallery/g5.webp" alt="image"/>
              </a>
            </div>

            <div class="carousel-item">
              <a href="img/gallery/g6.webp" data-fancybox="group">
                <img class="d-block w-100" data-src="img/gallery/g6.webp" src="img/gallery/g6.webp" alt="image"/>
              </a>
            </div>
            <div class="carousel-item">
              <a href="img/gallery/g7.webp" data-fancybox="group">
                <img class="d-block w-100" data-src="img/gallery/g7.webp" src="img/gallery/g7.webp" alt="image"/>
              </a>
            </div>
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
          <div class="main-title text-center">
            <span> Price plan </span>
            <h2>Kohinoor Kaleido Kharadi </h2>
          </div>
          <div class="price-box">
            <ul class="price-card-listing">
              <li class="price-item">
                <div class="typology">
                 
                  <span>2 BHK – Premium</span>
                </div>
                <div class="area">
                  <span>Carpet Area</span>
                  696 Sq ft
                </div>
                <div class="pricing">
                  <span>Price</span>
                  Rs 64 Lacs*
                </div>
                <div class="btm-pr-btn">
                  <button class="btn btn-block btn-primary" data-toggle="modal" data-target="PriceSection">View</button>
                </div>
              </li>
              <li class="price-item">
                <div class="typology">
                 
                  <span>2 BHK – Luxury</span>
                </div>
                <div class="area">
                  <span>Carpet Area</span>
                  767 Sq ft
                </div>
                <div class="pricing">
                  <span>Price</span>
                  Rs 72 Lacs*
                </div>
                <div class="btm-pr-btn"><button class="btn btn-block btn-primary" data-toggle="modal"
                    data-target="PriceSection">View</button></div>
              </li>
              <li class="price-item">
                <div class="typology">
                
                  <span>3 BHK – Premium</span>
                </div>
                <div class="area">
                  <span>Carpet Area</span>
                  852 Sq ft
                </div>
                <div class="pricing">
                  <span>Price</span>
                  Rs 80 Lacs*
                </div>
                <div class="btm-pr-btn"><button class="btn btn-block btn-primary" data-toggle="modal"
                    data-target="PriceSection">View</button></div>
              </li>
          

            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-video-section">
      <div class="container">
        <div class="cta-content">
          <h4>TAKE A 360 DEGREE TOUR OF THE PROJECT </h4>
          <p>Schedule A Virtual Tour With Our Expert</p>
          <button class="btn btn-primary" data-toggle="modal" data-target="Homemeeting"> Schedule A Site Visit Virtual
            Tour </button>
        </div>
      </div>
    </section>

    <section class="floor-plan" id="floor_plan">
      <div class="floorplan-section">
        <div class="container">
          <div class="f-p-rhs">
            <div class="main-title text-center">
              <span> Floor Plan </span>
              <h2>Kohinoor Kaleido Kharadi </h2>
            </div>
            <ul class="flor-p-cont">
              <li class="floor-img-cont">
                <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                  <img data-src="img/fp/fp1.webp" src="img/fp/fp1.webp" class="img-fluid lazy" alt="Responsive image"/>
                  <div class="overlay-div">
                    <button class="btn btn-defult">FLOOR PLAN</button>
                  </div>
                </div>
              </li>
              <li class="floor-img-cont">
                <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                  <img data-src="img/fp/fp2.webp" src="img/fp/fp2.webp" class="img-fluid lazy" alt="Responsive image"/>
                  <div class="overlay-div">
                    <button class="btn btn-defult">FLOOR PLAN</button>
                  </div>
                </div>
              </li>
              <li class="floor-img-cont">
                <div class="image-container" data-toggle="modal" data-target="FloorPlan">
                  <img data-src="img/fp/fp3.webp" src="img/fp/fp3.webp" class="img-fluid lazy" alt="Responsive image"/>
                  <div class="overlay-div">
                    <button class="btn btn-defult">FLOOR PLAN</button>
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
          <p>Request A Private Visit To Our Site Office / Sales Office</p>
          <button class="btn btn-primary" data-toggle="modal" data-target="DownloadBrochure">DOWNLOAD BROUCHURE</button>
        </div>
      </div>
    </section>

    <section class="location" id="location">
      <div class="container">
        <div class="main-title text-center">
          <span> Location </span>
          <h2>Kohinoor Kaleido Kharadi </h2>
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
               
                
              </div>
            </div>
          </div>
          <div class="col-lg-6 nearby">
            <div class="location-content">
              <div class="benefit">
                <div class="nearby-connect">
                  <div class="accordion" id="accordionExample1">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingEleone">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseEleone" aria-expanded="true" aria-controls="collapseEleone">
                          Schools
                        </button>
                      </h2>
                      <div id="collapseEleone" class="accordion-collapse collapse show" aria-labelledby="headingEleone"
                        data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                          <ul>
                            <li>Eon Gyanankur School - 12 Min</li>
                            <li>Euro School - 6 Min</li>
                            <li>Phoenix World School - 14 Min</li>
                            <li>Dhole Patil School of Excellence - 4 Min</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwovel">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapsTwovel" aria-expanded="false" aria-controls="collapsTwovel">
                          Employment Hubs
                        </button>
                      </h2>
                      <div id="collapsTwovel" class="accordion-collapse collapse" aria-labelledby="headingTwovel"
                        data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                          <ul>
                            <li>Eon IT Park - 12 Min</li>
                            <li>World Trade Center - 14 Min</li>
                            <li>MIDC Knowledge Park - 10 Min</li>
                            <li>Zensar - 8 Min</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFourteen">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                          Healthcare
                        </button>
                      </h2>
                      <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen"
                        data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                          <ul>
                            <li>Columbia Asia Hospital - 12 Min</li>
                            <li>Rising Medicare - 16 Min</li>
                            <li>Balaji Hospital - 6 Min</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingfifteen">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">
                          Malls & Entertainment
                        </button>
                      </h2>
                      <div id="collapsefifteen" class="accordion-collapse collapse" aria-labelledby="headingfifteen"
                        data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                          <ul>
                            <li>Phoenix Market City – 12 Min</li>
                            <li>Bollywood E-Square - 12 Min</li>
                            <li>PVR Cinemas - 10 Min</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary site-visit" data-toggle="modal" data-target="Location">Get Site
              Visit</button>
          </div>

        </div>
      </div>
    </section>

    <div class="modal fade form">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
       
        <div class="modal-header">
          <h4 class="modal-title">Kohinoor Kaleido Kharadi </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal">&times;</button>
        </div>
      
        <div class="modal-body">
          <form id="ModalForm" class="form-content">
            <div class="form-group">
              <div class="name-cont">
                <input type="text" id="ModalForm_Name" class="form-control" placeholder="Your Name*"
                  pattern="[a-zA-Z ]{4,35}" onpaste="return false;" oncopy="return false;"
                  onkeypress="return OnlyAlphaValidationWithSpace(event)" required/>
              </div>
              <div class="contry-code-mb-number">
                <div class="country-code">
                  <select name="cars" id="ModalForm_CountryCode">
                  </select>
                </div>
                <div class="m-number-cont">
                  <input id="ModalForm_Number" class="form-control" placeholder="Mobile No*" type="tel"
                    pattern="[0-9]{10}$" onpaste="return false;" oncopy="return false;"
                    onkeypress="return OnlyNumberValidationDash(event)" maxlength="10" required/>
                </div>
              </div>
              <button value="Enquire Now" class="register-submit btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed-social-icon" id="SocailSection">
        <ul>
          <li class="mob-view"><a class="phone_url" href="tel:"><img src="img/phone.webp" alt=""/></a></li>
          <li><a class="whatsapp_url" href=""><img src="img/whatsapp.webp" alt=""/></a></li>
        </ul>
      </div>
     {/* <h1>Overview</h1>
      <p>{pro.project_overview}</p> */}
    <Footer/>

      </>
    
  );
}
