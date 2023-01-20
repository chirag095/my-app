import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
// import Project from './Project';
import Singlepage from './Singlepage';
import Home from "./Home";
import Localities from "./Localities";
import Highlight from './Highlights';
import Location from './Location';
import Singlepagebanner from './Singlepagebanner';
import ChildComponent from './ChildComponent'





// import Slider from "react-slick";
function App() {
  return (
    <div ClassName='App'>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <ChildComponent/>
        <Routes>
          <Route path="/"/>
          <Route index element={<Home/>} />

          <Route path="/:city_id" element={<Location/>} />       
          <Route path="/:city_id/:locality_id" element={<Localities/>} />
          <Route path="/:city_id/:locality_id/:id" element={<Singlepage />} />




          <Route path="/singlepagebanner" element={<Singlepagebanner/>} />
          <Route path="/highlights" element={<Highlight/>} />
        
         
        </Routes>
       

   </div>
  );
}

export default App;
