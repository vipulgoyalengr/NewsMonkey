import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    //  articles= [
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Guardian"
    //     },
    //     "author": "Joan E Greve",
    //     "title": "As Republicans stumble – could Democrats really hold on to the Senate? - The Guardian US",
    //     "description": "Republicans need just one seat to regain the chamber, but recent failures mean things are looking up for the Democrats",
    //     "url": "https://amp.theguardian.com/us-news/2022/aug/27/democrats-senate-midterms-republicans",
    //     "urlToImage": "https://i.guim.co.uk/img/media/98d2ce9ee9c7cc703f80cb8a73551e1bd059c6a6/0_117_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e594e9aef229182b652739dc8660f03c",
    //     "publishedAt": "2022-08-27T09:01:00Z",
    //     "content": "Things appear to be looking up for Democratic Senate candidates.\r\nAs recently as a few months ago, Republicans were widely viewed as the favorites to take control of the Senate after the crucial US m… [+8173 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "4029tv"
    //     },
    //     "author": null,
    //     "title": "Police respond to shooting incident at Washington County Fair - 4029tv",
    //     "description": "Fayetteville police said one person suffered non-life threatening injuries from a shooting at the Washington County Fair Friday night.",
    //     "url": "https://www.4029tv.com/article/shooting-at-washington-county-fair-fayetteville-police/41005639",
    //     "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/washcoshooting-1661584255.png?crop=0.884xw:1.00xh;0.116xw,0&resize=1200:*",
    //     "publishedAt": "2022-08-27T07:47:00Z",
    //     "content": "FAYETTEVILLE, Ark. —Fayetteville police said one person was injured in a shooting incident at the Washington County Fair Friday night.\r\nSgt. Tony Murphy with the Fayetteville Police Department said o… [+625 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "cnn",
    //     "name": "CNN"
    //     },
    //     "author": "Karol Suarez",
    //     "title": "Parents of 43 missing Mexican students welcome arrest of former attorney general - CNN",
    //     "description": "The mothers and fathers of 43 Mexican students who went missing nearly eight years ago have welcomed the findings of a recent government report that found the disappearances were a \"crime of the state.\"",
    //     "url": "https://www.cnn.com/2022/08/27/americas/ayotzinapa-mexican-students-parents-intl-hnk/index.html",
    //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220826164520-01-missing-mexican-students-march-super-tease.jpg",
    //     "publishedAt": "2022-08-27T07:23:00Z",
    //     "content": "(CNN)The mothers and fathers of 43 Mexican students who went missing nearly eight years ago have welcomed the findings of a recent government report that found the disappearances were a \"crime of the… [+2210 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-washington-post",
    //     "name": "The Washington Post"
    //     },
    //     "author": "Marina Lopes",
    //     "title": "DeSantis removes Broward school board officials after Parkland report - The Washington Post",
    //     "description": "The Florida governor's suspension of the officials was praised by the families of victims of school violence, but also sparked accusations of overreach.",
    //     "url": "https://www.washingtonpost.com/politics/2022/08/27/desantis-broward-school-board-parkland/",
    //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3L2TO6REHAI63JZPDZYUSBZPXQ.jpg&w=1440",
    //     "publishedAt": "2022-08-27T06:42:38Z",
    //     "content": "Comment on this story\r\nFlorida Gov. Ron DeSantis (R) suspended four elected school-board members on Friday, after a grand jury found that they had acted with negligence and incompetence in implementi… [+3866 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "New York Post"
    //     },
    //     "author": "Associated Press",
    //     "title": "Father, son clinging to cooler rescued from Boston Harbor - New York Post ",
    //     "description": "The men said their boat’s 28-foot engine got tangled in lobster lines and failed. The current pushed the boat onto the rocks and punctured the hull, police said.",
    //     "url": "https://nypost.com/2022/08/27/boston-police-rescue-father-son-clinging-to-cooler-from-boston-harbor/",
    //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/newspress-collage-23635794-1661575670261.jpg?quality=75&strip=all&1661561560&w=1024",
    //     "publishedAt": "2022-08-27T05:08:00Z",
    //     "content": "BOSTON In the nick of time, the Boston Police Departments harbor patrol unit rescued a father and son who were desperately clinging to a drinks cooler at the outermost edge of Boston Harbor after the… [+1526 chars]"
    //     }
    // ]
    static defaultProps={
        country:"in",
        pagesize: 8
    }

    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number
    }
    constructor(){
        super();
        this.state={
            // articles: this.articles,
            articles: [],
            loading:false,
            pageNo:1,totalResults:0
        }
    }
   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({articles:parseddata.articles,totaldata:parseddata.totalResults})
        console.log(parseddata);
    }
    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNo+1}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({articles:this.state.articles.concat(parseddata.articles),pageNo:this.state.pageNo+1})
        console.log(parseddata);
      };
    handlePrevious=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cd528de26c544d84bff2d2e8c10b664a&page=${this.state.pageNo-1}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({articles:parseddata.articles,pageNo:this.state.pageNo-1})
        console.log(parseddata);
 
    }
    handleNext=async ()=>{
        console.log(!(this.state.pageNo+1>Math.ceil(this.state.totaldata/this.state.pagesize)))
        if(!(this.state.pageNo+1>Math.ceil(this.state.totaldata/this.state.pagesize))){
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cd528de26c544d84bff2d2e8c10b664a&page=${this.state.pageNo+1}&pageSize=${this.props.pagesize}`;
            let data=await fetch(url);
            let parseddata=await data.json();
            this.setState({articles:parseddata.articles,pageNo:this.state.pageNo+1})
            console.log(parseddata);


        }


    }
  render() {

    return (
      <div className='container my-3'>
        <h2>Top News Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
        //   loader={<h4>Loading...</h4>}
        >
        {/* This is a News Component. */}
        <div className='container'>
        <div className="row">

            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} url={element.urlToImage} newsUrl={element.url} author={element.author}
                date={element.publishedAt} source={element.source.name}
                />
                </div>
            })}
            {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.pageNo<=1} type="button" className="btn btn-primary" onClick={this.handlePrevious}> Previous</button>
            <button type="button" className="btn btn-primary" onClick={this.handleNext}>Next</button>

            </div> */}
            {/* <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDesc"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="myTitle" description="myDesc"/>
            </div> */}

        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
