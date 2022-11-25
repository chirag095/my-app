
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./slide.css"
import "./banner.css"


const SimpleSlider =({}) => {
  return (
            <Carousel className='main-slide'>
                <div>
                   
                    <img src="https://sales.ind.in/img/image1.png" />
                   
                </div>
                <div>
               
                    <img src="https://sales.ind.in/img/image2.jpg" />
                   
                </div>
                <div>
              
                    <img src="https://sales.ind.in/img/image3.png" />
                    
                </div>
            </Carousel>


        );
      }
    
    export default SimpleSlider;

// import React from 'react';
// import "./banner.css"
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
// } from 'mdb-react-ui-kit';

// export default function SimpleSlider() {
//   return (
//     <div class="container my-5">
//     <mdb-carousel class="carousel slide carousel-fade" >
//       <mdb-carousel-item>
//         <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Bear_Valley%2C_California.jpg" alt="First slide"/>
//       </mdb-carousel-item>
//       <mdb-carousel-item>
//         <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Bear_Valley%2C_California.jpg" alt="Second slide"/>
//       </mdb-carousel-item>
//       <mdb-carousel-item>
//         <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Bear_Valley%2C_California.jpg" alt="Third slide"/>
//       </mdb-carousel-item>
//     </mdb-carousel>
//   </div>
//   );
// }