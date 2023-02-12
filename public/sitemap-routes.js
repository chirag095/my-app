import React from 'react';
import { Route } from 'react-router';
import Singlepage from './Singlepage';
import Home from "./Home";
import Localities from "./Localities";
import Highlight from './Highlights';
import Location from './Location';
import Singlepagebanner from './Singlepagebanner';
import ChildComponent from './ChildComponent'
 
export default (
    <Route>
	<Route path="/"/>
          <Route index element={<Home/>} />

          <Route path="/:city_id" element={<Location/>} />       
          <Route path="/:city_id/:locality_id" element={<Localities/>} />
          <Route path="/:city_id/:locality_id/:id" element={<Singlepage />} />
    </Route>
);