import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Errorpage from './modules/shares/Errorpage';
import "./modules/CSS/global.css";
import "./modules/dashboard/Detailspage";
import Myregister from './modules/Auth/Myregister';
import Detailspage from './modules/dashboard/Detailspage';
import Edituser from './modules/dashboard/Edituser';
import Landingpage from './modules/dashboard/Landiningpage';
import Footer from './modules/shares/Footer';
import Mynavbar from './modules/shares/Mynavbar';
import Mylogin from "./modules/Auth/Mylogin"

import About from './modules/Public/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mynavbar />
      <Routes>
        <Route path='/' element={<Mylogin />} />
        <Route path='/about' element={< About />} />
        <Route path='/dashboard' element={<Landingpage />} />
        <Route path='/dashboard/userDetails/:id' element={<Detailspage />} />
        <Route path='/dashboard/editpage/:id' element={<Edituser />} />
        <Route path='/registor' element={<Myregister />} />
        <Route path='*' element={<Errorpage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
