import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from "./function/Menus";
import Home from "./function/Home";
import About from "./function/About";
import Contact from './function/Contact'
import Footer from "./function/Footer";
import Servies from './function/Servies';
import Head from "./function/Head";

 function App(){
    return(
        <>


<BrowserRouter>
<Head/>
<Menu/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/servies" element={<Servies/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>
</BrowserRouter>
        </>
    );
 }
export default App;































































// function App(){
//     let check=false// ture or false
//     let data={
//         background:"orange",
//         color:"white"
//     }
//     if(check){
//   data.background="blue"
//     }
//     return(
//         <>
//         <h1 style={data}>App Component</h1>
//         <p>Hello user </p>
//         </>
//     )
// }
// export default App;