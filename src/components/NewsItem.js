import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,url,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width:'18rem'}}>
                <img src={url?url:"https://static01.nyt.com/images/2022/08/27/multimedia/27ukraine-briefing-promo-0800/27ukraine-briefing-promo-0800-facebookJumbo.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>

      </div>
    )
  }
}

export default NewsItem
