import React, { Component } from 'react'
import Header from './MyComponets/Header';
import SimpleSlider  from './MyComponets/SimpleSlider';
import "./Page.css"
import Accordion from 'react-bootstrap/Accordion'
import Footer  from './MyComponets/Footer';


const Singlepage =({}) => {
  
    return (
        <>
        
      <Header/>
      <SimpleSlider/>
      
     <div className="CookwareMainDiv">

            <h2 className="CookwareMainDivSubDiv1h41">meet babish cookware</h2>
            <p className="CookwareMainDivSubDiv1p1">I’m launching my all-new line of cookware in three phases;<b>starting with everything you need to prep your meals.</b>
            <br/><br/> I wanted to create a high quality line of products with a price point palatable for everyday chefs. The basics, simply made better.</p>
           
           
            <hr/>
            
            <h4 CookwareMainDivSubDiv1h41>STAY IN THE LOOP</h4>
            <p CookwareMainDivSubDiv1p1>More products are coming in the coming weeks and months. If you’d like to stay in the loop about the next Babish Cookware release, add your email to the mailing list!</p>
            <button className="CookwareMainDivSubDiv1b1">VISIT THE AMAZON STORE</button>
                     
                </div>
              <div className='row'> 
              <div className='col-lg-6'>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</div>

<div className='squareFrame'>
<div className='col-lg-6'>

</div>
</div>
</div>

<br></br>





<Footer/>
      </>
    )
  
}

export default Singlepage