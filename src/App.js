
import React, { Component } from 'react'
import News from './News'
import Menu from './Menu'
import {BrowserRouter,Route,Routes} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      
      <>
      
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<News category="all"/>}/>
        <Route path="/business" element={<News category="business"/>}/>
        <Route path="/sports" element={<News category="sports"/>}/>
        <Route path="/entertainment" element={<News category="entertainment"/>}/>
        <Route path="/health" element={<News category="health"/>}/>
      </Routes>
      </BrowserRouter>
   
      </>
    )
  }
}
