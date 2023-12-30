
import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    constructor(){
        super()
        this.state={
            article:[]
        }
    }


async getData(){
    var result=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
// console.log(result.json());
let data=await result.json()
// console.log(data.articles);
this.setState({article:data.articles})
}
componentDidMount(){
    this.getData()
}
componentDidUpdate(old){
    if(old.category!==this.props.category)
    {
        this.getData()
    }
}
  render() {
    return (
     <>
   <div className='container-fluid'>
    <div className='row'>
        {this.state.article.map((item,index)=>{
return <NewsItem
title={item.title}
author={item.author}
url={item.url}
image={item.urlToImage}
content={item.content}
key={index}

/>
        })}
    </div>
   </div>
     </>
    )
  }
}
