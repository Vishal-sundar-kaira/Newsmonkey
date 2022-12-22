import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
  const[articles,setarticles]=useState([])
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState(1)
  const[total,settotal]=useState(38)
  const capitalize = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };
  //priority is first constructor work then render and then componenetDidMount.

  const fetchit = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=75c7fbc663db4439b83cdadb0ddf531c&page=${page}&pagesize=${props.pagesize}`;
    // this.state.opacity = 0.5;
    // {
    //   // document.body.style.opacity = this.state.opacity;
    // }
    props.setProgress(10);
    setloading({ loading: true });
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    setloading({ loading: false });
    props.setProgress(100);
    setarticles(parseData.articles);
    settotal(parseData.totalResults);
  };
  useEffect(()=>{
    fetchit();
    document.title = `${capitalize(props.category)}-News Monkey`;
  },[])//in square bracket you can put after which function you need to call useEffect.
  const handlepreviousclick = async () => {
    page -= 1;
    fetchit();
  };
  const handlenextclick = async () => {
    page += 1;
    fetchit();
  };
  const fetchMoreData =async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setpage(page+1)
    // this.state.page!=this.state.total&&this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // this.setState({ loading: false });
    setarticles(articles.concat(parseData.articles) )
  };
    return (
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!=total}
        loader={page!=total}
      >
        <div className="container my-3">
          <h1 className="text-center" style={{marginTop:'90px'}}>
            NewsMonkey:- Top {capitalize(props.category)} Headlines
          </h1>
          <div className="row my-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 60) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      // <div className="container d-flex justify-content-between">
      //   <button disabled={this.state.page<=1} type='button' className='btn-btn-dark'onClick={this.handlepreviousclick}>&larr; Previous</button>
      //   <button disabled={this.state.page>=Math.ceil(this.state.total/props.pagesize)} type='button' className='btn-btn-dark' onClick={this.handlenextclick}>Next &rarr;</button>
      // </div>
      
    );
    // News.defaultProps = {
    //   coutry: "in",
    //   pagesize: 8,
    //   category: "general",
    // };
    // News.props.= {
    //   coutry: PropTypes.string,
    //   pagesize: PropTypes.number,
    //   category: PropTypes.string,
    // };
}

export default News;
