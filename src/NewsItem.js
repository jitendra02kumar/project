
import React, { Component } from 'react'
import pic from "./noimage.png"
export default class NewsItem extends Component {
  render() {
    return (
     <>
     <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2" >
  <img src={this.props.image?this.props.image:pic} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p>{this.props.author}</p>
    <p className="card-text">{this.props.content}</p>
    <a href={this.props.url} className="btn btn-primary">More Read</a>
  </div>
</div>
     </>
    )
  }
}
