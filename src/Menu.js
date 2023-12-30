
import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Menu extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"><span className='fa fa-house'></span>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment">entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health">health</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
      </>
    )
  }
}
