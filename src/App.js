import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponets/Header';
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
import ChildComponent from './ChildComponent';
import Contacts from './Contacts';
import ConfirmModal from './ConfirmModal';
import Modalform from "./Modalform";

// import Slider from "react-slick";
function App() {
  return (
    <div ClassName='App'>
        <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
     
      <ChildComponent />
  <Routes>
          <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/:id" element={<Singlepage />} />
          <Route path="/localities/:locality_id" element={<Localities/>} />
          <Route path="/location/:city_id" element={<Location/>} />

          <Route path="/highlights" element={<Highlight/>} />
          <Route path="/singlepagebanner" element={<Singlepagebanner/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/ConfirmModal" element={<ConfirmModal/>} />
          <Route path="/Modalform" element={<Modalform/>} />
         

         
        </Route>
      </Routes>

   </div>
  );
}

export default App;
