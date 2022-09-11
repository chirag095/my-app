 import React from 'react';
// import ReactDOM from 'react-dom/client';
//  import './index.css';
//  import App from './App';
//  import reportWebVitals from './reportWebVitals';

// // import "./sass/main.scss";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Singlepage from './Singlepage';
import Home from "./Home";
// import city from './city';
// import Blogs from "./pages/Blogs";
import PriceList from "./PriceList";
import Highlight from './Highlights';
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/singlepage/:title" element={<Singlepage />} />
          <Route path="/pricelist/:city_id" element={<PriceList/>} />
          <Route path="/highlights" element={<Highlight/>} />
          {/* <Route path="/city" element={<city/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
