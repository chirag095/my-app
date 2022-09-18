import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponets/Header';
import { Route,Routes } from 'react-router-dom';
import SimpleSlider  from './MyComponets/SimpleSlider';
import Footer  from './MyComponets/Footer';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Project from './Project';
import Singlepage from './Singlepage';
import Home from "./Home";

import PriceList from "./PriceList";
import Highlight from './Highlights';
import Localities from './Localities';
import Singlepagebanner from './Singlepagebanner';

// import Slider from "react-slick";
function App() {
  return (
    <div ClassName='App'>
  <Routes>
          <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/singlepage/:id" element={<Singlepage />} />
          <Route path="/pricelist/:locality_id" element={<PriceList/>} />
          <Route path="/localities/:city_id" element={<Localities/>} />

          <Route path="/highlights" element={<Highlight/>} />
          <Route path="/singlepagebanner" element={<Singlepagebanner/>} />

         
        </Route>
      </Routes>

   </div>
  );
}

export default App;
