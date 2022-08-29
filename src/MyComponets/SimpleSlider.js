
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./slide.css"
// import nitin from "../image/nitin.jpg"
// import nitin1 from "../image/nitin1.jpg"
// import nitin2 from "../image/nitin2.jpg"

// const SimpleSlider =({}) => {
//   return (
//             <Carousel className='main-slide'>
//                 <div>
//                     <img src={nitin}/>
//                     {/* <img src="image/nitin.jpg" /> */}
                   
//                 </div>
//                 <div>
//                 <img src={nitin1}/>
//                     {/* <img src="image/nitin1.jpg" /> */}
                   
//                 </div>
//                 <div>
//                 <img src={nitin2}/>
//                     {/* <img src="image/nitin2.jpg" /> */}
                    
//                 </div>
//             </Carousel>


//         );
//       }
    
//     export default SimpleSlider;

import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function SimpleSlider() {
  return (
    <MDBCarousel showIndicators showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

  );
}